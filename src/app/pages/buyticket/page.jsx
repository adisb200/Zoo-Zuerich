'use client'

import {useState} from "react";
import styles from "./page.module.css"
import "./styles.css"

export default function Page() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        personCount: "",
        name: "",
        date: "",
        ticketType: "Standard",
        special: "none",
        paymentMethod: "Twint",
        ovTicket: false,
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const resetForm = () => {
        setFormData({
            personCount: "",
            name: "",
            date: "",
            ticketType: "Standard",
            special: "none",
            paymentMethod: "Twint",
            ovTicket: false,
        });
        setStep(1);
    };

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
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Vorname Nachname"
                    />

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
                    <label>
                        <input
                            type="radio"
                            name="ticketType"
                            value="Standard"
                            checked={formData.ticketType === "Standard"}
                            onChange={handleChange}
                        />
                        Erwachsene (18+ Jahre) - 12 CHF
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="ticketType"
                            value="Child"
                            checked={formData.ticketType === "Child"}
                            onChange={handleChange}
                        />
                        Kinder (0-17 Jahre) - 8 CHF
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
                    </select>

                    <button onClick={() => setStep(3)}>Weiter</button>
                </div>
            )}

            {step === 3 && (
                <div className={styles.content}>
                    <h3>Zahlungsart auswählen</h3>
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

                    <h4>Zusatzoptionen</h4>
                    <label>
                        <input
                            type="checkbox"
                            name="ovTicket"
                            checked={formData.ovTicket}
                            onChange={handleChange}
                        />
                        ÖV Tages Ticket (6 CHF)
                    </label>

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
