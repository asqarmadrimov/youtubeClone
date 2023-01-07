import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

// import {Chanel, VidoeDetal, Search, Main, Navbar} from "./index";
import Chanel from './Chanel';
import Search from './Search';
import Main from './Main';
import Navbar from './Navbar';
import VidoeDetal from './VidoeDetal';


const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/chanel/:id" element={<Chanel />} />
        <Route path="/video/:id" element={<VidoeDetal />}/>
        <Route path="/search/:id" element={<Search /> }/>
      </Routes>
    </Box> 
  )
}

export default App