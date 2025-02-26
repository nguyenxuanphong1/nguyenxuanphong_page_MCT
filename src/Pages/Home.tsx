import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {

  const [openContent, setOpenContent] = useState(null);

  const toggleContent = useCallback((id) => {
    setOpenContent((prev) => (prev === id ? null : id));
  }, []);

  const navigate = useNavigate(); 
  const handleStart = () => {
    navigate("/Api"); 
  };

  const contentDetails = {
    content1: [
      "Học phí rẻ hơn so với các lớp học truyền thống",
      "Dễ dàng tiếp cận từ bất cứ đâu với internet",
      "Hỗ trợ nhiều hình thức thanh toán tiện lợi",
    ],
    content2: [
      "Bao gồm nhiều chủ đề từ cơ bản đến nâng cao",
      "Bài học được thiết kế sinh động, hấp dẫn",
      "Có nhiều bài tập thực hành và câu đố vui",
    ],
    content3: [
      "AI giúp cá nhân hóa nội dung phù hợp với từng học sinh",
      "Gợi ý bài học dựa trên tiến độ học tập",
      "Đánh giá năng lực và đề xuất nội dung phù hợp",
    ],
    content4: [
      "Báo cáo chi tiết giúp phụ huynh theo dõi tiến độ",
      "Công cụ hỗ trợ giáo viên tạo bài giảng",
      "Chế độ giám sát giúp đảm bảo hiệu quả học tập",
    ],
    content5: [
      "Cho phép tạo đề thi theo nhiều cấp độ",
      "Ngân hàng câu hỏi đa dạng và phong phú",
      "Chấm điểm tự động và cung cấp phản hồi chi tiết",
    ],
    content6: [
      "Dùng thử các tính năng VIP mà không mất phí",
      "Trải nghiệm giao diện và công cụ nâng cao",
      "Tối ưu hóa hiệu suất học tập với các chức năng đặc biệt",
    ],
  };

  return (
    <div>
      <div className="row">
        <div className="col-12 banner">
          <img src="Baner.jpg" alt="Banner" />
        </div>
      </div>

      <div className="row">
        <div className="col-12 banner_text">
          <h2 className="text-home-tittle">Math Competitive Training</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          <button onClick={handleStart}>Bắt Đầu Ngay!</button>
        </div>
      </div>

      <div className="container body-wrapper">
        <div className="row">
          <div className="col-12 body-tillte">
            <h3>Phương Pháp Học Tập</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6 img-body">
            <img src="body-img.png" alt="Phương pháp học tập" />
          </div>

          <div className="col-12 col-lg-6 body-mct-text">
            {Object.keys(contentDetails).map((id) => (
              <div key={id} className="row">
                <div className="action-contents1" onClick={() => toggleContent(id)} style={{ cursor: "pointer" }}>
                  <div className="content">
                    <p><i className="fa-solid fa-check-double"></i>{contentDetails[id][0]}</p>
                  </div>

                  {/* Icon điều hướng */}
                  <div className="chevron-icons">
                    <i className={`fas fa-chevron-up ${openContent === id ? "" : "d-none"}`}></i>
                    <i className={`fas fa-chevron-down ${openContent === id ? "d-none" : ""}`}></i>
                  </div>
                </div>

                {/* Nội dung chi tiết */}
                <div className={`collapse ${openContent === id ? "show" : ""}`}>
                  <ul>
                    {contentDetails[id].map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
