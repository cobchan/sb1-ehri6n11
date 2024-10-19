import React from 'react';
import {
  Users,
  MessageSquare,
  Mail,
  Calendar,
  Clipboard,
  CheckSquare,
  MessageCircle,
  Book,
} from 'lucide-react';

interface HeaderProps {
  setActiveModule: (module: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActiveModule }) => {
  const modules = [
    { name: 'CRM', icon: Users },
    { name: 'Desk', icon: MessageSquare },
    { name: 'Mail', icon: Mail },
    { name: 'TeamInbox', icon: Mail },
    { name: 'Calendar', icon: Calendar },
    { name: 'Projects', icon: Clipboard },
    { name: 'ToDo', icon: CheckSquare },
    { name: 'Cliq', icon: MessageCircle },
    { name: 'Notebook', icon: Book },
  ];

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">ZohoLike</div>
        <nav className="flex space-x-4">
          {modules.map((module) => (
            <button
              key={module.name}
              onClick={() => setActiveModule(module.name.toLowerCase())}
              className="flex items-center space-x-1 hover:bg-blue-700 p-2 rounded"
            >
              <module.icon size={20} />
              <span>{module.name}</span>
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
