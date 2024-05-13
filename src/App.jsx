import './App.css'
import {Route, Routes} from'react-router-dom'
import Layout from "./Layout/layout";
import Home from "./pages/Home/home";
import About from "./pages/AboutUs/About";
import Error from "./pages/Error/error";
import Football from "./pages/Football/Football";
import Basketball from "./pages/Basketball/basketball";
import GolfField from "./pages/Golffield/GolfField";



function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/football'} element={<Football/>}/>
            <Route path={'/basketball'} element={<Basketball/>}/>
            <Route path={'/golffield'} element={<GolfField/>}/>
        </Route>
          <Route path={'*'} element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
