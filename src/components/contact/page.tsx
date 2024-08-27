import Link from "next/link"

import github from "../../../public/assets/github.png"
import linkedin from "../../../public/assets/linkedin.png"
import gmail from "../../../public/assets/gmail.png"

import styles from "./styles.module.css"
import Image from "next/image"

export default function Contact(){
    return(
        <div className={styles.contentIcon}>
            <Link href="/">
                <Image 
                    className={`${styles.gitIcon}`}
                    src={github}
                    alt="github logo"
                />
            </Link>
            
            <Link href="/">
                <Image 
                    className={`${styles.icons}`}
                    src={linkedin}
                    alt="linkedin logo"
                />
            </Link>

            <Link href="/">
                <Image 
                    className={`${styles.icons}`}
                    src={gmail}
                    alt="gmail logo"
                />
</Link>



           
        </div>
    )
}