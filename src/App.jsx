import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContextProvider from './context/AppContext';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import PetProfiles from './pages/PetProfiles';
import AddPet from './pages/AddPet';
import Login from './pages/Login';
import Register from './pages/Register';
import Shelter from './pages/Shelter';          
import Veterinarian from './pages/Veterinarian';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/dashboard/Users";
import Product from "./pages/dashboard/Product";
import Orders from "./pages/dashboard/Orders";
import Pet from "./pages/dashboard/Pet";
import Appointment from "./pages/dashboard/Appointment";
import AddProduct from './pages/dashboard/Addproduct';
import UpdateProduct from './pages/dashboard/Updateproduct';
import UpdatePet from './pages/dashboard/Updatepet';
import PetAdd from "./pages/dashboard/PetAdd";
import Profile from './pages/dashboard/Profile';
import Notification from './pages/dashboard/Notification';
import AddAppointment from './pages/dashboard/AddAppointment';
import UpdateAppointment from './pages/dashboard/UpdateAppointment';



function App() {
  return (
    <AppContextProvider>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pet-profiles" element={<PetProfiles />} />
          <Route path="/add-pet" element={<AddPet />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />          
          <Route path="/shelter" element={<Shelter />} />            
          <Route path="/veterinarian" element={<Veterinarian />} />  
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/products" element={<Product />} />
          <Route path="/dashboard/orders" element={<Orders />} />
          <Route path="/dashboard/pet" element={<Pet />} />
          <Route path="/dashboard/appointment" element={<Appointment />} />
          <Route path="/dashboard/updateproduct/:id" element={<UpdateProduct />} />
          <Route path="/dashboard/addproduct" element={<AddProduct />} />
          <Route path="/dashboard/updatepet/:id" element={<UpdatePet />} />
          <Route path="/dashboard/addpet" element={<PetAdd />} />
          <Route path='/dashboard/profile'element={<Profile/>} />
          <Route path='/dashboard/notification'element={<Notification/>}/>
           <Route path='/dashboard/addappointment'element={<AddAppointment/>}/>
          
          <Route path='/dashboard/updateappointment/:id'element={<UpdateAppointment/>}/>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;

