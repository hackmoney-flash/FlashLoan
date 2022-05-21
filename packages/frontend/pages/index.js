import styled from "styled-components";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import { FlashPlayground, FlashCard } from "../components/contract";

export default function Home() {
  return (
    <>
      <Navbar>
        <h1>
          Flash<span className={styles.Swapspan}>Swap</span>
        </h1>
        <ConnectButton />
      </Navbar>
      <SwapSection>
        <Menu>
          <Menu.Button className={styles.MenuButton}>Select Token</Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className={styles.MenuItems}>
              <Menu.Item>
                <a href="/account-settings">Dai</a>
              </Menu.Item>
              <Menu.Item>
                <a href="/account-settings">USDC</a>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </SwapSection>
      <FlashPlayground />
      <FlashCard />
    </>
  );
}

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 2rem; 
  }
`;

const SwapSection = styled.section`
  height: 100vh;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 200px;
`;
