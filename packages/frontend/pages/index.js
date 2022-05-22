import styled from "styled-components";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../styles/Home.module.css";
import { useState } from "react";

import { FlashCard, Deposit, Withdrawl } from "../components/contract";

import { SwapNavigation } from "../components/elements/SwapNavigation";

export default function Home() {
  const [nav, setNav] = useState("swap");
  return (
    <>
      <Navbar>
        <h1>
          Flash<span className={styles.Swapspan}>Swap</span>
        </h1>

        <ConnectButton />
      </Navbar>
      <Container>
        <SwapNavigation>
          <NavButton
            onClick={() => setNav("swap")}
            activeStyle={nav === "swap"}
          >
            Swap
          </NavButton>
          <NavButton
            onClick={() => setNav("deposit")}
            activeStyle={nav === "deposit"}
          >
            Deposit
          </NavButton>
          <NavButton
            onClick={() => setNav("withdrawl")}
            activeStyle={nav === "withdrawl"}
          >
            Withdrawl
          </NavButton>
        </SwapNavigation>
        {nav === "swap" && <FlashCard />}
        {nav === "deposit" && <Deposit />}
        {nav === "withdrawl" && <Withdrawl />}
      </Container>
    </>
  );
}

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 2rem; 
  }
`;

const NavButton = styled.button`
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  color: #444;
  padding: 1rem;
  margin: 0;
  text-transform: uppercase;
  @media only screen and (min-width: 640px) {
    font-size: 1rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 1.25rem;
  }

  &:hover {
    color: #111;
    background: rgba(93, 95, 239, 0.1);
    box-shadow: 0 1rem 1rem 0 rgba(93, 95, 239, 0.1),
      0 1px 5px 0 rgba(93, 95, 239, 0.06);
  }
  color: ${(props) => (props.activeStyle ? "#222" : "#666")};

  background: ${(props) =>
    props.activeStyle ? "rgba(93, 95, 239, 0.1)" : "#fff"};

  box-shadow: ${(props) =>
    props.activeStyle
      ? "0 1rem 1rem 0 rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.06)"
      : "none"};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 6rem;
  padding: 0rem 1rem;
  @media only screen and (min-width: 640px) {
    padding: 0rem 4rem;
  }
  @media only screen and (min-width: 768px) {
    padding: 0rem 8rem;
  }
  @media only screen and (min-width: 1024px) {
    padding: 0rem 12rem;
  }
  @media only screen and (min-width: 1280px) {
    padding: 0rem 20rem;
  }
`;
