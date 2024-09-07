"use client";

import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";
import { useState } from "react";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a file to upload.");
      return;
    }

    setUploading(true);
    setError(null);
    setSuccessMessage(null);

    const { data, error } = await supabase.storage
      .from("imageTest")
      .upload(`public/${selectedFile.name}`, selectedFile);

    setUploading(false);
    if (error) {
      setError("Error uploading file: " + error.message);
    } else {
      setSuccessMessage("File uploaded successfully.");
      const publicURL = supabase.storage
        .from("imageTest")
        .getPublicUrl(`public/${selectedFile.name}`).data.publicUrl;
      setUploadedFiles([...uploadedFiles, publicURL]);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="border border-dashed border-g1"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {uploadedFiles.map((file, index) => (
        <div key={index}>
          <Image
            className="flex flex-wrap justify-center text-center"
            src={file}
            width={200}
            height={200}
            alt={`Uploaded ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Upload;
