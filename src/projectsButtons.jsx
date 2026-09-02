import { useState, useRef, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';
import './projectsButtons.css'; 

const supabaseUrl = 'https://panweacvmescxymyxyfi.supabase.co';
const supabaseKey = 'sb_publishable_1wni7wGoSr6DUmgM5lvfHw_RtXD4b9f'; 
const supabase = createClient(supabaseUrl, supabaseKey);

// Subcomponente para manejar de manera individual cada tarjeta y su efecto hover con el GIF
function ProjectCard({ item, hasMoved, setActiveGame, onSelectProject }) {
    const [currentImage, setCurrentImage] = useState(item.img);

    return (
        <div 
            className="gameCard"
            onMouseEnter={() => {
                if (item.gif) setCurrentImage(item.gif);
            }}
            onMouseLeave={() => {
                if (item.img) setCurrentImage(item.img);
            }}
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
                <img src={currentImage} alt={item.name} className="srcImage" draggable="false" />      
            </button>
            
            <div className="subPanel">
                <h2>{item.name}</h2>
            </div>
        </div>
    );
}

export default function Projects({ selectedCategory, setSelectedCategory, onSelectProject }) {
    const [activeGame, setActiveGame] = useState(null);
    const [gamesInfo, setGamesInfo] = useState([]); 
    const [loading, setLoading] = useState(true);
    
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const hasMoved = useRef(false);
    const pos = useRef({ top: 0, left: 0, x: 0, y: 0 });

    useEffect(() => {
        async function fetchGames() {
            try {
                const { data, error } = await supabase
                    .from('Portfolio')
                    .select('*');

                if (error) {
                    console.error("Error al obtener los juegos:", error);
                } else {
                    console.log("Datos cargados exitosamente:", data);
                    setGamesInfo(data || []);
                }
            } catch (err) {
                console.error("Error de red:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchGames();
    }, []);

    const filteredGames = gamesInfo.filter((item) => {
        if (selectedCategory === "All") return true;
        return item.types && item.types.includes(selectedCategory);
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
            {loading ? (
                <p style={{ color: 'white', padding: '20px' }}>Cargando proyectos...</p>
            ) : filteredGames.length === 0 ? (
                <p style={{ color: 'white', padding: '20px' }}>No hay proyectos en esta categoría.</p>
            ) : (
                filteredGames.map((item) => (
                    <ProjectCard 
                        key={item.id} 
                        item={item} 
                        hasMoved={hasMoved} 
                        setActiveGame={setActiveGame} 
                        onSelectProject={onSelectProject} 
                    />
                ))
            )}
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