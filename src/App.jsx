import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Termeni from "./components/Termeni";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Cookies from "./components/Cookies";
import About from "./components/About";

import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Root />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/termeni" element={<Termeni />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/about" element={<About />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Cards />
      <Outlet />
      <Footer />
      <div>
        <Outlet />
      </div>
    </>
  );
};
