import "./mainInfo.css";
import blenderLogo from './assets/blender.webp';
import unityLogo from './assets/unity.png';
import photoshopLogo from './assets/photoshop.jpg';
import reactLogo from './assets/react.webp';
import comfyLogo from './assets/comfyui.png';
import premiereLogo from './assets/premiere.webp';
import Control from "./assets/control.png";
import VR from "./assets/newvr.png";
import ThreeD from "./assets/3d.png";
import AI from "./assets/NEWAI.png"
import Video from "./assets/video.png"
import Image from "./assets/img.png"
import Web from "./assets/web.png"

export default function MainInfo({ onSelectCategory }) { // <--- 1. Recibimos la prop aquí

   const JobExperiences = [
    {id: 0, name: "Dazlabs", job: "Director del departamento de Arte en videojuegos", 
        Skills: "Game Dev, Scripting, 3D Animation, 3D Modeling, Rigging, PostProcessing, Particles"},

    {id: 1, name: "Legends of Learning", job: "Desarrollador de juegos educativos",
        Skills: "Game Dev, Scripting, 3D Animation, 3D Modeling, Rigging, PostProcessing, Particles"},  

    {id: 2, name: "Train Beyond", job: "Desarrollador de entrenamientos en VR",
                Skills: "Scripting, 3D Animation, PostProcessing, Particles"},  

    {id: 3, name: "Myrasis", job: "Motion Graphics (Contratista Independiente)",
                Skills: "Motion Graphics, 3D Animation, 3D Modeling, Rigging, PostProcessing, Particles"},  

    {id: 4, name: "El Pister Plus", job: "Creacion de contenido para Facebook",
                Skills: "Edicion de video, Guion, Miniaturas"},      

   {id: 5, name: "Diseñador Grafico", job: "Contratista Independiente ",
                Skills: "Motion Graphics, Catalogos, Diseño de playeras ,Tarjetas de presentacion, Carteleria, Edicion Video "},              

    {id: 6, name: "Sad Koala Studio", job: "Director",
          Skills: "Photoshop, Video Edition, Community Manager"}, 

    {id: 7, name: "Desarrollador Indie Videojuegos", job: "Full Indie",
         Skills: "Full Game Dev"}, 
   ];

  return (
        <div className="parent">
    <div className="nameInfo">
    <h1>Juan Valerio Ruiz</h1> 
    
    <div className="bioScrollContainer">
                 <div className="iconos-grid">                       
                    <div className="singleButtons">
                        <img src={blenderLogo} alt="Logo de Blender" className="iconoHerramienta" />
                    </div>
                    <div className="singleButtons">
                        <img src={unityLogo} alt="Logo de Unity" className="iconoHerramienta" />
                    </div>
                    <div className="singleButtons">
                        <img src={photoshopLogo} alt="Logo de Photoshop" className="iconoHerramienta" />
                    </div>
                    <div className="singleButtons">
                        <img src={reactLogo} alt="Logo de React" className="iconoHerramienta" />
                    </div>
                    <div className="singleButtons">
                        <img src={comfyLogo} alt="Logo de ComfyUI" className="iconoHerramienta" />
                    </div>
                    <div className="singleButtons">
                        <img src={premiereLogo} alt="Logo de Premiere" className="iconoHerramienta" />
                    </div>
                </div>
        <p className="fullInfo">
            Desarrollador multidisciplinario enfocado creación de contenido visual e interactivo. 
            Combino programación y creatividad para desarrollar experiencias digitales interactivas y visualmente atractivas.    
        </p>
        <p className="extraInfo">
            Trabajo con modelado 3D, rigging, animación, entornos virtuales, edición de video y diseño digital, utilizando herramientas como Photoshop y 
            diferentes tecnologías de desarrollo. También integro inteligencia artificial en mis procesos para crear,
            experimentar y optimizar diferentes aspectos de mis proyectos.
        </p>
         <div className="skills">                            
                <div className="skills-grid">
                     
                    {/* Game Development -> Filtra por "Juego" */}
                    <div className="skillCard" onClick={() => onSelectCategory && onSelectCategory("Juego")}>
                        <button className="skillButtons" type="button">
                            <img src={Control} alt="Control" className="iconSkill" />
                        </button> 
                        <h2>Game Development</h2>
                    </div>

                    {/* Realidad Virtual -> Filtra por "VR" */}
                    <div className="skillCard" onClick={() => onSelectCategory && onSelectCategory("VR")}>
                        <button className="skillButtons" type="button">
                            <img src={VR} alt="VR" className="iconSkill" />
                        </button> 
                        <h2>Realidad Virtual</h2>
                    </div>

                    {/* 3D -> Filtra por "Animation" (o la categoría que prefieras) */}
                    <div className="skillCard" onClick={() => onSelectCategory && onSelectCategory("3D")}>
                        <button className="skillButtons" type="button">
                            <img src={ThreeD} alt="3D" className="iconSkill" />
                        </button> 
                        <h2>3D</h2>
                    </div>

                    {/* AI -> Filtra por "AI" */}
                    <div className="skillCard" onClick={() => onSelectCategory && onSelectCategory("AI")}>
                        <button className="skillButtons" type="button">
                            <img src={AI} alt="AI" className="iconSkill" />
                        </button> 
                        <h2>AI</h2>
                    </div>

                    {/* Edición de video -> Filtra por "Animation" */}
                    <div className="skillCard" onClick={() => onSelectCategory && onSelectCategory("Video")}>
                        <button className="skillButtons" type="button">
                            <img src={Video} alt="Video" className="iconSkill" />
                        </button> 
                        <h2>Edicion de video</h2>
                    </div>

                    {/* Edición de Imágenes -> Filtra por "App" */}
                    <div className="skillCard" onClick={() => onSelectCategory && onSelectCategory("Image")}>
                        <button className="skillButtons" type="button">
                            <img src={Image} alt="Image" className="iconSkill" />
                        </button> 
                        <h2>Edicion de Imagenes</h2>
                    </div>

                    {/* Front-end Web -> Filtra por "App" */}
                    <div className="skillCard" onClick={() => onSelectCategory && onSelectCategory("Web")}>
                        <button className="skillButtons" type="button">
                            <img src={Web} alt="Web" className="iconSkill" />
                        </button> 
                        <h2>Front-end Web</h2>
                    </div>
                </div>
            </div>
    </div>
</div>

            <div className="parentExp">
             <h2 style={{ fontSize: '18px', textAlign: 'center', width: '100%', height: "1px" }}>Experiencia Laboral</h2>
                {JobExperiences.map((item, index) => (
                    <div className="exp" key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.job}</p>
                        
               {item.Skills && (
    <div className="skillsTagContainer">
        {item.Skills.split(",").map((skill, skillIndex) => (
            <div className="skillTagBox" key={skillIndex}>
                <button className="skillTagButton" type="button">
                    <h2>{skill.trim()}</h2>
                </button>
            </div>
        ))}
    </div>
)}
                    </div>
                ))}
            </div>
        </div>
    );
}