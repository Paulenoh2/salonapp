import { useState } from 'react';
import './App.css'; 
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import im1 from './images/im1.jpg';
import im2 from './images/im2.jpg';
import im3 from './images/im3.jfif';
import im4 from './images/im4.jpg';
import im5 from './images/im5.jfif';
import im6 from './images/im6.jpg';
import im7 from './images/im7.webp';
import im8 from './images/im8.jfif';
import im9 from './images/im9.webp';
import im10 from './images/im10.webp';
import im11 from './images/im11.jfif';
import im12 from './images/im12.jfif';
import im13 from './images/im13.jpg';

import images1 from './images/images1.jfif';
import images2 from './images/images2.jfif';
import images3 from './images/images3.jfif';
import images4 from './images/images4.jfif';
import images5 from './images/images5.jfif';
import images6 from './images/images6.jfif';
import images7 from './images/images7.jfif';

import h1 from './images/h1.jfif';
import h2 from './images/h2.jfif';
import h3 from './images/h3.jfif';
import h4 from './images/h4.jfif';
import h5 from './images/h5.jfif';
import h6 from './images/h6.jfif';
import h7 from './images/h7.jfif';
import h8 from './images/h8.jfif';
import h9 from './images/h9.jfif';
import h10 from './images/h10.jfif';
import h11 from './images/h11.jfif';
import h12 from './images/h12.jfif';
import h14 from './images/h14.jfif';

import p1 from './images/p1.webp';
import p2 from './images/p2.webp';
import p3 from './images/p3.webp';
import p4 from './images/p4.webp';
import p5 from './images/p5.webp';
import p6 from './images/p6.webp';
import p7 from './images/p7.webp';
import p8 from './images/p8.webp';
import p9 from './images/p9.webp';
import p10 from './images/p10.webp';
import p11 from './images/p11.webp';
import SkinCare from './components/SkinCare';
import Spa from './components/Spa';
import HairCuts from './components/HairCuts';
import Nails from './components/Nails';
import logo from './images/logo.png';


import AddContact from "./components/AddContact";
import ContactList from './components/ContactList';
import HeaderLogo from './components/HeaderLogo';

import { v4 as uuidv4 } from 'uuid';
import Footer from './components/Footer';
import HairsCutGallery from './components/HairsCutGalley';
import NailsGallery from './components/NailsGallery';
import HairStyleGallery from './components/HairStyleGallery'




function App() {


  const [contacts, setContacts] = useState([]);

const gallery = [h1,im1,images1,h2,im2,h2,im3,h3,im4,images4,h5,im5,h6,h7,p1,p2];
const hairStyle = [h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h14,p1,p2,p3,p4,h3,h5,h6];
const nailsPics = [im1,im2,im3,im4,im5,im6,im7,im8,im9,im10,im11,im12,im13,im1,im2,im3,im4,im5,im6,im7,im8,im9,im10,im11,im12];
const hairsCuts = [images1,p1,p2,images3,images4,p3,p4,images5,p5,images6,p6,images7,p7,p8,p9,p10,images4,images6,p6,p2];




   // Function to add a new contact
   const addContactHandler = (contact) => {
    setContacts([...contacts,{id: uuidv4(), ...contact}]);
  };


 
  // Function to delete a contact by ID
  const deleteContactHandler = (id) => {
    const deleteContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(deleteContacts);
  };

  // Function to update a contact by ID
  const updateContactHandler = (id, updatedContact) => {
    const updatedContacts = contacts.map((contact) =>contact.id === id ? updatedContact : contact );
    setContacts(updatedContacts);
  };


  return (
    <div>
      
        <Navbar logo = {logo}/>
        <HeaderLogo/>
        <Routes>
        
        <Route path = '/' element = {<Home gallery = {gallery} h12= {h12} im11 ={im11}interval={4000}  />}/>
        <Route path='/about' element = {<About p11 ={p11} p3 = {p3} p7 = {p7} />}/>
        <Route path='/contact' element = {<Contact p6 = {p6} p8 = {p8} p11 ={p11} text =" Contact 068 042 6550   paulenoh2@gmail.com" />}/>

              
        <Route path='/haircuts' element = {<HairCuts images1 = {images1} images3 = {images3} p11 ={p11}/>}/>
        <Route path='/nailscare' element={<Nails im2 = {im2} im11 = {im11}  h10 = {h10}/>} />
        <Route path='/skincare' element={<SkinCare p4 = {p4} p5 = {p5}  p6 = {p6}/>} />
        <Route path='/spa-services' element = {<Spa p6 = {p6} p7 = {p7} p9 ={p9} />}/>


        <Route path='/cuts-gallery' element = {<HairsCutGallery  hairsCuts = {hairsCuts} />}/>
        <Route path='/nails-gallery' element = {<NailsGallery  nailsPics = {nailsPics} />}/>
         <Route path='/hairs-style' element = {<HairStyleGallery  hairStyle = {hairStyle} />}/>


  
      <Route path="/contact" element = {<AddContact addContactHandler ={addContactHandler } p10 ={p10}/>}/>
      <Route path="/lists" element = {<ContactList
        contacts={contacts}
        deleteContactHandler={deleteContactHandler}
        updateContactHandler={updateContactHandler} />}/>

        </Routes>
      
        <Footer/>
    </div>
    
  );
}

export default App;

 //  <Route path='/hairs-style' element = {<HairsStyleGallery  hairsStyles = {hairsStyles} />}/>
