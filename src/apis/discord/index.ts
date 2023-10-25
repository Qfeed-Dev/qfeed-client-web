import axios from "axios";

export const sendDiscordMessage = async (message: string) => {
    try {
        const response = await axios.post(
            "https://discord.com/api/webhooks/" +
                process.env.NEXT_PUBLIC_WEBHOOK_URL,
            {
                content: message
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        return response.data;
    } catch (err: any) {
        console.log(err.message);
    }
};
