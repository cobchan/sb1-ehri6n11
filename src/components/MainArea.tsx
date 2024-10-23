import React, { useState } from 'react';
import Dashboard from './modules/Dashboard';
import CRM from './modules/CRM';
import Projects from './modules/Projects';

interface MainAreaProps {
  activeModule: string;
  setFilter: (filter: 'all' | 'internal' | 'customer') => void;
}

const MainArea: React.FC<MainAreaProps> = ({ activeModule, setFilter }) => {
  const [filter, setFilterState] = useState<'all' | 'internal' | 'customer'>('all');

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <Dashboard />;
      case 'crm':
        return <CRM />;
      case 'projects':
        return <Projects filter={filter} setFilter={setFilter} />;
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
