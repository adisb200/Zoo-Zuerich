import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import giraffeImg from "./img/giraffe.png";
import turtleImg from "./img/turtle.jpg";
import qrCode from "./img/qrcode.png"

function App() {
    return (
        <div>
            <header></header>
            <main>
                <div className="featured-image">
                    <Image src={giraffeImg} alt="giraffe" layout="responsive" width={600} height={400} />
                    <div className="section-title">ZOO DER ZUKUNFT</div>
                </div>

                <div id="flexBox">
                    <div className="sidebar">
                        <div className="menu-section">
                            <span className="icon">📆</span>
                            <div className="menu-title">
                                <Link href={"/pages/showticket"}></Link>
                                Zoo Besuch Planen</div>
                        </div>
                        <div className="menu-section">
                            <span className="icon">🗺️</span>
                            <div className="menu-title"><Link href={"/pages/map"}>Karte & Route</Link></div>
                        </div>
                        <div className="menu-section">
                            <span className="icon">🎟️</span>
                            <div className="menu-title">
                                <Link href="/pages/buyticket">Tickets kaufen</Link>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <p>ÖFFNUNGSZEITEN</p>
                        <div className="hours">
                            <div className="time">
                                <h4>März bis Oktober</h4>
                                <p>Zoo: 9-18 Uhr</p>
                                <p>Masola: 10-18 Uhr</p>
                            </div>
                            <div className="time">
                                <h4>November bis Februar</h4>
                                <p>Zoo: 9-17 Uhr</p>
                                <p>Masola: 10-17 Uhr</p>
                            </div>
                        </div>
                        <Image src={turtleImg} alt="Turtle" id="turtle"/>
                    </div>
                </div>
                <div className="ticket-section">
                    <div className="ticket">
                        <p><strong>Name:</strong> Schneider</p>
                        <p><strong>Vorname:</strong> Max</p>
                    </div>

                    <Image src={qrCode} id="qrCode" alt="QR Code" />
                </div>
            </main>
        </div>
    );
}

export default App;
