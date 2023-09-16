import axios from "axios";

const schoolAPI = {
    async getSchoolName(word: string) {
        const response = await axios.get(
            "https://open.neis.go.kr/hub/schoolInfo",
            {
                params: {
                    KEY: process.env.SCHOOL_API_KEY,
                    Type: "json",
                    pIndex: 1,
                    pSize: 20,
                    SCHUL_NM: word
                }
            }
        );
        return response.data;
    }
    // async getUnivName(word: string) {
    //     const response = await defaultAxios.get("/account/apple/login", {
    //         params: {
    //             idToken: id_token
    //         }
    //     });
    //     return response.data;
    // }
};

export default schoolAPI;
