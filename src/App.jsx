import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import NavbarTop from "./components/NavbarTop";
import FooterBot from "./components/FooterBot";
import NotFound from "./pages/NotFound";
import Dashboard from "./admin/Dashboard";
import Mobilelegend from "./admin/Mobilelegend";
import Mobilelegend_2 from "./admin/Mobilelegend2";
import Mobilelegends from "./pages/order/Mobilelegends";
import Mobilelegends_2 from "./pages/order/Mobilelegends2";
import Category from "./admin/Category";
import Login from "./auth/Login";
import TermsAndCondition from "./pages/TermAndCondition";
import Tentang from "./pages/Tentang";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Qris from "./admin/Qris";
import 'react-bootstrap';
import Bank from "./admin/Bank";
import Ewallet from "./admin/Ewallet";
import Genshinimpact from "./admin/Genshinimpact";
import Genshinimpact2 from "./admin/Genshinimpact2";
import GenshinImpact from "./pages/order/Genshinimpact";
import GenshinImpact_2 from "./pages/order/Genshinimpact2";
import BannerSetting from "./admin/BannerSetting";
import PopUp from "./admin/PopUp";
import Daftalayanan from "./pages/Daftalayanan";
import WhatsappSetting from "./admin/WhatsappSetting";

function App() {
  return (
    <Router>
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/Terms" element={<TermsAndCondition />} />
        <Route path="/Tentang" element={<Tentang />} />
        <Route path="/daftar-layanan" element={<Daftalayanan />} />
        <Route path="/admin/whatsapp-setting" element={<WhatsappSetting />} />
        <Route path="/Tentang" element={<Login />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/admin/banner-setting" element={<BannerSetting />} />
        <Route path="/admin/pop-up" element={<PopUp />} />
        <Route path="/admin/qris" element={<Qris />} />
        <Route path="/admin/bank" element={<Bank />} />
        <Route path="/admin/e-wallet" element={<Ewallet />} />
        <Route path="/admin/genshin-impact" element={<Genshinimpact/>} />
        <Route path="/order/genshin-impact" element={<GenshinImpact/>} />
        <Route path="/admin/genshin-impact-2" element={<Genshinimpact2/>} />
        <Route path="/order/genshin-impact-vilog" element={<GenshinImpact_2/>} />
        <Route path="/admin/dashboard-admin" element={<Dashboard />} />
        <Route path="/admin/category-game" element={<Category />} />
        <Route path="/admin/mobile-legend" element={<Mobilelegend />} />
        <Route path="/admin/mobile-legend-2" element={<Mobilelegend_2 />} />
        <Route path="/order/mobile-legends" element={<Mobilelegends />} />
        <Route path="/order/mobile-legends-2" element={<Mobilelegends_2 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterBot />
    </Router>
  );
}

export default App;
