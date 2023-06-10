{/*import {Myroutes }from "./router/routes";*/}
import Footer from "./components/Footer"
import Navbar from './components/Navbar';
import P_Inicio from './pages/P_Inicio';

export default function App() {
    return (
    <>
      <Navbar/>
      {/*<BrowserRouter>*/}
        <div className="flex w-full">
          <P_Inicio/>
          {/*<Myroutes></Myroutes>*/}
        </div> 
        {/*</BrowserRouter>*/}
      <Footer/>
    </>
    )
}