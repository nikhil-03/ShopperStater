import { BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MyShop from "./pages/MyShop";
import AppRoutes from "./routes/routes";

function App() {
  return( 
    <Router>
       <AppRoutes/>
    </Router>
    // <div>
    //   {/* <LoginPage/> */}
    //   <MyShop/>
    // </div>
  )
}

export default App;
