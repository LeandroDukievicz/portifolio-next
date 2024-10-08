import Image from "next/image";
import Link from "next/link";


import styles from "./page.module.css";

import AnimatedLine from "@/components/AnimatedLine";
import { Description } from "@/components/description/index";
import Contact from "@/components/contact";

export default function Home() {
  return (
     
      <section className={styles.containerHome}>
        <div className={styles.boxHome}>
          <nav className={styles.navbar}>
            <ul className={styles.list}>
              <li className={styles.li}>
                <Link className={styles.link} href="#">Home</Link>
              </li>
              <li>
                <Link className={styles.link} href="#">Sobre</Link>
              </li>
              <li>
                <Link className={styles.link} href="#">Skills</Link>
              </li>
              <li>
                <Link className={styles.link} href="#">Projetos</Link>
              </li>
            </ul>
          </nav>

          <div className={styles.contentImage}>
            <div className={styles.imgBox}>
              <Image 
                className={styles.img}
                src="/assets/foto.svg" 
                alt="foto" 
                layout="fill" 
                objectFit="cover" 
              />
            </div>
          </div>

          <div className={styles.article}>
            <div className={styles.AnimatedLine}>
              <AnimatedLine  />
            </div>
            <h1 className={styles.name}>Leandro Dukiévicz</h1>
            <h2 className={styles.JobName}>Desenvolvedor Front End</h2>
            <Description />
            <Contact />
          </div>
        </div>
      </section>
  );
}
