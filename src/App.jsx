import './App.css'
import {Route, Routes} from'react-router-dom'
import Layout from "./Layout/layout";
import Home from "./pages/Home/home";
import About from "./pages/AboutUs/About";
import Error from "./pages/Error/error";
import Football from "./pages/Football/Football";
import Basketball from "./pages/Basketball/basketball";
import GolfField from "./pages/Golffield/GolfField";
import Gym from "./pages/Gym/gym";
import Hockey from "./pages/Hockey/Hockey";
import BigTennis from "./pages/BigTennis/BigTennis";



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
            <Route path={'/gym'} element={<Gym/>}/>
            <Route path={'/hockey'} element={<Hockey/>}/>
            <Route path={'/bigtennis'} element={<BigTennis/>}/>
        </Route>
          <Route path={'*'} element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
