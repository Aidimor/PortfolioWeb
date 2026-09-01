import { useState, useRef } from "react";
import './projectsButtons.css'; 

// 1. Recibimos las props del padre
export default function Projects({ selectedCategory, setSelectedCategory, onSelectProject }) {
    // ELIMINAMOS: const [selectedCategory, setSelectedCategory] = useState("All");
    const [activeGame, setActiveGame] = useState(null);
    
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const hasMoved = useRef(false);
    const pos = useRef({ top: 0, left: 0, x: 0, y: 0 });

    const GamesInfo = [
     { 
    id: 0, 
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/813045230615147.6879dad136cf0.png", 
    name: "WorldCupGirls", 
    types: ["Juego"], 
    gif: "1", 
    url: "https://turbiodev.itch.io/world-cup-girls" 
},
        { id: 1, img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/481e6c230669537.687aa6f4257a7.png", name: "MiniGames", types: ["Juego"], gif: "2" }, 
{ 
    id: 2, 
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd99ab230608265.6879ae7bd7cdd.png", 
    name: "LoterIA", 
    types: ["App"], 
    gif: "2", 
    url: "https://turbiodev.itch.io/loteria" 
},
        { id: 3, img: "https://mir-s3-cdn-cf.behance.net/projects/original/464c68252294713.Y3JvcCw4MDgsNjMyLDAsMA.png", name: "Marina AI", types: ["AI"] },
        { id: 4, img: "https://mir-s3-cdn-cf.behance.net/projects/original/a0e5b0250114025.Y3JvcCw4MDgsNjMyLDAsMA.png", name: "VR Experience", types: ["VR"] },
        { id: 5, img: "https://mir-s3-cdn-cf.behance.net/projects/original/705598230938057.Y3JvcCw5MjAsNzIwLDE4MCww.png", name: "Cancelled", types: ["Animation, 3D"] },
        { id: 6, img: "https://mir-s3-cdn-cf.behance.net/projects/original/705598230938057.Y3JvcCw5MjAsNzIwLDE4MCww.png", name: "Cancelled", types: ["Web"] },
        { id: 7, img: "https://mir-s3-cdn-cf.behance.net/projects/original/705598230938057.Y3JvcCw5MjAsNzIwLDE4MCww.png", name: "Cancelled", types: ["Animation"] },
        { id: 8, img: "https://mir-s3-cdn-cf.behance.net/projects/original/705598230938057.Y3JvcCw5MjAsNzIwLDE4MCww.png", name: "Cancelled", types: ["Animation"] },
        { id: 9, img: "https://mir-s3-cdn-cf.behance.net/projects/original/705598230938057.Y3JvcCw5MjAsNzIwLDE4MCww.png", name: "Cancelled", types: ["Animation"] },
        { id: 10, img: "https://mir-s3-cdn-cf.behance.net/projects/original/705598230938057.Y3JvcCw5MjAsNzIwLDE4MCww.png", name: "Cancelled", types: ["Animation"] },
        { id: 11, img: "https://mir-s3-cdn-cf.behance.net/projects/original/705598230938057.Y3JvcCw5MjAsNzIwLDE4MCww.png", name: "Cancelled", types: ["Animation"] },
        { id: 12, img: "https://mir-s3-cdn-cf.behance.net/projects/original/705598230938057.Y3JvcCw5MjAsNzIwLDE4MCww.png", name: "Cancelled", types: ["Animation"] },
        { id: 13, img: "https://mir-s3-cdn-cf.behance.net/projects/original/705598230938057.Y3JvcCw5MjAsNzIwLDE4MCww.png", name: "Cancelled", types: ["Animation"] },
        { id: 14, img: "https://mir-s3-cdn-cf.behance.net/projects/original/705598230938057.Y3JvcCw5MjAsNzIwLDE4MCww.png", name: "Cancelled", types: ["Animation"] },
        { id: 15, img: "https://mir-s3-cdn-cf.behance.net/projects/original/705598230938057.Y3JvcCw5MjAsNzIwLDE4MCww.png", name: "Cancelled", types: ["Animation"] },
        { id: 16, img: "https://mir-s3-cdn-cf.behance.net/projects/original/705598230938057.Y3JvcCw5MjAsNzIwLDE4MCww.png", name: "Cancelled", types: ["Animation"] },
        { id: 17, img: "https://mir-s3-cdn-cf.behance.net/projects/original/705598230938057.Y3JvcCw5MjAsNzIwLDE4MCww.png", name: "Cancelled", types: ["Animation"] },
        { id: 18, img: "https://mir-s3-cdn-cf.behance.net/projects/original/705598230938057.Y3JvcCw5MjAsNzIwLDE4MCww.png", name: "Cancelled", types: ["Animation"] }
    ];

    const filteredGames = GamesInfo.filter((item) => {
        if (selectedCategory === "All") return true;
        return item.types.includes(selectedCategory);
    });

    const handlePointerDown = (e) => {
        const container = containerRef.current;
        if (!container) return;

        isDragging.current = true;
        hasMoved.current = false;
        pos.current = {
            left: container.scrollLeft,
            top: container.scrollTop,
            x: e.clientX,
            y: e.clientY,
        };
        try {
            e.target.setPointerCapture(e.pointerId);
        } catch (err) {}
    };

    const handlePointerMove = (e) => {
        if (!isDragging.current) return;
        const container = containerRef.current;
        if (!container) return;

        const dx = e.clientX - pos.current.x;
        const dy = e.clientY - pos.current.y;

        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
            hasMoved.current = true;
        }

        container.scrollTop = pos.current.top - dy;
        container.scrollLeft = pos.current.left - dx;
    };

    const handlePointerUp = (e) => {
        isDragging.current = false;
        try {
            e.target.releasePointerCapture(e.pointerId);
        } catch (err) {}
    };

    return (
        <div className="mainPanel" id="projects-section">
            <div className="topPanel">
                <div className="mainBotones">
                <button className="filterBtn" onClick={() => setSelectedCategory("All")}>All</button>
                <button className="filterBtn" onClick={() => setSelectedCategory("Juego")}>Juego</button>
                <button className="filterBtn" onClick={() => setSelectedCategory("VR")}>VR</button>
                <button className="filterBtn" onClick={() => setSelectedCategory("App")}>App</button>
                <button className="filterBtn" onClick={() => setSelectedCategory("AI")}>AI</button>
                <button className="filterBtn" onClick={() => setSelectedCategory("Animation")}>Animation</button>
            </div>
            </div>

            <div 
                className="cardsContainer" 
                key={selectedCategory}
                ref={containerRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                style={{ 
                    cursor: 'grab', 
                    overflowX: 'auto', 
                    overflowY: 'auto',
                    touchAction: 'pan-y', 
                    userSelect: 'none' 
                }}
            >
           {filteredGames.map((item) => (
    <div 
        key={item.id} 
        className="gameCard"
        onClick={() => {
            if (hasMoved.current) return;
            
            if (item.url) {
                window.open(item.url, "_blank");
                return;
            }
            
            if (item.embedUrl) {
                setActiveGame(item);
                return;
            }

            if (onSelectProject && item.gif) {
                onSelectProject(item.gif);
            }
        }}
    >
        <button className="gameButtons" type="button">
            <img src={item.img} alt={item.name} className="srcImage" draggable="false" />        
        </button>
        
        <div className="subPanel">
            <h2>{item.name}</h2>
        </div>
    </div>
))}
            </div>

            {activeGame && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.92)', display: 'flex',
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 9999
                }}>
                    <div style={{ width: '90%', maxWidth: '960px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <h2 style={{ color: 'white', margin: 0, fontSize: '1.2rem' }}>{activeGame.name}</h2>
                        <button 
                            type="button"
                            onClick={() => setActiveGame(null)}
                            style={{ background: '#ff4d4d', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                        >
                            Cerrar ✕
                        </button>
                    </div>
                    <div style={{ width: '90%', maxWidth: '960px', height: '75vh', background: '#000', borderRadius: '12px', overflow: 'hidden', border: '2px solid #444' }}>
                        <iframe 
                            src={activeGame.embedUrl} 
                            title={activeGame.name}
                            width="100%" 
                            height="100%" 
                            style={{ border: 'none' }}
                            allowFullScreen=""
                            allow="autoplay; fullscreen; camera; focus-without-user-activation *"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
}