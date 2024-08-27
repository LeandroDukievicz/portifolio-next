import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

import styles from "./styles.module.css"
import Image from "next/image"

export default function Contact(){
    return(
        <div>
            <FaGithubSquare className={`${styles.icons}`}/>
            <MdMail className={`${styles.IconMail}`}/>
            <FaLinkedin  className={`${styles.icons}`}/>
           
        </div>
    )
}