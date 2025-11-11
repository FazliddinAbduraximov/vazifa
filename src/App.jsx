import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layout/main-layout"
import { Home } from "./pages/home"
import { ProfileLayout } from "./layout/profile-layout"
import { Profile } from "./pages/profile"
import { Auth } from "./pages/auth"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="app" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
          </Route>
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
