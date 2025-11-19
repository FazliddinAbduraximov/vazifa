import { Link, Route, Routes } from "react-router"
import { Home } from "./pages/home"
import { Cart } from "./pages/cart"

function App() {

  return (
    <>
    <header className="flex justify-center gap-5 bg-amber-400 p-5 my-5">
      <Link to={'/'}>Home</Link>
      <Link to={'/card'}>Card</Link>
    </header>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card" element={<Cart />} />
     </Routes>
    </>
  )
}

export default App
