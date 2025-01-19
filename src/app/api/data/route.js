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

const maps = [
    [
        {id: 1, name: "Eingang", x: 200, y: 350},
        {id: 2, name: "Löwen", x: 500, y: 175},
        {id: 4, name: "Elefanten", x: 675, y: 250},
        {id: 5, name: "Masoala Halle / Restaurant", x: 250, y: 710},
        {id: 6, name: "Pinguine", x: 360, y: 360},
        {id: 7, name: "Nashorn", x: 160, y: 100},
        {id: 8, name: "Streichelzoo", x: 550, y: 600},
    ],
]

const data = {
    zooTickets,
    oevTickets,
    maps,
}

export function GET() {
    return new Response(JSON.stringify(data), {
        headers: {'Content-Type': 'application/json'},
    });
}

export function POST(req) {
    const formData = req.formData;

    const tempOevTicket = {
        id: oevTickets.length + 1,
        title: "ZVV 24h-Ticket" + formData.date,
        details: {
            validity: formData.date, type: "24h-Ticket", class: "2. Klasse",
        }
    }


    const tempZooTicket = {
        id: zooTickets.length + 1,
        title: "Einzelperson - Jugendlich 03. November 2024",
        details: {
            validity: "03.10.2024", type: "Standard",
        },
    };

    data.oevTickets.push(tempOevTicket);
    data.zooTickets.push(tempZooTicket);

    return new Response(JSON.stringify(data), {
        headers: {'Content-Type': 'application/json'},
    });
}


//implement single endpoints for maps / tickets
/*   export function GET(request) {
       const url = new URL(request.url);
       const path = url.pathname;

       if (path.endsWith('/maps')) {
           return new Response(JSON.stringify(maps), {
               headers: {'Content-Type': 'application/json'},
           });
       } else if (path.endsWith('/tickets')) {
           const tickets = {
               zooTickets,
               oevTickets,
           };
           return new Response(JSON.stringify(tickets), {
               headers: {'Content-Type': 'application/json'},
           });
       } else {
           return new Response('Not Found', { status: 404 });
       }
   }*/



