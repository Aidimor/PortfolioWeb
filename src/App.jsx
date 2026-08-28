import './App.css'
import NavBar from './navbar'
import Projects from "./projectsButtons"
import MainInfo from "./mainInfo"
import Layout from "./portfolioLayout"

const LayoutOn = true;
const NavbarOn = false;
const ProjectsOn = false;
const MainInfoOn = false;


function App() {
  return (
    <>
      {LayoutOn && <Layout />}
      {NavbarOn && <NavBar />}
      {MainInfoOn && <MainInfo />}
      {ProjectsOn && <Projects />}
  
      <main style={{ padding: '20px' }}>
  
      </main>
    </>
  )
}

export default App