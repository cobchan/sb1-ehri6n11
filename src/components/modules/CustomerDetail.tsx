import React from 'react';

interface CustomerDetailProps {
  customer: {
    id: number;
    name: string;
    nameHiragana: string;
    revenue: number;
    contact: string;
    phone: string;
    email: string;
    postalCode: string;
    address: string;
    address2: string;
    department: string;
    position: string;
    contactEmail: string;
    contactPhone: string;
    contactMobile: string;
    otherContacts: { name: string; email: string; phone: string }[];
    externalCustomerId: string;
    externalCustomerInfoId: string;
    memo: string;
  };
  onClose: () => void;
}

const CustomerDetail: React.FC<CustomerDetailProps> = ({ customer, onClose }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">顧客詳細情報</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">顧客名</label>
        <p>{customer.name}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">顧客名（ひらがな）</label>
        <p>{customer.nameHiragana}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">売上</label>
        <p>{customer.revenue.toLocaleString()}円</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">担当者</label>
        <p>{customer.contact}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">電話番号</label>
        <p>{customer.phone}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">メールアドレス</label>
        <p>{customer.email}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">郵便番号</label>
        <p>{customer.postalCode}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">住所</label>
        <p>{customer.address}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">住所２</label>
        <p>{customer.address2}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">担当者所属部署</label>
        <p>{customer.department}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">担当者役職</label>
        <p>{customer.position}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">担当者メールアドレス</label>
        <p>{customer.contactEmail}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">担当者TEL</label>
        <p>{customer.contactPhone}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">担当者TEL（モバイル）</label>
        <p>{customer.contactMobile}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">他の担当者</label>
        {customer.otherContacts.map((contact, index) => (
          <div key={index}>
            <p>{contact.name} (<span>{contact.email}</span>, <span>{contact.phone}</span>)</p>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">外部システムの顧客ID</label>
        <p>{customer.externalCustomerId}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">外部システムの顧客情報ID</label>
        <p>{customer.externalCustomerInfoId}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">メモ</label>
        <p>{customer.memo}</p>
      </div>
      <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded">閉じる</button>
    </div>
  );
};

export default CustomerDetail;
