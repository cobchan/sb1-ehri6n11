import React, { useState } from 'react';
import Dashboard from './Dashboard';
import CRM from './CRM';
import Projects from './Projects';

interface MainAreaProps {
  activeModule: string;
  filter: 'all' | 'internal' | 'customer';
  setFilter: (filter: 'all' | 'internal' | 'customer') => void;
}

const MainArea: React.FC<MainAreaProps> = ({ activeModule, filter, setFilter }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <Dashboard />;
      case 'crm':
        return <CRM selectedCustomer={selectedCustomer} setSelectedCustomer={setSelectedCustomer} />;
      case 'projects':
        return <Projects filter={filter} setFilter={setFilter} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />;
      default:
        return <div>選択されたモジュール: {activeModule}</div>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      {renderModule()}
    </div>
  );
};

export default MainArea;
