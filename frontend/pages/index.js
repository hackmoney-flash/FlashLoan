import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <nav className={styles.Navbar}>
        <h1>Flash Loan</h1>
        <ConnectButton />
      </nav>
      <section>
        <div className={styles.buttonWrapper}>
          <button>Approve</button>
          <button>Send</button>
        </div>
      </section>
    </>
  );
}
