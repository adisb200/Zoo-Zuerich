'use client'

import {useState} from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.flex}>
            <MenuIcon onClick={() => setOpen(!open)}/>

            {open && <div>
                <Link className={styles.link} href={"/"}>Tickets anzeigen</Link>
                <Link className={styles.link} href={"/"}>Karten & Route</Link>
                <Link className={styles.link} href={"/"}>Tickets kaufen</Link>
            </div>}
        </div>)
}