import logo from './logo.svg';
import './App.css';
import Wallpaper from "./components/Wallpaper";
import Header from "./components/Header";
import Goods from "./components/Goods";
import {featureListContext} from "./contexts/context";
import Registration from "./components/Registration";
import {useState} from "react";
import {Route, Routes, Link, Router, BrowserRouter} from "react-router-dom";
import "../src/components/Feedbacks.jsx"
import Feedbacks from "./components/Feedbacks";
import Main from "./pages/Main"
import Feedback from "./components/Feedback";
import Cart from "./components/Cart";
function App() {

        const [featureList, setFeatureList] = useState([]);

        const addToList = (product) => {
            console.log(product)
            if (featureList.includes(product)) {
                console.log("ss")
                return
            }
            const array = [...featureList,product]
            setFeatureList(array)
            console.log(featureList)
        }

        // Другие продукты...
  return (
      <div className="App">
          <BrowserRouter>
              <featureListContext.Provider value={{featureList, addToList}}>
                  <Routes>
                      <Route path="/" element={<Main/>}/>
                      <Route path="/feedbacks" element={<Feedbacks/>}/>
                      <Route path="/feedback" element={<Feedback/>}/>
                      <Route path="/cart" element={<Cart/>}/>
                  </Routes>
              </featureListContext.Provider>
          </BrowserRouter>
      </div>
  );
}

export default App;
