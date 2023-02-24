import { BrowserRouter as Router } from "react-router-dom";
import GetProduct from "./components/getprodyct";
import ShopAdmin from "./components/ShopAdmin";
import LoginPage from "./pages/LoginPage";
import MyShop from "./pages/MyShop";
import AppRoutes from "./routes/routes";

function App() {
  return( 
    <Router>
       <AppRoutes/>
    </Router>
    // <GetProduct/>
   
  )
}

export default App;



//  {/* <div>
//       {/* <LoginPage/> */}
//       <MyShop/>
//     </div> */}
//     {/* <ShopAdmin/> */}