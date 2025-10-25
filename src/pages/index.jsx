import styles from "@/styles/Home.module.css";
import FirstView from "@/components/FirstView/FirstView";
import Mobile from "@/components/Mobile/Mobile";
import SecondView from "@/components/SecondView/SecondView";
import About from "@/components/About/About";
import Feature from "@/components/Feature/Feature";
import Menu from "@/components/Menu/Menu";
import News from "@/components/News/News";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <Mobile>
              <FirstView />
              <SecondView />
              <About />
              <Feature />
              <Menu />
              <News />
            </Mobile>
          </div>
        </div>
      </main>
    </>
  )
}