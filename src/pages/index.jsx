import styles from "@/styles/Home.module.css";
import FirstView from "@/components/FirstView/FirstView";
import Mobile from "@/components/Mobile/Mobile";
import SecondView from "@/components/SecondView/SecondView";
import About from "@/components/About/About";
import Feature from "@/components/Feature/Feature";
import Menu from "@/components/Menu/Menu";
import News from "@/components/News/News";
import Access from "@/components/Access/Access";
import Infomation from "@/components/Infomation/Infomation";
import Reserve from "@/components/Reserve/Reserve";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <Mobile>
          <FirstView />
          <SecondView />
          <About />
          <Feature />
          <Menu />
          <News />
          <Access />
          <Infomation />
          <Reserve />
          <Footer />
        </Mobile>
      </main>
    </>
  )
}