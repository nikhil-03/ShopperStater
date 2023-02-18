import { BrowserRouter as Router, Route, Routes,useNavigate } from "react-router-dom"
import ShopForm from "../components/ShopForm";
import LoginPage from "../pages/LoginPage"

function AppRoutes(){
    const navigate = useNavigate();
    return (
        <Routes>
           <Route path="/" element={<LoginPage nav={navigate}/>}/>
           <Route path="/login" element={<LoginPage nav={navigate}/>}/>
           <Route path="/createshop" element={<ShopForm nav={navigate}/>}/>
        </Routes>
    )
}

export default AppRoutes;