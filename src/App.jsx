import { useState } from 'react'
import './App.css'
import Layout from "./portfolioLayout"

const LayoutOn = true;

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      {LayoutOn && (
        <Layout 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
      )}
     
      <main style={{ padding: '20px' }}>
      </main>
    </>
  )
}

export default App