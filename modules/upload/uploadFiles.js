import axi from "../../apiCalls/back/axios";

const getFiles = () => {
    return axi.get('/files')
}

const upload = (file, onUploadProgress) => {
    let formData = new FormData()
    formData.append("file", file);
    return axi.post("/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
        });
}

export { upload, getFiles }