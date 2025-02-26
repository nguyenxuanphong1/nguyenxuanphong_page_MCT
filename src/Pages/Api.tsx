import { useState } from "react";

interface Competition {
  id: number;
  code: string;
  name: string;
  org: string;
  logoImage: string;
  orgLink: string;
  scope: string;
  difficultLevel: number;
  popular: string;
  registerLink: string;
  classMin: number;
  classMax: number;
  roundCount: number;
}

function Api() {
  const [id, setId] = useState<string>("");
  const [data, setData] = useState<Competition | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCompetitionById = async () => {
    if (!id) {
      setError("Vui lòng nhập ID!");
      return;
    }

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch("https://mct.finbox.vn/api/competitions");
      if (!response.ok) {
        throw new Error("Không thể lấy dữ liệu từ API!");
      }

      const result = await response.json();
      
      if (result.status !== 200 || !result.data?.competition) {
        throw new Error(result.message || "Không tìm thấy dữ liệu!");
      }

      const competition = result.data.competition[id];
      if (!competition) {
        throw new Error("Không tìm thấy cuộc thi với ID này!");
      }

      setData(competition);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container api-text">
      <h1>Tìm kiếm cuộc thi theo ID</h1>
      <input
        type="text"
        placeholder="Nhập ID cuộc thi..."
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={fetchCompetitionById}>Tìm kiếm</button>

      {loading && <p>Đang tải dữ liệu...</p>}
      {error && <p style={{ color: "red" }}>Lỗi: {error}</p>}

      {data && (
        <div>
          <h2>{data.name}</h2>
          <p><strong>Code:</strong> {data.code}</p>
          <p><strong>Tổ chức:</strong> {data.org}</p>
          <p><strong>Phạm vi:</strong> {data.scope}</p>
          <p><strong>Mức độ khó:</strong> {data.difficultLevel}</p>
          <p><strong>Độ phổ biến:</strong> {data.popular}</p>
          <p><strong>Đăng ký:</strong> <a href={data.registerLink} target="_blank" rel="noopener noreferrer">Tại đây</a></p>
          <img src={data.logoImage} alt={data.name} style={{ width: "150px", height: "auto" }} />
        </div>
      )}
    </div>
  );
}

export default Api;
