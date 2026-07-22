import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProductsIndex from "./pages/ProductsIndex";
import ProductCategory from "./pages/ProductCategory";
import About from "./pages/About";
import Dealers from "./pages/Dealers";
import BecomeADealer from "./pages/BecomeADealer";
import Resources from "./pages/Resources";
import Events from "./pages/Events";
import Sds from "./pages/Sds";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductsIndex />} />
        <Route path="/products/:slug" element={<ProductCategory />} />
        <Route path="/about-bpi" element={<About />} />
        <Route path="/dealers" element={<Dealers />} />
        <Route path="/become-a-dealer" element={<BecomeADealer />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sds" element={<Sds />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
