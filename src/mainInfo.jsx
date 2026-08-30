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

export default function MainInfo() {

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
    {/* <button className="topButtons">Eng</button> */}
    <h1>Juan Valerio Ruiz</h1> 
    
    {/* Contenedor con scroll para el texto */}
    <div className="bioScrollContainer">
           <p>Desarrollador de software, videojuegos, 
        entornos 3D y realidad virtual.
        </p>
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
        <p>Desarrollador de software, videojuegos, 
        entornos 3D y realidad virtual combinados con diseño gráfico, 
        edición multimedia, desarrollo web e integración de inteligencia 
        artificial para dar forma a proyectos digitales de cualquier magnitud.
        </p>
         <div className="skills">                             
                <div className="skills-grid">
                     
                    <div className="skillCard">
                        <button className="skillButtons">
                            <img src={Control} alt="Control" className="iconSkill" />
                        </button> 
                        <h2>Game Development</h2>
                    </div>

                    <div className="skillCard">
                        <button className="skillButtons">
                            <img src={VR} alt="VR" className="iconSkill" />
                        </button> 
                        <h2>Realidad Virtual</h2>
                    </div>

                    <div className="skillCard">
                        <button className="skillButtons">
                            <img src={ThreeD} alt="3D" className="iconSkill" />
                        </button> 
                        <h2>3D</h2>
                    </div>

                    <div className="skillCard">
                        <button className="skillButtons">
                            <img src={AI} alt="AI" className="iconSkill" />
                        </button> 
                        <h2>AI</h2>
                    </div>

                    <div className="skillCard">
                        <button className="skillButtons">
                            <img src={Video} alt="Video" className="iconSkill" />
                        </button> 
                        <h2>Edicion de video</h2>
                    </div>

                    <div className="skillCard">
                        <button className="skillButtons">
                            <img src={Image} alt="Image" className="iconSkill" />
                        </button> 
                        <h2>Edicion de Imagenes</h2>
                    </div>

                    <div className="skillCard">
                        <button className="skillButtons">
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
                        
                        {/* Validación añadida para evitar errores si 'Skills' no existe */}
               {item.Skills && (
    <div className="skillsTagContainer">
        {item.Skills.split(",").map((skill, skillIndex) => (
            <div className="skillTagBox" key={skillIndex}>
                <button className="skillTagButton">
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