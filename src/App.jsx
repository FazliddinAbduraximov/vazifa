import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { MainLayout } from "./layout/main-layout"
import { ProductDitail } from "./components/productDetile"
import { ProfileLoyout } from "./layout/profile-layout"
import { Obuna } from "./pages/profile/obuna"
import { Sozlamalar } from "./pages/profile/sozlamalar"
import { EHisob } from "./pages/profile/hisob"
import { Saqlanganlar } from "./pages/profile/saqlanganlar"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Home />}/>
          <Route path="product/:id" element={<ProductDitail />} />
          <Route path="profile" element={<ProfileLoyout />}>
            <Route index element={<Obuna />} />
            <Route path="obuna" element={<Obuna />} />
            <Route path="sozlamalar" element={<Sozlamalar />} />
            <Route path="ehisob" element={<EHisob />} />
            <Route path="saqlanganlar" element={<Saqlanganlar />} />
          </Route>
          <Route path="*" element={<h1>NOT FOUND</h1>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App