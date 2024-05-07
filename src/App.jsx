import './App.css'
import {Route, Routes} from'react-router-dom'
import Layout from "./Layout/layout";
import Home from "./pages/Home/home";
import Football from "./pages/Footbal/football";
import About from "./pages/AboutUs/About";
import Error from "./pages/Error/error";


function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/footballfields'} element={<Football/>}/>
            <Route path={'/about'} element={<About/>}/>
        </Route>
          <Route path={'*'} element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
