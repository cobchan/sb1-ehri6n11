import React from 'react';
import { Users, DollarSign, Phone, Mail } from 'lucide-react';

const CRM: React.FC = () => {
  const customers = [
    { id: 1, name: '株式会社A', revenue: 1000000, contact: '田中太郎', phone: '03-1234-5678', email: 'tanaka@companya.com' },
    { id: 2, name: '株式会社B', revenue: 750000, contact: '佐藤花子', phone: '03-2345-6789', email: 'sato@companyb.com' },
    { id: 3, name: '株式会社C', revenue: 1200000, contact: '鈴木一郎', phone: '03-3456-7890', email: 'suzuki@companyc.com' },
    { id: 4, name: '株式会社D', revenue: 500000, contact: '高橋美香', phone: '03-4567-8901', email: 'takahashi@companyd.com' },
    { id: 5, name: '株式会社E', revenue: 900000, contact: '伊藤健太', phone: '03-5678-9012', email: 'ito@companye.com' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">顧客管理（CRM）</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">顧客名</th>
            <th className="py-3 px-6 text-left">売上</th>
            <th className="py-3 px-6 text-left">担当者</th>
            <th className="py-3 px-6 text-left">電話番号</th>
            <th className="py-3 px-6 text-left">メールアドレス</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {customers.map((customer) => (
            <tr key={customer.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center">
                  <Users className="mr-2" />
                  <span>{customer.name}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <DollarSign className="mr-2" />
                  <span>{customer.revenue.toLocaleString()}円</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">{customer.contact}</td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <Phone className="mr-2" />
                  <span>{customer.phone}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <Mail className="mr-2" />
                  <span>{customer.email}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CRM;