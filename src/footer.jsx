import { useState } from 'react';
import './footer.css';
import portrait from "./assets/portrait.png";

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`interactiveFooter ${isOpen ? 'open' : 'closed'}`}>
            {/* La pestañita que siempre se ve abajo */}
            <button className="footerTab" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Ocultar Footer ▾' : 'Contacto / Info ▴'}
            </button>

            {/* El contenido que se despliega al abrir */}
            <div className="footerContent">
                <img className="portrait" src={portrait} alt="Retrato" />
                
                <div className="footerInfoContainer">
                    <div className="footerSection">
                        <h3>Contacto</h3>
                        <p>
                            <a href="mailto:juanvr.cg@gmail.com" className="footerLink">
                                juanvr.cg@gmail.com
                            </a>
                        </p>
                        <p>
                            <a href="https://wa.me/522294200112" target="_blank" rel="noopener noreferrer" className="footerLink">
                                WhatsApp: +52 2294 200112
                            </a>
                        </p>
                    </div>

                    <div className="footerSection">
                        <h3>Redes</h3>
                        <p>
                            <a href="https://turbiodev.itch.io/" target="_blank" rel="noopener noreferrer" className="footerLink">Itch.io</a> | {' '}
                            <a href="https://www.linkedin.com/in/juan-valerio-ruiz-1a1159224" target="_blank" rel="noopener noreferrer" className="footerLink">LinkedIn</a> | {' '}
                            <a href="https://x.com/TurbioDev" target="_blank" rel="noopener noreferrer" className="footerLink">Twitter</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}