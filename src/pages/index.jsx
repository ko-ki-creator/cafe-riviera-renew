import styles from "@/styles/Home.module.css";
import FirstView from "@/components/FirstView/FirstView";
import Mobile from "@/components/Mobile/Mobile";
import SecondView from "@/components/SecondView/SecondView";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <Mobile>
              <FirstView />
              <SecondView />
            </Mobile>
          </div>
        </div>
      </main>
    </>
  )
}