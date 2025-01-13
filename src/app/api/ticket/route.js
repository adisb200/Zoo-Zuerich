const zooTickets = [
    {
        id: 1, title: "Einzelperson - Jugendlich 03. November 2024",
        details: {
            validity: "03.10.2024", type: "Standard",
        },
    },
    {
        id: 2, title: "Einzelperson - Erwachsener 10. December 2024",
        details: {
            validity: "10.12.2024", type: "Premium",
        },
    },];

const oevTickets = [
    {
        id: 1, title: "ZVV 24h-Ticket 05. Dezember 2024",
        details: {
            validity: "05.12.2024", type: "24h-Ticket", class: "2. Klasse",
        }
    },];

const data = {
    zooTickets: zooTickets,
    oevTickets: oevTickets,
}

export function GET() {
    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    });
}
