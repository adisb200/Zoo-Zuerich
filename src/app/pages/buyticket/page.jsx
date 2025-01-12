'use client'

import {useState} from "react";
import styles from "./page.module.css"
import "./styles.css"
import Link from "next/link";


export default function Page() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        personCount: "",
        people: [{name: "", ticketType: "free"}],
        date: "",
        special: "none",
        paymentMethod: "Twint",
        ovTicket: {selected: false, place: ""},
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
        console.log(formData);
    };

    const resetForm = () => {
        setFormData({
            personCount: "",
            people: [{name: "", ticketType: "free"}],
            name: "",
            date: "",
            special: "none",
            paymentMethod: "Twint",
            ovTicket: {selected: false, place: ""},
        });
        setStep(1);
    };

    function calculateFinalPrice() {
        const kidPrice = 6;
        const adultPrice = 12;
        const ovTicketPrice = 6;
        let totalPrice = 0;

        formData.people.forEach(person => {
            if (person.ticketType === "kid") {
                totalPrice += kidPrice;
            } else if (person.ticketType === "adult") {
                totalPrice += adultPrice;
            }
        });

        if (formData.ovTicket.selected) {
            totalPrice += formData.people.length * ovTicketPrice;
        }

        return totalPrice;
    }

    return (
        <div className={styles.container}>
            <header>Ticket Kauf</header>
            {step === 1 && (
                <div className={styles.content}>
                    <h3>Daten angeben</h3>
                    <label htmlFor="personCount">Anzahl Leute</label>
                    <input
                        type="number"
                        name="personCount"
                        id="personCount"
                        value={formData.personCount}
                        onChange={handleChange}
                        placeholder="Anzahl Personen"
                    />
                    <label htmlFor="name">Personen Erfassen</label>
                    {formData.people.map((person, index) => (
                        <div key={index} className={styles.flexdiv}>
                            <input
                                type="text"
                                name="name"
                                value={person.name}
                                onChange={(e) => {
                                    const newPeople = [...formData.people];
                                    newPeople[index].name = e.target.value;
                                    setFormData({...formData, people: newPeople});
                                }}
                                placeholder="Vorname Nachname"
                            />
                            <select
                                name="age"
                                id="ticketType"
                                value={person.ticketType}
                                onChange={(e) => {
                                    const newPeople = [...formData.people];
                                    newPeople[index].ticketType = e.target.value;
                                    setFormData({...formData, people: newPeople});
                                }}>
                                <option value="free">0-6</option>
                                <option value="kid">6-17</option>
                                <option value="adult">18+</option>
                            </select>
                        </div>
                    ))}
                    <div className={styles.flexdiv}>
                        <button
                            onClick={() =>
                                setFormData({
                                    ...formData,
                                    people: [...formData.people, {name: "", ticketType: "free"}],
                                })
                            } className={styles.buttonBlue}>+
                        </button>
                        <button
                            onClick={() =>
                                setFormData({
                                    ...formData,
                                    people: [...formData.people.slice(0, -1)],
                                })
                            } className={styles.buttonRed}>-
                        </button>
                    </div>


                    <label htmlFor="date">Datum</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        value={formData.date}
                        onChange={handleChange}
                    />

                    <button onClick={() => setStep(2)}>Nächste Seite</button>
                </div>
            )}

            {step === 2 && (
                <div className={styles.content}>
                    <h3>Tickets</h3>
                    <label className={styles.ticketLabel}>
                        <span
                            className={styles.ticketCount}>{formData.people.filter(person => person.ticketType === "free").length}</span> Jünger
                        als 6 (Kostenlos)
                    </label>

                    <label className={styles.ticketLabel}>
                        <span
                            className={styles.ticketCount}>{formData.people.filter(person => person.ticketType === "kid").length}</span> 6
                        -17 Jahre (6 CHF.-)
                    </label>

                    <label className={styles.ticketLabel}>
                        <span
                            className={styles.ticketCount}>{formData.people.filter(person => person.ticketType === "adult").length}</span> 18+
                        Jahre (12 CHF.-)
                    </label>

                    <label htmlFor="special">Spezial Tickets</label>
                    <select
                        name="special"
                        id="special"
                        value={formData.special}
                        onChange={handleChange}
                    >
                        <option value="none">Keine</option>
                        <option value="group">Gruppenticket (10 Personen)</option>
                        <option value="family">Familienticket</option>
                        <option value={"company"}>Firmenausflug</option>
                    </select>

                    <button className={`${styles.buttonGreen} ${styles.center}`}><Link
                        href={"https://www.zoo.ch/de"}></Link>Kontakt
                    </button>

                    <button onClick={() => setStep(3)}>Weiter</button>
                </div>
            )}

            {step === 3 && (
                <div className={styles.content}>
                    <h3>Zahlungsart auswählen</h3>
                    <h4>Bezahlungsmöglichkeiten</h4>
                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="Twint"
                            checked={formData.paymentMethod === "Twint"}
                            onChange={handleChange}
                        />
                        Twint
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="Kreditkarte"
                            checked={formData.paymentMethod === "Kreditkarte"}
                            onChange={handleChange}
                        />
                        Kreditkarte
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="PayPal"
                            checked={formData.paymentMethod === "PayPal"}
                            onChange={handleChange}
                        />
                        PayPal
                    </label>

                    <br/>

                    <h3>ÖV Tages Ticket</h3>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <input type="checkbox" name="ovTicket" checked={formData.ovTicket.selected}
                               onChange={handleChange}/>
                        Von:
                        <label>
                            <input type="text" name="ovTicket.place" value={formData.ovTicket.place}
                                   onChange={(e) => setFormData({
                                       ...formData,
                                       ovTicket: {...formData.ovTicket, place: e.target.value}
                                   })} placeholder="Ort"/>
                        </label>
                        6 CHF.- pro Person
                    </div>

                    <h3>Total Price: {calculateFinalPrice()} CHF</h3>
                    <button onClick={() => setStep(4)}>Bestätigen</button>
                </div>
            )}

            {step === 4 && (
                <div className={styles.content}>
                    <h3>Bestätigung</h3>
                    <p>Wollen Sie den Kauf bestätigen?</p>
                    <button onClick={() => setStep(5)}>Bestätigen</button>
                </div>
            )}

            {step === 5 && (
                <div className={styles.content}>
                    <h3>Danke für Ihren Kauf!</h3>
                    <button onClick={resetForm}>Schließen</button>
                </div>
            )}
        </div>
    )
}
