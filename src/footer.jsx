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
                    <p>correo@tudominio.com</p>
                </div>
                <div className="footerSection">
                    <h3>Redes</h3>
                    <p>GitHub | LinkedIn | Twitter</p>
                </div>
            </div>
        </div>
    );
}