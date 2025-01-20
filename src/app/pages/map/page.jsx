'use client'
import React, {useEffect, useState} from "react";
import Image from "next/image";
import mapImg from "../../img/map.png";
import styles from './page.module.css';

const MapView = ({points, handlePointClick, selectedPoint, selectedPoints}) => (
    <div className={styles.mapContainer}>
        <Image src={mapImg} alt="Zoo Map" layout="responsive" className={styles.mapImage}/>
        {points.map((point) => {
            const isSelected = selectedPoints.findIndex(p => p.id === point.id) !== -1;
            return (
                <div
                    key={point.id}
                    onClick={() => handlePointClick(point)}
                    className={`${styles.mapPoint} ${isSelected ? styles.selected : ""}`}
                    style={{
                        top: `${point.y}px`,
                        left: `${point.x}px`,
                    }}
                >
                    {isSelected && selectedPoints.findIndex(p => p.id === point.id) + 1}
                </div>
            );
        })}
        {selectedPoint && (
            <div className={styles.selectedPointInfo}>
                <h3>{selectedPoint.name}</h3>
                <p>Coordinates: ({selectedPoint.x}, {selectedPoint.y})</p>
            </div>
        )}
    </div>
);

const SavedRoutes = ({savedRoutes, handleRemoveRoute}) => (
    <div className={styles.savedRoutesContainer}>
        <h2>Saved Routes</h2>
        {savedRoutes.length === 0 ? (
            <p style={{color: "black"}}>No saved routes available.</p>
        ) : (
            <ul className={styles.savedRoutesList}>
                {savedRoutes.map((route, index) => (
                    <li key={index} className={styles.savedRouteItem}>
                        <span>Route {index + 1}</span>
                        <ul className={styles.routePointsList}>
                            {route.map((point, idx) => (
                                <li key={idx}
                                    className={styles.routePoint}>{idx + 1}. {point.name} ({point.x}, {point.y})</li>
                            ))}
                        </ul>
                        <button onClick={() => handleRemoveRoute(index)} className={styles.removeRouteButton}>Remove
                            Route
                        </button>
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

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3000/api/points");
            // handle response if needed
            const data = await response.json();
            const savedRoutesFromStorage = data || [];
            setSavedRoutes(savedRoutesFromStorage);
        }
        fetchData();
    }, []);


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
        {id: 1, name: "Eingang", x: 200, y: 350},
        {id: 2, name: "Löwen", x: 500, y: 175},
        {id: 4, name: "Elefanten", x: 675, y: 250},
        {id: 5, name: "Masoala Halle / Restaurant", x: 250, y: 710},
        {id: 6, name: "Pinguine", x: 360, y: 360},
        {id: 7, name: "Nashorn", x: 160, y: 100},
        {id: 8, name: "Streichelzoo", x: 550, y: 600},
    ];

    return (
        <div>
            <br/>
            <br/>
            <br/>
            {view === "map" ? (
                <MapView points={points} handlePointClick={handlePointClick} selectedPoint={selectedPoint}
                         selectedPoints={selectedPoints}/>
            ) : (
                <SavedRoutes savedRoutes={savedRoutes} handleRemoveRoute={handleRemoveRoute}/>
            )}
            <div className={styles.bottomBar}>
                <button onClick={() => setView("map")} className={styles.bottomBarButton}>Map</button>
                <button onClick={() => setView("routes")} className={styles.bottomBarButton}>Saved Routes</button>
                {view === "map" && selectedPoints.length > 0 && (
                    <button onClick={handleSaveRoute} className={styles.saveRouteButton}>Save Route</button>
                )}
            </div>
        </div>
    );
}