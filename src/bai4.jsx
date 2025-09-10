import React, { useState } from "react";

// Component thẻ sinh viên
function StudentCard({ name, age, className }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "15px", borderRadius: "8px" }}>
      <h2>{name}</h2>
      <button onClick={() => setShowDetail(!showDetail)}>
        {showDetail ? "Ẩn chi tiết" : "Xem chi tiết"}
      </button>
      {showDetail && (
        <p>Tuổi: {age} - Lớp: {className}</p>
      )}
    </div>
  );
}

// Component chính
function App() {
  const students = [
    { name: "Nguyễn Văn A", age: 20, className: "CNTT1" },
    { name: "Trần Thị B", age: 21, className: "CNTT2" },
    { name: "Lê Văn C", age: 19, className: "CNTT3" },
  ];

  return (
    <div>
      <h1>Bài 4: Thẻ thông tin sinh viên</h1>
      {students.map((s, index) => (
        <StudentCard
          key={index}
          name={s.name}
          age={s.age}
          className={s.className}
        />
      ))}
    </div>
  );
}

export default App;
