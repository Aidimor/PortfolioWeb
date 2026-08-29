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
    return (
        <div className="parent">
            <div className="nameInfo">
       <button className="topButtons">Eng</button>
            
            <h1>Juan Valerio Ruiz</h1>            

       

            <p>Desarrollador de videojuegos y creador de experiencias y contenido digital.</p>

            </div>
     
            <div className="skills"> 
              <h1>Habilidades Clave</h1>
              
            <div className="skillCard">
    <button className="skillButtons">
        <img src={Control} alt="Control" className="iconSkill" />
    </button> 
    <h2>Game Development</h2>
</div>

           <div className="skillCard">
    <button className="skillButtons">
        <img src={VR}className="iconSkill" />
    </button> 
    <h2>Realidad Virtual</h2>
</div>

           <div className="skillCard">
    <button className="skillButtons">
        <img src={ThreeD}className="iconSkill" />
    </button> 
    <h2>3D</h2>
</div>

           <div className="skillCard">
    <button className="skillButtons">
        <img src={AI}className="iconSkill" />
    </button> 
    <h2>AI</h2>
</div>

           <div className="skillCard">
    <button className="skillButtons">
        <img src={Video}className="iconSkill" />
    </button> 
    <h2>Edicion de video</h2>
</div>

           <div className="skillCard">
    <button className="skillButtons">
        <img src={Image}className="iconSkill" />
    </button> 
    <h2>Edicion de Imagenes</h2>
</div>

           <div className="skillCard">
    <button className="skillButtons">
        <img src={Web}className="iconSkill" />
    </button> 
    <h2>Front-end Web</h2>
</div>
         
            </div>

          <div className="icons">
    <h2>Programas</h2>
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
</div>
        </div>
    );
}