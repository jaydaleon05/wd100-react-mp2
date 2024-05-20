import "bootstrap/dist/css/bootstrap.min.css";
import BodyContent from "./components/bodycontent";
import NavigationBar from "./components/navigationbar";
import Banner from "./img/cute-sleepy-kitten-website-header.jpg"
import Footer from "./components/footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/about";
import Gallery from "./components/gallery";
import Home from "./components/home";





import './App.css';



// import './App.css';
function App() {
  return (
    <>
      <BrowserRouter>
          <NavigationBar img={Banner}></NavigationBar>
            <Routes>
              <Route path="/" element={<BodyContent></BodyContent>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/gallery" element={<Gallery></Gallery>}></Route>
              <Route path="/fulldetails" element={<Home></Home>}></Route>
            </Routes>
          <Footer></Footer> 
      </BrowserRouter>
    </>
    
  );
}

export default App;
