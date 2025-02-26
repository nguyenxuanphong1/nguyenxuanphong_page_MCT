import "../App.css";
function Footer() {
  return (
    <footer>
      <div className="container">
      <div className="row footer-Information">
        <div className="col-12 col-lg-3 col-xl-4 footer-Information-right">
          <div className="logo">
              <img src="Logo.png" alt="Logo" width="192px" height="94px" />
          </div>
          <div className="footer-contact">
            <p>Công ty TNHH Yotech Việt Nam</p>
            <div className="footer-contact1">
              <div>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <span>68 Nguyễn Cơ Thạch, Mỹ Đình, Nam Từ Liêm, Hà Nội</span>
              </div>
            </div>
            <div className="footer-contact1">
              <div>
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <span>033 6969 124</span>
              </div>
            </div>
            <div className="footer-contact1">
              <div>
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <span>yotech@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-xl-2 footer-Information-middle">
          <div>
            <a href="">Câu chuyện MCT</a>
          </div>
          <div>
            <a href="">Câu hỏi thường gặp</a>
          </div>
          <div>
            <a href="">Hướng dẫn sử dụng</a>
          </div>
          <div>
            <a href="">Hướng dẫn thanh toán</a>
          </div>
          <div>
            <a href="">Chính sách bảo mật</a>
          </div>
          <div>
            <a href="">Gửi phản hồi</a>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-xl-3 footer-Information-left">
          <div className="icon-facebook">
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className="icon-youtube">
            <i className="fab fa-youtube"></i>
          </div>
          <div className="icon-tiktok">
            <i className="fab fa-tiktok"></i>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <span>Copyright © 2023 www.mct.vn</span>
      </div>
      </div>
      
    </footer>
  );
}
export default Footer;