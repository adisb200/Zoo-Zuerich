'use client'

import { useState } from 'react';

const zooTickets = [
    {
        id: 1,
        title: "Einzelperson - Jugendlich 03. November 2024",
        details: {
            validity: "03.10.2024",
            type: "Standard",
        },
    },
    {
        id: 2,
        title: "Einzelperson - Erwachsener 10. December 2024",
        details: {
            validity: "10.12.2024",
            type: "Premium",
        },
    },
];

const oevTickets = [
    {
        id: 1,
        title: "ZVV 24h-Ticket 05. Dezember 2024",
        details: {
            validity: "05.12.2024",
            type: "24h-Ticket",
            class: "2. Klasse",
        },
    },
];



export default function Page() {
    const [visibleSection, setVisibleSection] = useState(null);

    const handleButtonClick = (section) => {
        setVisibleSection(section);
    };

    return (
        <div id="container">
            {/* Top Button */}
            <div id="top">
                {visibleSection === 'zooTickets' && (
                    <button onClick={() => handleButtonClick(null)}>Zoo Tickets</button>
                )}
                {visibleSection === 'oevTickets' && (
                    <button onClick={() => handleButtonClick(null)}>ÖV Tickets</button>
                )}
            </div>

            {/* Content */}
            {visibleSection && (
                <div id="content">
                    {visibleSection === 'zooTickets' && (
                        <div>
                            <ul>
                                {zooTickets.map(ticket => (
                                    <li key={ticket.id}>
                                        <h3>{ticket.title}</h3>
                                        <p><strong>Gültig bis:</strong> {ticket.details.validity}</p>
                                        <p><strong>Typ:</strong> {ticket.details.type}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {visibleSection === 'oevTickets' && (
                        <div>
                            <ul>
                                {oevTickets.map(ticket => (
                                    <li key={ticket.id}>
                                        <h3>{ticket.title}</h3>
                                        <p><strong>Gültig bis:</strong> {ticket.details.validity}</p>
                                        <p><strong>Typ:</strong> {ticket.details.type}</p>
                                        <p><strong>Klasse:</strong> {ticket.details.class}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            {/* Bottom Button */}
            <div id="bottom">
                {visibleSection !== 'zooTickets' && (
                    <button onClick={() => handleButtonClick('zooTickets')}>Zoo Tickets</button>
                )}
                {visibleSection !== 'oevTickets' && (
                    <button onClick={() => handleButtonClick('oevTickets')}>ÖV Tickets</button>
                )}
            </div>
        </div>
    );
}