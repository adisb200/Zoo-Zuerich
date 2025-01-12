'use client'

import {useState} from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import logoSvg from '../../../assets/images/logo.svg'

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        {href: '/', label: 'Home'},
        {href: '/pages/showticket', label: 'Tickets anzeigen'},
        {href: '/pages/map', label: 'Karten & Route'},
        {href: '/pages/buyticket', label: 'Tickets kaufen'}
    ];


    return (<div className={styles.background}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <MenuIcon onClick={() => setOpen(!open)} style={{height: 50, width: 50}}/>
            <Image height={50} src={logoSvg} alt={'logo'}/>
        </div>


        {open && <div className={styles.navbar}>
            {links.map(({href, label}) => (
                <Link onClick={() => setOpen(!open)} key={href} href={href} className={styles.link}>{label}</Link>))}
        </div>}

    </div>)
}