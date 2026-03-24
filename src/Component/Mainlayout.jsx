import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';
const Mainlayout = () =>{
    return (
        <div> 
            <Header />
            <Outlet />
            <Footer />
         </div>
    )
} 
export default Mainlayout;