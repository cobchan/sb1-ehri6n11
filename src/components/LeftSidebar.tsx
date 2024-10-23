import React from 'react';
import { Users, Briefcase, BarChart, List, Calendar, MessageSquare, CheckSquare } from 'lucide-react';

interface LeftSidebarProps {
  activeModule: string;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ activeModule }) => {
  const sidebarItems = {
    crm: [
      { name: '顧客一覧', icon: Users },
      { name: '商談', icon: Briefcase },
      { name: 'レポート', icon: BarChart },
    ],
    projects: [
      { name: 'プロジェクト一覧', icon: List },
      { name: 'タスク', icon: CheckSquare },
      { name: 'ガントチャート', icon: Calendar },
      { name: '課題トラッカー', icon: MessageSquare },
      { name: '社内プロジェクト', icon: Briefcase, filter: 'internal' },
      { name: '顧客プロジェクト', icon: Briefcase, filter: 'customer' },
    ],
  };

  const handleFilterClick = (filter: 'internal' | 'customer') => {
    // Implement filter logic here
  };

  const items = sidebarItems[activeModule as keyof typeof sidebarItems] || [];

  return (
    <aside className="bg-gray-100 w-64 p-4 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4 capitalize">{activeModule}</h2>
      <nav>
        <ul>
          {items.map((item) => (
            <li key={item.name} className="mb-2">
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
                onClick={() => item.filter && handleFilterClick(item.filter)}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
