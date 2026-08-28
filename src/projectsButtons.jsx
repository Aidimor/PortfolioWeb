import { useState, useRef, useEffect } from "react";
import './projectsButtons.css'; 

export default function Projects({ onSelectProject }) {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    
    const pos = useRef({ top: 0, left: 0, x: 0, y: 0 });

    const GamesInfo = [
        { id: 0, img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/813045230615147.6879dad136cf0.png", name: "Paradigm", types: ["Juego"], gif: "1" }, 
        { id: 1, img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/481e6c230669537.687aa6f4257a7.png", name: "MiniGames", types: ["Juego"], gif: "2" }, 
        { id: 2, img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd99ab230608265.6879ae7bd7cdd.png", name: "LoterIA", types: ["App"] },
        { id: 3, img: "https://mir-s3-cdn-cf.behance.net/projects/original/464c68252294713.Y3JvcCw4MDgsNjMyLDAsMA.png", name: "Marina AI", types: ["AI"] },
        { id: 4, img: "https://mir-s3-cdn-cf.behance.net/projects/original/a0e5b0250114025.Y3JvcCw4MDgsNjMyLDAsMA.png", name: "VR Experience", types: ["VR"] },
        { id: 5, img: "https://mir-s3-cdn-cf.behance.net/projects/original/705598230938057.Y3JvcCw5MjAsNzIwLDE4MCww.png", name: "Cancelled", types: ["Animation"] },
        { id: 6, img: "https://mir-s3-cdn-cf.behance.net/projects/original/705598230938057.Y3JvcCw5MjAsNzIwLDE4MCww.png", name: "Cancelled", types: ["Animation"] },
        { id: 7, img: "https://mir-s3-cdn-cf.behance.net/projects/original/705598230938057.Y3JvcCw5MjAsNzIwLDE4MCww.png", name: "Cancelled", types: ["Animation"] },
        { id: 8, img: "https://mir-s3-cdn-cf.behance.net/projects/original/705598230938057.Y3JvcCw5MjAsNzIwLDE4MCww.png", name: "Cancelled", types: ["Animation"] },
        { id: 9, img: "https://mir-s3-cdn-cf.behance.net/projects/original/705598230938057.Y3JvcCw5MjAsNzIwLDE4MCww.png", name: "Cancelled", types: ["Animation"] }
    ];

    const filteredGames = GamesInfo.filter((item) => {
        if (selectedCategory === "All") return true;
        return item.types.includes(selectedCategory);
    });

    const handleMouseDown = (e) => {
        const container = containerRef.current;
        if (!container) return;

        setIsDragging(true);
        pos.current = {
            left: container.scrollLeft,
            top: container.scrollTop,
            x: e.clientX,
            y: e.clientY,
        };
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            const container = containerRef.current;
            if (!container) return;

            const dx = e.clientX - pos.current.x;
            const dy = e.clientY - pos.current.y;

            container.scrollTop = pos.current.top - dy;
            container.scrollLeft = pos.current.left - dx;
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className="mainPanel">
            <div className="mainBotones">
                <button className="filterBtn" onClick={() => setSelectedCategory("All")}>All</button>
                <button className="filterBtn" onClick={() => setSelectedCategory("Juego")}>Juego</button>
                <button className="filterBtn" onClick={() => setSelectedCategory("VR")}>VR</button>
                <button className="filterBtn" onClick={() => setSelectedCategory("App")}>App</button>
                <button className="filterBtn" onClick={() => setSelectedCategory("AI")}>AI</button>
                <button className="filterBtn" onClick={() => setSelectedCategory("Animation")}>Animation</button>
            </div>
    
            <div 
                className="cardsContainer" 
                key={selectedCategory}
                ref={containerRef}
                onMouseDown={handleMouseDown}
                style={{ 
                    cursor: isDragging ? 'grabbing' : 'grab', 
                    overflowX: 'auto', 
                    overflowY: 'auto',
                    userSelect: 'none' 
                }}
            >
                {filteredGames.map((item) => (
                    <div 
                        key={item.id} 
                        className="gameCard"
                        onClick={() => {
                            if (isDragging) return;
                            if (onSelectProject && item.gif) {
                                onSelectProject(item.gif);
                            }
                        }}
                    >
                        <button className="gameButtons">
                            <img src={item.img} alt={item.name} className="srcImage" draggable="false" />        
                        </button>
                        
                        <div className="subPanel">
                            <h2>{item.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}