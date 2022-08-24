import { Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
import Header from "./components/layout/Header";
import CompanyPage from "./pages/CompanyPage";
import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import TransactionHistory from "./pages/Dashboard/TransactionHistory";
import ProductManagement from "./pages/Dashboard/ProductManagement";
import Subscriptions from "./pages/Dashboard/Subscriptions";
import General from "./pages/Dashboard/General";
import LeadManagement from "./pages/Dashboard/LeadManagement";
import Support from "./pages/Dashboard/Support";
import Register from "./pages/Register";
import Wallet from "./pages/Wallet";
import About from "./pages/AboutUs";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/dashboard/general" element={<General />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/dashboard/product-management"
          element={<ProductManagement />}
        />
        <Route path="/dashboard/subscription" element={<Subscriptions />} />
        <Route path="/dashboard/lead-management" element={<LeadManagement />} />
        <Route
          path="/dashboard/transaction-history"
          element={<TransactionHistory />}
        />
        <Route path="/dashboard/support" element={<Support />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
