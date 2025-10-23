import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import FirstView from "@/components/FirstView/FirstView";
import Mobile from "@/components/Mobile/Mobile";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <Mobile>
              <FirstView />
            </Mobile>
          </div>
        </div>
      </main>
    </>
  )
}