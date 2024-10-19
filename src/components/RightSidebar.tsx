import React from 'react';
import { Bell, Calendar, MessageCircle } from 'lucide-react';

interface RightSidebarProps {
  activeModule: string;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ activeModule }) => {
  return (
    <aside className="bg-gray-100 w-64 p-4 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">補助機能</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-medium flex items-center"><Bell size={16} className="mr-2" /> 通知</h3>
          <ul className="mt-2 text-sm">
            <li>新しいタスクが割り当てられました</li>
            <li>プロジェクトXの締め切りが近づいています</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium flex items-center"><Calendar size={16} className="mr-2" /> 今日の予定</h3>
          <ul className="mt-2 text-sm">
            <li>10:00 - チームミーティング</li>
            <li>14:00 - クライアントAとの商談</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium flex items-center"><MessageCircle size={16} className="mr-2" /> チャット</h3>
          <ul className="mt-2 text-sm">
            <li>田中さん: 資料の確認をお願いします</li>
            <li>佐藤さん: 了解しました</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;