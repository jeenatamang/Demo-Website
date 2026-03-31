import react from 'react';
import Hello from './hello.jsx';
// import {Practise, Database, AgeCheck, UserList} from "./practise.jsx";
import Header from './Component/Header.jsx';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Events from './pages/Events.jsx';
import Blog from './pages/Blog.jsx';
import Courses from './pages/Courses.jsx';
import Mainlayout from './Component/Mainlayout.jsx';
import Register from './pages/Register.jsx';
import Categories from './pages/Categories.jsx';
import Product from './pages/Product.jsx';
import ProductDetails from "./pages/Productdetails";
import CategoriesDescription from "./pages/CategoriesDescription";
function App(){
return (
  <div>
     <Routes>
      <Route path="/" element={<Mainlayout />}>
      <Route index element={<Home />}  />
      <Route path="/about" element={<About />}  />
      <Route path="/contact" element={<Contact />}  />
      <Route path="/events" element={<Events />}  />
      <Route path="/courses" element={<Courses />}  />
      <Route path="/blog" element={<Blog />}  />
      <Route path="/register" element={<Register />}  />
      <Route path="/categories/:name" element={<Categories />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/category-description/:id" element={<CategoriesDescription />} />
      </Route>
     </Routes>
  </div>
)
}
export default App;