import styled from "styled-components";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../styles/Home.module.css";
import { useState } from "react";

import { FlashPlayground, FlashCard, Deposit } from "../components/contract";
import { SwapNavigation } from "../components/elements/SwapNavigation";

export default function Home() {
  return (
    <>
      <Navbar>
        <h1>
          Flash<span className={styles.Swapspan}>Swap</span>
        </h1>
        <SwapNavigation>
          <a className={styles.aLink} href="#">Swap</a>
          <a className={styles.aLink} href="#">Pool</a>
          <a className={styles.aLink} href="#">Vote</a>
          <a className={styles.aLink} href="#">Charts</a>
        </SwapNavigation>
        <ConnectButton />
      </Navbar>
      <FlashCard />
      <Deposit />
    </>
  );
}

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 2rem; 
  }
`;
