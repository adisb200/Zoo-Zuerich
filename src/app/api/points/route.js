
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

export function GET() {
    return new Response(JSON.stringify(maps), {
        headers: {'Content-Type': 'application/json'},
    });
}





