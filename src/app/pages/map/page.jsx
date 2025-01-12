'use client'
import React, {useState} from "react";
import Image from "next/image";
import mapImg from "../../img/map.png";

export default function Page() {
    const [selectedPoint, setSelectedPoint] = useState(null);
    const handlePointClick = (point) => {
        setSelectedPoint(point);
    };

    const pointsOfInterest = [
        {id: 1, name: "Entrance", x: 50, y: 100},
        {id: 2, name: "Lion Enclosure", x: 200, y: 150},
        {id: 3, name: "Elephant House", x: 300, y: 250},
        // Add more points as needed
    ];

    return (
        <div style={{position: "relative", width: "80%", height: "auto", margin: "0 auto"}}>
            <Image src={mapImg} alt="Zoo Map" layout="responsive" style={{width: "100%", height: "auto"}}/>
            {pointsOfInterest.map((point) => (
                <div
                    key={point.id}
                    onClick={() => handlePointClick(point)}
                    style={{
                        position: "absolute",
                        top: `${point.y}px`,
                        left: `${point.x}px`,
                        width: "20px",
                        height: "20px",
                        backgroundColor: "red",
                        borderRadius: "50%",
                        cursor: "pointer",
                    }}
                />
            ))}
            {selectedPoint && (
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                    backgroundColor: "white",
                    padding: "10px",
                    borderRadius: "5px"
                }}>
                    <h3>{selectedPoint.name}</h3>
                    <p style={{color: "black"}}>Coordinates: ({selectedPoint.x}, {selectedPoint.y})</p>
                </div>
            )}
        </div>

    )
}