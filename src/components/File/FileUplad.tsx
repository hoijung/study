import React, { useState } from "react";
import getSeverIp from "utils/getSeverIp";
import getSeverIpFun from "utils/getSeverIpFun";


const serverIp = getSeverIp();

console.log("server=> " + serverIp)

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");

  // 파일 선택 핸들러
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  // 업로드 핸들러
  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert("파일을 선택해주세요!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch(`${serverIp}/upload`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("업로드 성공!");
      } else {
        setUploadStatus("업로드 실패!");
      }
    } catch (error) {
      console.error("업로드 에러:", error);
      setUploadStatus("업로드 중 오류가 발생했습니다.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React 파일 업로드</h2>
      <input type="file" onChange={handleFileChange} title="t" />
      <button onClick={handleFileUpload} style={{ marginLeft: "10px" }}>
        업로드
      </button>
      <div style={{ marginTop: "10px" }}>
        {selectedFile && <p>선택된 파일: {selectedFile.name}</p>}
        {uploadStatus && <p>{uploadStatus}</p>}
      </div>
    </div>
  );
};

export default FileUpload;
