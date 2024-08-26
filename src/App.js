import React,{useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Footer from './Components/Footer/Footer';
import '../src/App.css'
import Citypage from './Components/Citypage/Citypage';
import ListingForm from './Components/Listings/Listings';
import PendingListings from './Components/Listings/PendingListings';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="app">
      <Header setSearchQuery={setSearchQuery} />
      <main>
        <Routes>
          <Route path="/" element={<Homepage searchQuery={searchQuery}/>} />
          <Route path="/city/:cityName" element={<Citypage searchQuery={searchQuery}/>} />
          <Route path="/listings" element={<ListingForm/>} />
          <Route path="/admin/pending-listings" element={<PendingListings />} />
          {/* Add other routes here */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

