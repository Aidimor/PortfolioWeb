import { useState } from 'react';
import MainInfo from './mainInfo';
import Projects from './projectsButtons';
import ShowPanel from './showPanel';
import Footer from './footer';
import './portfolioLayout.css'; 

export default function PortfolioLayout() {
    // El estado centralizado vive aquí
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="portfolioLayout">
            <div className="leftColumn">
                <MainInfo /> 
              
            </div>

            <div className="rightColumn">
                {/* Le pasamos la función para que actualice el estado al hacer clic */}
                     background-image: "./assets/background.png";
                <Projects onSelectProject={setSelectedProject} />
            </div>

            {/* Footer interactivo flotante en la parte inferior */}
            <Footer />
        </div>
    );
}