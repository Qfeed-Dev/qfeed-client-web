import axios from "axios";

const schoolAPI = {
    async getSchoolName(word: string) {
        const response = await axios.get(
            "https://open.neis.go.kr/hub/schoolInfo",
            {
                params: {
                    KEY: process.env.NEXT_PUBLIC_SCHOOL_API_KEY,
                    Type: "json",
                    pIndex: 1,
                    pSize: 20,
                    SCHUL_NM: word
                }
            }
        );
        return response.data;
    },
    async getUnivName(word: string) {
        const response = await axios.get(
            "https://www.career.go.kr/cnet/openapi/getOpenApi",
            {
                params: {
                    apiKey: process.env.NEXT_PUBLIC_UNIV_API_KEY,
                    svcType: "api",
                    svcCode: "SCHOOL",
                    contentType: "json",
                    gubun: "univ_list",
                    searchSchulNm: word
                }
            }
        );
        return response.data;
    }
};

export default schoolAPI;
