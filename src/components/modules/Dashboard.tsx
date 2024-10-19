import React from 'react';
import { BarChart, PieChart, Calendar, CheckSquare } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">ダッシュボード</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            <BarChart className="mr-2" /> 売上推移
          </h2>
          <p>ここに売上グラフが表示されます</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            <PieChart className="mr-2" /> 顧客分布
          </h2>
          <p>ここに顧客分布グラフが表示されます</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            <Calendar className="mr-2" /> 今後の予定
          </h2>
          <ul>
            <li>4/15 - クライアントミーティング</li>
            <li>4/20 - プロジェクト締め切り</li>
            <li>4/25 - チーム研修</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            <CheckSquare className="mr-2" /> タスク進捗
          </h2>
          <ul>
            <li>プロジェクトA: 75% 完了</li>
            <li>プロジェクトB: 30% 完了</li>
            <li>プロジェクトC: 90% 完了</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;