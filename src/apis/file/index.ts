import axios from "axios";
import { qFeedAxios } from "../axios";
import { Photo } from "src/models/file";

const fileAPI = {
    async createPresignedURL(photo: Photo) {
        const response = await qFeedAxios.post("/file/presigned-url", {
            ...photo
        });
        return response.data;
    },
    async putPresignedURL(url: string, file: File) {
        const response = await axios.put(url, file, {
            headers: {
                "Content-Type": file.type
            }
        });
        return response.data;
    }
};

export default fileAPI;
