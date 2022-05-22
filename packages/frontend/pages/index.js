import styled from "styled-components";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../styles/Home.module.css";
import { useState } from "react";

import { FlashPlayground, FlashCard, Deposit } from "../components/contract";

export default function Home() {
  return (
    <>
      <Navbar>
        <h1>
          Flash<span className={styles.Swapspan}>Swap</span>
        </h1>
        <ConnectButton />
      </Navbar>

      <FlashPlayground />
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
