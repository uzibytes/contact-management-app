import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/assets/pages/Home';
import Contacts from '../src/assets/pages/Contacts';
import ChartsAndMaps from '../src/assets/pages/ChartsAndMaps';
import Header from '../src/assets/components/Header';
import Sidebar from '../src/assets/components/Sidebar';
import './App.css';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} closeSidebar={closeSidebar} />
        <div className="main-content">
          <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          <div className="content py-5 px-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/charts-and-maps" element={<ChartsAndMaps />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
