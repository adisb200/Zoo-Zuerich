'use client'
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Link href={'pages/buyticket'}>test</Link>
            <br></br>
            <Link href={'pages/showticket'}>Ticket Anzeigen</Link>
        </div>
    );
}
