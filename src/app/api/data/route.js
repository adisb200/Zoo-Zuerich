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
    zooTickets,
    oevTickets,
}

export function GET() {
    return new Response(JSON.stringify(data), {
        headers: {'Content-Type': 'application/json'},
    });
}

export async function POST(req) {
    const formData = await req.json();

    const tempOevTicket = {
        id: oevTickets.length + 1,
        title: "ZVV 24h-Ticket " + formData.date,
        details: {
            validity: formData.date, type: "24h-Ticket", class: "2. Klasse",
        }
    }

    const tempZooTicket = {
        id: zooTickets.length + 1,
        title: "Einzelperson - Jugendlich " + formData.date,
        details: {
            validity: formData.date, type: "Standard",
        },
    };

    if (formData.ovTicket.selected) {
        console.log("added data")
        for (let i = 0; i < formData.people.length; i++) {
            data.oevTickets.push(tempOevTicket);
        }
    }

    for (let i = 0; i < formData.people.length; i++) {
        console.log("added data")
        data.zooTickets.push(tempZooTicket);
    }

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



