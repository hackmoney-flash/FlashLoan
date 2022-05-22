import styled from "styled-components";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../styles/Home.module.css";
import { useState } from "react";

import { FlashCard, Deposit, Withdrawl } from "../components/contract";

import { SwapNavigation } from "../components/elements/SwapNavigation";

export default function Home() {
  return (
    <>
      <Navbar>
        <h1>
          Flash<span className={styles.Swapspan}>Swap</span>
        </h1>
        <SwapNavigation>
          <a className={styles.aLink} href="#">
            Swap
          </a>
          <a className={styles.aLink} href="#">
            Deposit
          </a>
          <a className={styles.aLink} href="#">
            Withdrawl
          </a>
        </SwapNavigation>
        <ConnectButton />
      </Navbar>
      <FlashCard />
      <Deposit />
      <Withdrawl />
    </>
  );
}

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 2rem; 
  }
`;
