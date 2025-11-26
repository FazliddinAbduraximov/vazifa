import { Route, Routes } from "react-router-dom"
import { Login } from "./page/auth/login"
import { Register } from "./page/auth/register"
import { MainLayout } from "./layout/main-layout"
import adminRouter from "./router/admin-router"
import { Statistics } from "@/page/admin/statistics/statistics"



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/app" element={<MainLayout />} />
          <Route path="admin">
            <Route  index element={<Statistics />}/>
            {
              adminRouter.map(({path,page:Page})=> <Route key={path} path={path} element={<Page />}/>)
            }
          </Route>
          <Route path="teacher">

          </Route>
          <Route path="student">

          </Route>
        <Route />
      </Routes>
    </>
  )
}

export default App
