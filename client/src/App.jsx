import Navbar from "./scenes/global/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./scenes/pages/Home"
import Footer from "./scenes/global/Footer"
import Tasks from "./scenes/pages/Tasks"

function App() {

  return (
    <main className="w-full max-w-[2000px] min-h-screen m-auto flex flex-col items-center relative">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>

        <Footer />
      </Router>
    </main>
  )
}

export default App
