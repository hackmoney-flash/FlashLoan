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
        <SwapNavigation>
          <button className={styles.aLink} onClick={() => setNav("swap")}>
            Swap
          </button>
          <button className={styles.aLink} onClick={() => setNav("deposit")}>
            Deposit
          </button>
          <button className={styles.aLink} onClick={() => setNav("withdrawl")}>
            Withdrawl
          </button>
        </SwapNavigation>
        <ConnectButton />
      </Navbar>
      {nav === "swap" && <FlashCard />}
      {nav === "deposit" && <Deposit />}
      {nav === "withdrawl" && <Withdrawl />}
    </>
  );
}

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 2rem; 
  }
`;
