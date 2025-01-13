'use client'
import React, { useState } from "react";
import Image from "next/image";
import mapImg from "../../img/map.png";

const MapView = ({ points, handlePointClick, selectedPoint, selectedPoints }) => (
    <div style={{ position: "relative", width: "80%", height: "auto", margin: "0 auto" }}>
        <Image src={mapImg} alt="Zoo Map" layout="responsive" style={{ width: "100%", height: "auto" }} />
        {points.map((point) => {
            const isSelected = selectedPoints.findIndex(p => p.id === point.id) !== -1;
            return (
                <div
                    key={point.id}
                    onClick={() => handlePointClick(point)}
                    style={{
                        position: "absolute",
                        top: `${point.y}px`,
                        left: `${point.x}px`,
                        width: "20px",
                        height: "20px",
                        backgroundColor: isSelected ? "blue" : "red",
                        borderRadius: "50%",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        fontSize: "12px",
                    }}
                >
                    {isSelected && selectedPoints.findIndex(p => p.id === point.id) + 1}
                </div>
            );
        })}
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
                <p style={{ color: "black" }}>Coordinates: ({selectedPoint.x}, {selectedPoint.y})</p>
            </div>
        )}
    </div>
);

const SavedRoutes = ({ savedRoutes, handleRemoveRoute }) => (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Saved Routes</h2>
        {savedRoutes.length === 0 ? (
            <p>No saved routes available.</p>
        ) : (
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {savedRoutes.map((route, index) => (
                    <li key={index} style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
                        <span style={{ fontWeight: "bold" }}>Route {index + 1}</span>
                        <ul style={{ listStyleType: "none", padding: "10px", backgroundColor: "#fff", borderRadius: "5px", marginTop: "10px" }}>
                            {route.map((point, idx) => (
                                <li key={idx} style={{ marginBottom: "5px" }}>{idx + 1}. {point.name} ({point.x}, {point.y})</li>
                            ))}
                        </ul>
                        <button onClick={() => handleRemoveRoute(index)} style={{ backgroundColor: "red", color: "white", border: "none", borderRadius: "5px", padding: "5px 10px", cursor: "pointer", marginTop: "10px" }}>Remove Route</button>
                    </li>
                ))}
            </ul>
        )}
    </div>
);

export default function Page() {
    const [view, setView] = useState("map");
    const [selectedPoint, setSelectedPoint] = useState(null);
    const [selectedPoints, setSelectedPoints] = useState([]);
    const [savedRoutes, setSavedRoutes] = useState([]);

    const handlePointClick = (point) => {
        setSelectedPoint(point);
        const pointIndex = selectedPoints.findIndex(p => p.id === point.id);
        if (pointIndex !== -1) {
            setSelectedPoints(selectedPoints.filter((_, i) => i !== pointIndex));
        } else {
            setSelectedPoints([...selectedPoints, point]);
        }
    };

    const handleSaveRoute = () => {
        setSavedRoutes([...savedRoutes, selectedPoints]);
        setSelectedPoints([]);
    };

    const handleRemoveRoute = (index) => {
        const newRoutes = savedRoutes.filter((_, i) => i !== index);
        setSavedRoutes(newRoutes);
    };

    const points = [
        { id: 1, name: "Eingang", x: 200, y: 350 },
        { id: 2, name: "Löwen", x: 500, y: 175 },
        { id: 4, name: "Elefanten", x: 675, y: 250 },
        { id: 5, name: "Masoala Halle / Restaurant", x: 250, y: 710 },
        { id: 6, name: "Pinguine", x: 360, y: 360 },
        { id: 7, name: "Nashorn", x: 160, y: 100 },
        { id: 8, name: "Streichelzoo", x: 550, y: 600 },
    ];

    return (
        <div>
            {view === "map" ? (
                <MapView points={points} handlePointClick={handlePointClick} selectedPoint={selectedPoint} selectedPoints={selectedPoints} />
            ) : (
                <SavedRoutes savedRoutes={savedRoutes} handleRemoveRoute={handleRemoveRoute} />
            )}
            <div style={{ position: "fixed", bottom: 0, width: "100%", display: "flex", justifyContent: "center", backgroundColor: "#f0f0f0", padding: "10px" }}>
                <button onClick={() => setView("map")} style={{ marginRight: "10px" }}>Map</button>
                <button onClick={() => setView("routes")} style={{ marginRight: "10px" }}>Saved Routes</button>
                {view === "map" && selectedPoints.length > 0 && (
                    <button onClick={handleSaveRoute} style={{ backgroundColor: "green", color: "white", border: "none", borderRadius: "5px", padding: "5px 10px", cursor: "pointer" }}>Save Route</button>
                )}
            </div>
        </div>
    );
}