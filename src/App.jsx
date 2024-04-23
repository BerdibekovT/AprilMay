import './App.css'
import {Route, Routes} from'react-router-dom'
import Layout from "./Layout/layout";
import Home from "./pages/Home/home";
import Football from "./pages/Footbal/football";


function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/footballfields'} element={<Football/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
