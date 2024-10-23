import React from 'react';
import { Users, DollarSign, Phone, Mail } from 'lucide-react';

const CRM: React.FC = () => {
  const customers = [
    {
      id: 1,
      name: '株式会社A',
      nameHiragana: 'かぶしきがいしゃA',
      revenue: 1000000,
      contact: '田中太郎',
      phone: '03-1234-5678',
      email: 'tanaka@companya.com',
      postalCode: '123-4567',
      address: '東京都新宿区1-1-1',
      address2: 'ビルディングA',
      department: '営業部',
      position: '部長',
      contactEmail: 'tanaka@companya.com',
      contactPhone: '03-1234-5678',
      contactMobile: '090-1234-5678',
      otherContacts: [
        { name: '山田次郎', email: 'yamada@companya.com', phone: '03-2345-6789' },
        { name: '佐藤三郎', email: 'sato@companya.com', phone: '03-3456-7890' },
      ],
      externalCustomerId: 'EXT12345',
      externalCustomerInfoId: 'EXTINFO12345',
      memo: '重要な顧客',
    },
    {
      id: 2,
      name: '株式会社B',
      nameHiragana: 'かぶしきがいしゃB',
      revenue: 750000,
      contact: '佐藤花子',
      phone: '03-2345-6789',
      email: 'sato@companyb.com',
      postalCode: '234-5678',
      address: '東京都渋谷区2-2-2',
      address2: 'ビルディングB',
      department: 'マーケティング部',
      position: '課長',
      contactEmail: 'sato@companyb.com',
      contactPhone: '03-2345-6789',
      contactMobile: '090-2345-6789',
      otherContacts: [
        { name: '鈴木四郎', email: 'suzuki@companyb.com', phone: '03-4567-8901' },
      ],
      externalCustomerId: 'EXT67890',
      externalCustomerInfoId: 'EXTINFO67890',
      memo: '新規顧客',
    },
    {
      id: 3,
      name: '株式会社C',
      nameHiragana: 'かぶしきがいしゃC',
      revenue: 1200000,
      contact: '鈴木一郎',
      phone: '03-3456-7890',
      email: 'suzuki@companyc.com',
      postalCode: '345-6789',
      address: '東京都港区3-3-3',
      address2: 'ビルディングC',
      department: '開発部',
      position: '主任',
      contactEmail: 'suzuki@companyc.com',
      contactPhone: '03-3456-7890',
      contactMobile: '090-3456-7890',
      otherContacts: [],
      externalCustomerId: 'EXT11223',
      externalCustomerInfoId: 'EXTINFO11223',
      memo: '長期顧客',
    },
    {
      id: 4,
      name: '株式会社D',
      nameHiragana: 'かぶしきがいしゃD',
      revenue: 500000,
      contact: '高橋美香',
      phone: '03-4567-8901',
      email: 'takahashi@companyd.com',
      postalCode: '456-7890',
      address: '東京都中央区4-4-4',
      address2: 'ビルディングD',
      department: '人事部',
      position: 'マネージャー',
      contactEmail: 'takahashi@companyd.com',
      contactPhone: '03-4567-8901',
      contactMobile: '090-4567-8901',
      otherContacts: [],
      externalCustomerId: 'EXT44556',
      externalCustomerInfoId: 'EXTINFO44556',
      memo: '要注意顧客',
    },
    {
      id: 5,
      name: '株式会社E',
      nameHiragana: 'かぶしきがいしゃE',
      revenue: 900000,
      contact: '伊藤健太',
      phone: '03-5678-9012',
      email: 'ito@companye.com',
      postalCode: '567-8901',
      address: '東京都千代田区5-5-5',
      address2: 'ビルディングE',
      department: '財務部',
      position: 'アシスタント',
      contactEmail: 'ito@companye.com',
      contactPhone: '03-5678-9012',
      contactMobile: '090-5678-9012',
      otherContacts: [],
      externalCustomerId: 'EXT77889',
      externalCustomerInfoId: 'EXTINFO77889',
      memo: '潜在顧客',
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">顧客管理（CRM）</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">顧客名</th>
            <th className="py-3 px-6 text-left">顧客名（ひらがな）</th>
            <th className="py-3 px-6 text-left">売上</th>
            <th className="py-3 px-6 text-left">担当者</th>
            <th className="py-3 px-6 text-left">電話番号</th>
            <th className="py-3 px-6 text-left">メールアドレス</th>
            <th className="py-3 px-6 text-left">郵便番号</th>
            <th className="py-3 px-6 text-left">住所</th>
            <th className="py-3 px-6 text-left">住所２</th>
            <th className="py-3 px-6 text-left">担当者所属部署</th>
            <th className="py-3 px-6 text-left">担当者役職</th>
            <th className="py-3 px-6 text-left">担当者TEL（モバイル）</th>
            <th className="py-3 px-6 text-left">他の担当者</th>
            <th className="py-3 px-6 text-left">外部システムの顧客ID</th>
            <th className="py-3 px-6 text-left">外部システムの顧客情報ID</th>
            <th className="py-3 px-6 text-left">メモ</th>
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
              <td className="py-3 px-6 text-left">{customer.nameHiragana}</td>
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
              <td className="py-3 px-6 text-left">{customer.postalCode}</td>
              <td className="py-3 px-6 text-left">{customer.address}</td>
              <td className="py-3 px-6 text-left">{customer.address2}</td>
              <td className="py-3 px-6 text-left">{customer.department}</td>
              <td className="py-3 px-6 text-left">{customer.position}</td>
              <td className="py-3 px-6 text-left">{customer.contactMobile}</td>
              <td className="py-3 px-6 text-left">
                {customer.otherContacts.map((contact, index) => (
                  <div key={index}>
                    <span>{contact.name}</span> (<span>{contact.email}</span>, <span>{contact.phone}</span>)
                  </div>
                ))}
              </td>
              <td className="py-3 px-6 text-left">{customer.externalCustomerId}</td>
              <td className="py-3 px-6 text-left">{customer.externalCustomerInfoId}</td>
              <td className="py-3 px-6 text-left">{customer.memo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CRM;
