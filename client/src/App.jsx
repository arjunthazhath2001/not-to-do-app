import Edit from "./Edit"
import Home from "./Home"
import { Routes, Route, BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
