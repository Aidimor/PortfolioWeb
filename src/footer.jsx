import { useState } from 'react';
import './footer.css';

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
                <div className="footerSection">
                    <h3>Contacto</h3>
                    <p>
                        <a href="mailto:juanvr.cg@gmail.com" className="footerLink">
                            juanvr.cg@gmail.com
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
    );
}