import './App.css'
import NavBar from './navbar'
import Projects from "./projectsButtons"
import MainInfo from "./mainInfo"

const NavbarOn = true;
const ProjectsOn = true;
const MainInfoOn = true;

function App() {
  return (
    <>
      {NavbarOn && <NavBar />}
        {MainInfoOn && <MainInfo />}
      {ProjectsOn && <Projects />}
    
      <main style={{ padding: '20px' }}>
  
      </main>
    </>
  )
}

export default App