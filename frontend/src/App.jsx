import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css";

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false);


  return (
    <>
    {!loading && <LoadingScreen onComplete={() => setLoading(true)} />}
      <body>
        <section-test>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section-test>
      </body>
    </>
    
  )
}

export default App
