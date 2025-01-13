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

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(zooTickets);
    } else if (req.method === 'POST') {
        const data = req.body;
        zooTickets.push(data);
        res.status(200).json({message: 'Data received'});
    } else if (req.method === 'DELETE') {
        zooTickets.pop();
        res.status(200).json({message: 'Data deleted'});
    }
}