import { useState, useRef, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';
import './projectsButtons.css'; 
import Control from "./assets/control.png";
import VR from "./assets/newvr.png";
import ThreeD from "./assets/3d.png";
import AI from "./assets/NEWAI.png"
import Video from "./assets/video.png"
import Image from "./assets/img.png"
import Web from "./assets/web.png"

const supabaseUrl = 'https://panweacvmescxymyxyfi.supabase.co';
const supabaseKey = 'sb_publishable_1wni7wGoSr6DUmgM5lvfHw_RtXD4b9f'; 
const supabase = createClient(supabaseUrl, supabaseKey);

// Subcomponente para manejar de manera individual cada tarjeta y reiniciar el GIF al hacer hover
function ProjectCard({ item, hasMoved, setActiveGame, onSelectProject }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="projectCardWrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div 
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
                    {/* Panel flotante ubicado DENTRO del botón para que no se desborde al fondo */}
                    <div className="hoverPanelBottom">
                        <p>{item.details || (item.types && item.types[0] ? `Proyecto de ${item.types[0]}` : "Sin detalles")}</p>
                    </div>

                    {isHovered && item.gif ? (
                        <img 
                            key={Date.now()} 
                            src={item.gif} 
                            alt={item.name} 
                            className="srcImage" 
                            draggable="false" 
                        />
                    ) : (
                        <img 
                            src={item.img} 
                            alt={item.name} 
                            className="srcImage" 
                            draggable="false" 
                        />     
                    )}
                </button>
                
                <div className="subPanel">
                    <h2>{item.name}</h2>
                </div>
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
                    console.error("Error al obtener los proyectos:", error);
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
                 <div className="skills">                            
                    <div className="skills-grid">
                         {/* Game Development */}
                         <div className="skillCard" onClick={() => setSelectedCategory && setSelectedCategory("Juego")}>
                            <button className="skillButtons" type="button">    
                                 <img src={Control} alt="Control" className="iconSkill" />                 
                            </button> 
                            <h2>Game Development</h2>
                        </div>
             
                        {/* Realidad Virtual */}
                        <div className="skillCard" onClick={() => setSelectedCategory && setSelectedCategory("VR")}>
                            <button className="skillButtons" type="button">
                                 <img src={VR} alt="VR" className="iconSkill" />
                            </button> 
                            <h2>Realidad Virtual</h2>
                        </div>
             
                        {/* 3D */}
                        <div className="skillCard" onClick={() => setSelectedCategory && setSelectedCategory("Animacion")}>
                            <button className="skillButtons" type="button">
                               <img src={ThreeD} alt="3D" className="iconSkill" />
                            </button> 
                            <h2>Animacion</h2>
                        </div>
             
                        {/* AI */}
                        <div className="skillCard" onClick={() => setSelectedCategory && setSelectedCategory("AI")}>
                            <button className="skillButtons" type="button">
                               <img src={AI} alt="AI" className="iconSkill" />
                            </button> 
                            <h2>AI</h2>
                        </div>
             
                        {/* Edición de video */}
                        <div className="skillCard" onClick={() => setSelectedCategory && setSelectedCategory("Video")}>
                            <button className="skillButtons" type="button">
                               <img src={Video} alt="Video" className="iconSkill" />
                            </button> 
                            <h2>Edicion de video</h2>
                        </div>
             
                        {/* Edición de Imágenes */}
                        <div className="skillCard" onClick={() => setSelectedCategory && setSelectedCategory("Image")}>
                            <button className="skillButtons" type="button">
                                     <img src={Image} alt="Image" className="iconSkill" />
                            </button> 
                            <h2>Edicion de Imagenes</h2>
                        </div>
             
                        {/* Front-end Web */}
                        <div className="skillCard" onClick={() => setSelectedCategory && setSelectedCategory("Web")}>
                            <button className="skillButtons" type="button">
                                <img src={Web} alt="Web" className="iconSkill" />
                            </button> 
                            <h2>Front-end Web</h2>
                        </div>
                    </div>
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
                <p style={{ color: 'white', padding: '20px' }}>En desarrollo...</p>
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
                    backgroundColor: 'rgba(0, 0, 0, 1)', display: 'flex',
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 9999
                }}>
                    <div style={{ width: '90%', maxWidth: '960px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', backgroundColor: "black" }}>
                        <h2 style={{ color: 'white', margin: 0, fontSize: '1.2rem' }}>{}</h2>
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
                            // title={activeGame.name}
                            background-color="black"
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