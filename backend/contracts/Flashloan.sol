// SPDX-License-Identifier: MIT
pragma solidity ^0.6.6;

//import "@openzeppelin/contracts/utils/math/SafeMath.sol"; for v3
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "./aave/FlashLoanReceiverBaseV2.sol";
import "./interfaces/ILendingPoolAddressesProviderV2.sol";
import "./interfaces/ILendingPoolV2.sol";
import "./interfaces/IUniswapRouterV2.sol";
//import "./Withdraw.sol";


contract FlashLoan is FlashLoanReceiverBaseV2, Withdrawable {
  using SafeMath for uint;
  event Log(address asset, uint val);

  address public constant ROUTER = 0x8954AfA98594b838bda56FE4C12a09D7739D179b;
  address public fromToken;
  uint256 public fromTokenInd;
  address public toToken;
  uint256 public toTokenInd;
  uint256 public owed;
  uint256 public bal;
  bool public tokensSet = false; 



  constructor(address provider) public FlashLoanReceiverBaseV2(provider) {}

  
   function executeOperation(
    address[] calldata assets,
    uint256[] calldata amounts,
    uint256[] calldata premiums,
    address initiator,
    bytes calldata params
  ) external override returns (bool){
    // do things like arbitrage here
    // abi.decode(params) to decode params

    ///the magic happens
       require(tokensSet, "Tokens not set");
        owed = amounts[0].add(premiums[0]);

        swap_quickswap(IERC20(toToken).balanceOf(address(this)));
        swap_quickswap(IERC20(fromToken).balanceOf(address(this)));

        bal = IERC20(assets[0]).balanceOf(address(this));
      //  require(bal > owed, "Did not make profit");  //killing this for now

    //

    for (uint i = 0; i < assets.length; i++) {
            uint amountOwing = amounts[i].add(premiums[i]);
            IERC20(assets[i]).approve(address(LENDING_POOL), amountOwing);
        }
        return true;
  }

  function _flashloan(address[] memory assets, uint256[] memory amounts) internal {
      address receiverAddress = address(this);

        address onBehalfOf = address(this);
        bytes memory params = "";
        uint16 referralCode = 0;

        uint256[] memory modes = new uint256[](assets.length);

        // 0 = no debt (flash), 1 = stable, 2 = variable
        for (uint256 i = 0; i < assets.length; i++) {
            modes[i] = 0;
        }

      LENDING_POOL.flashLoan(
       receiverAddress,
        assets,
        amounts,
        modes,
        onBehalfOf,
        params,
        referralCode
      );
  }

  function flashloan(address[] memory assets, uint256[] memory amounts) public onlyOwner {
        _flashloan(assets, amounts);
    }

    function swap_quickswap(uint256 amount) public {
        address[] memory path;
        path = new address[](2);
        path[0] = toToken;
        // path[1] = WMATIC;
        path[1] = fromToken;
        IUniswapRouterV2(ROUTER).swapExactTokensForTokens(amount, 1, path, address(this), block.timestamp + 99999999);
    }

    function setTokens(address from, uint256 fromInd, address to, uint256 toInd) public onlyOwner {
        fromToken = from;
        fromTokenInd = fromInd;
        toToken = to;
        toTokenInd = toInd;
        tokensSet = true;
        IERC20(toToken).approve(ROUTER, type(uint256).max);
        // IERC20(toToken).approve(ATRIV3, type(uint256).max);
         IERC20(fromToken).approve(ROUTER, type(uint256).max);
        //IERC20(fromToken).approve(ATRIV3, type(uint256).max);
    }



}