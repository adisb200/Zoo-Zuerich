'use client'

import {useState} from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import logoSvg from '../../../assets/images/logo.svg'

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div>
                <MenuIcon onClick={() => setOpen(!open)}/>
                <Image height={20} src={logoSvg} alt={'logo'}/>
            </div>


            {open && <div className={'styles.flex'}>
                <Link className={styles.link} href={"/"}>Tickets anzeigen</Link>
                <Link className={styles.link} href={"/"}>Karten & Route</Link>
                <Link className={styles.link} href={"/"}>Tickets kaufen</Link>
            </div>}
        </>)
}