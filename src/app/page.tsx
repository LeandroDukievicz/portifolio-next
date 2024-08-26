import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

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
              src="/assets/fotoperfil.svg" // Caminho relativo a partir da pasta public
              alt="Descrição da imagem" // Descrição alternativa da imagem
              layout="fill" // Ajusta a imagem para preencher a div
              objectFit="cover" // Mantém a proporção e cobre a div
            />
          </div>
      </div>
      </div>

     

    </section>

    

   )
}    