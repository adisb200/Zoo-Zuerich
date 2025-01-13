'use client'

import {useEffect, useState} from 'react';

export default function Page() {
    const [visibleSection, setVisibleSection] = useState(null);
    const [zooTickets, setZooTickets] = useState([]);
    const [oevTickets, setOevTickets] = useState([]);

    useEffect(() => {
        // Fetch Zoo Tickets
        fetch('/api/tickets')
            .then(response => response.json())
            .then(data => setZooTickets(data))
            .catch(error => console.error('Error fetching zoo tickets:', error));

        // Fetch ÖV Tickets
        fetch('/api/oevTickets')
            .then(response => response.json())
            .then(data => setOevTickets(data))
            .catch(error => console.error('Error fetching ÖV tickets:', error));
    }, []);

    const handleButtonClick = (section) => {
        setVisibleSection(section);
    };

    return (
        <div id="container">
            {/* Top Button */}
            <br/>
            <br/>
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