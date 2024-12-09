'use client'

import {useState} from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.flex}>
            <img src={'../../../../assets/icons/menu.png'} alt="menu" onClick={() => setOpen(!open)} />

            {open && <div>
                <Link className={styles.link} href={"/"}>Tickets anzeigen</Link>
                <Link className={styles.link} href={"/"}>Karten & Route</Link>
                <Link className={styles.link} href={"/"}>Tickets kaufen</Link>
            </div>}
        </div>)
}