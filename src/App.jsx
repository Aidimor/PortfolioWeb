import './App.css'
import Layout from "./portfolioLayout"

const LayoutOn = true;




function App() {
  return (
    <>
      {LayoutOn && <Layout />}
     
      
  
      <main style={{ padding: '20px' }}>
  
      </main>
    </>
  )
}

export default App