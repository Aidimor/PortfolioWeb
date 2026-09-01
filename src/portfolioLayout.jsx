import { useState } from 'react';
import MainInfo from './mainInfo';
import Projects from './projectsButtons';
import ShowPanel from './showPanel';
import Footer from './footer';
import './portfolioLayout.css'; 

export default function PortfolioLayout() {
    // Estados centralizados en el componente padre
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <div className="portfolioLayout">
            <div className="leftColumn">
                {/* Le pasamos la función para cambiar la categoría desde la izquierda */}
                <MainInfo onSelectCategory={setSelectedCategory} />
            </div>

            <div className="rightColumn">
                {/* Le pasamos la categoría y la función de actualización */}
                <Projects 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory}
                    onSelectProject={setSelectedProject} 
                />
            </div>

            {/* Footer interactivo flotante en la parte inferior */}
            <Footer />
        </div>
    );
}