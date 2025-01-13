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


export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(oevTickets);
    } else if (req.method === 'POST') {
        const data = req.body;
        oevTickets.push(data);
        res.status(200).json({message: 'Data received'});
    } else if (req.method === 'DELETE') {
        oevTickets.pop();
        res.status(200).json({message: 'Data deleted'});
    }
}