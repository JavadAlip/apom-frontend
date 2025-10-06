import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FarmerDashboard from "../pages/marketplace/FarmerDashboard";
import BuyerDashboard from "../pages/marketplace/BuyerDashboard";
import RequestPickup from "../pages/transportation/RequestPickup";
import LearningHub from "../pages/education/LearningHub";

  //farmer
  import Login from "./../pages/marketplace/FarmerModule/FarmerLogin";
  import Register from "./../pages/marketplace/FarmerModule/FarmerRegister";
  import ListProduce from "./../pages/marketplace/FarmerModule/ListProduce";
  import OrderManagement from "./../pages/marketplace/FarmerModule/OrderManagement";
  import PaymentsReceived from "./../pages/marketplace/FarmerModule/PaymentsReceived";

export default function AppRoutes() {
  return (
    <Router>

      <Routes>
        {/* farmer */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/produce" element={<ListProduce />} />
        <Route path="/orders" element={<OrderManagement />} />
        <Route path="/payments" element={<PaymentsReceived />} />


        <Route path="/" element={<FarmerDashboard />} />
        <Route path="/marketplace-buyer" element={<BuyerDashboard />} />
        <Route path="/transportation" element={<RequestPickup />} />
        <Route path="/education" element={<LearningHub />} />
      </Routes>

    </Router>
  );
}
