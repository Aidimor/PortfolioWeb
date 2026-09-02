import './showPanel.css';


export default function ShowPanel({ selectedProject }) {
    // Creamos un diccionario para mapear el número con su importación
    const gifsMap = {
        "1": gif1,
        "2": gif2
    };

    const currentGif = selectedProject ? gifsMap[selectedProject] : null;

    return (
        <div className="showPanelContainer">
            {currentGif ? (
                <div className="mediaContainer">
                    <img 
                        src={currentGif} 
                        alt="Vista previa del proyecto" 
                        className="projectMedia"
                    />
                </div>
            ) : (
                <p className="placeholderText">Vista previa del proyecto</p>
            )}
        </div>
    );
}