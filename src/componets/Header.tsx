import '../App.css';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="row mt-3 align-items-center">
          {/* Logo và Navigation cho Desktop */}
          <div className="col-md-8 col-12">
            <div className="row align-items-center">
              <div className="col-4 col-md-3">
                <img src="Logo.png" alt="Logo" className="logo" />
              </div>
              {/* Navigation hiển thị trên desktop */}
              <div className="col-8 col-md-9 d-none d-md-block nav">
                <ul>
                  <li>Trang Chủ</li>
                  <li>Về Chúng Tôi</li>
                  <li>Blog</li>
                  <li>Tuyển Dụng</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Nút Đăng Nhập & Đăng Ký cho Desktop */}
          <div className="col-md-4 d-none d-md-flex header-lg justify-content-end">
            <button className="btn-login">Đăng Nhập</button>
            <button className="btn-register">Đăng Ký</button>
          </div>
        </div>
      </div>

      {/* Icon Menu (chỉ hiển thị trên mobile) */}
      <div className="menu-icon-container d-md-none">
        {isOpen ? (
          <FaTimes size={24} onClick={() => setIsOpen(false)} className="menu-icon" />
        ) : (
          <FaBars size={24} onClick={() => setIsOpen(true)} className="menu-icon" />
        )}
      </div>

      {/* Mobile Menu: bao gồm Navigation và nút Đăng Nhập/Đăng Ký */}
      {isOpen && (
        <div className="mobile-menu">
          <ul>
            <li>Trang Chủ</li>
            <li>Về Chúng Tôi</li>
            <li>Blog</li>
            <li>Tuyển Dụng</li>
            <li>Đăng Nhập</li>
            <li>Đăng Ký</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
