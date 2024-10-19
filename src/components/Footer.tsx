import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2024 ZohoLike App. All rights reserved.</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-300">プライバシーポリシー</a></li>
            <li><a href="#" className="hover:text-blue-300">利用規約</a></li>
            <li><a href="#" className="hover:text-blue-300">お問い合わせ</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;