import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { MainLayout } from "./layout/main-layout"
import { ProductDitail } from "./components/productDetile"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Home />}/>
          <Route path="product/:id" element={<ProductDitail />} />
          <Route path="*" element={<h1>NOT FOUND</h1>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
