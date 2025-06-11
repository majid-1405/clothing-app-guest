import "./App.css";
import React, { Suspense } from "react";
// import Navbar from './layouts/Navbar'
// import HomePage from "./pages/Homepage";
// import Aboutus from "./pages/AboutUs/Aboutus";
// import ProductList from "./pages/ProductList";
 import { Routes, Route } from "react-router-dom";
// import FAQ from "./pages/FAQ";
// import Footer from './components/Footer'
// import ErrorPage from "./pages/ProductList/ErrorPage";
// import MainLayout from "./layouts/MainLayout";
// import Login from "./pages/auth/Login";
// import Forgot from "./pages/auth/Forgot";
// import Register from "./pages/auth/Register";
// import AuthLayout from "./layouts/AuthLayout";
import Loading from "./components/Loading";
import ContactPage from "./pages/ContactPage";
import OurTeamPage from "./pages/OurTeamPage";
import AboutPage from "./pages/AboutPage";
import Reviewpage from "./pages/ReviewPage";
import ProductQuickview from "./pages/ProductQuickview";
import ProductDetail from "./pages/ProduckDetail";
import KeranjangPage from "./pages/KeranjangPage";
import ReviewDetail from "./pages/ReviewDetails";
import ArticlePage from "./pages/ArticlePage";
import CareerPage from "./pages/CareerPage";
import MediaPage from "./pages/MediaPage";
import PreOrderPage from "./pages/PreOrderPage";
const HomePage = React.lazy(() => import("./pages/Homepage"));
const ProductList = React.lazy(() => import("./pages/ProductList"));
const FAQ = React.lazy(() => import("./pages/FAQ"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const ErrorLayout = React.lazy(() => import("./layouts/ErrorLayout"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/Aboutus" element={<Aboutus />} /> */}
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contactus" element={<ContactPage/>} />
          <Route path="/OurTeam" element={<OurTeamPage/>} />   
          <Route path="/Aboutus" element={<AboutPage/>} />   
          <Route path="/Reviewpage" element={<Reviewpage/>} /> 
          <Route path="/Reviewpage/:id" element={<ReviewDetail/>} /> 
          <Route path="/KeranjangPage" element={<KeranjangPage/>} />
          <Route path="/KeranjangPage/:id" element={<ProductQuickview />} />  
          <Route path="/QuickReview/:id" element={<ProductQuickview />} /> 
          <Route path="/ProductList/:id" element={<ProductDetail/>} /> 
          <Route path="/Articlepage" element={<ArticlePage/>} /> 
          <Route path="/Careerpage" element={<CareerPage/>} /> 
          <Route path="/Mediapage" element={<MediaPage/>} /> 
          <Route path="/PreOrderpage" element={<PreOrderPage/>} /> 
          {/* <Route path="/ProductQuickview" element={<ProductQuickview/>} />  */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
        <Route element={<ErrorLayout />}>
          <Route path="/403" element={<ErrorPage code="403" />} />
          <Route path="*" element={<ErrorPage code="404" />} />
          <Route path="/400" element={<ErrorPage code="400" />} />
          <Route path="/401" element={<ErrorPage code="401" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
