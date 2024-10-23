import React, { useState } from 'react';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import MainArea from './components/MainArea';
import RightSidebar from './components/RightSidebar';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [filter, setFilter] = useState<'all' | 'internal' | 'customer'>('all');

  return (
    <div className="flex flex-col h-screen">
      <Header setActiveModule={setActiveModule} />
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar activeModule={activeModule} setFilter={setFilter} />
        <main className="flex-1 overflow-auto p-4">
          <MainArea activeModule={activeModule} filter={filter} setFilter={setFilter} />
        </main>
        <RightSidebar activeModule={activeModule} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
