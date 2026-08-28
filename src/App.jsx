import './App.css'
import NavBar from './navbar'
import Projects from "./projectsButtons"
import MainInfo from "./mainInfo"
import ProjectsInfo from "./projectsInfo"
import Layout from "./portfolioLayout"

const LayoutOn = true;
const NavbarOn = false;
const ProjectsOn = false;
const MainInfoOn = false;
const ProjectsInfoOn = false;


function App() {
  return (
    <>
    {LayoutOn && <Layout />}
      {NavbarOn && <NavBar />}
        {MainInfoOn && <MainInfo />}
            {ProjectsInfoOn && <ProjectsInfo />}
      {ProjectsOn && <Projects />}
  
    
      <main style={{ padding: '20px' }}>
  
      </main>
    </>
  )
}

export default App