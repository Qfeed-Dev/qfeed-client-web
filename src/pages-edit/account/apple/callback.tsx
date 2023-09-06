"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "src/hooks/account/useAuth";

const KakaoLoginCallback = () => {
    const searchParams = useSearchParams();
    const id_token = searchParams.get("id_token");
    const { appleMutation } = useAuth();
    console.log(searchParams);

    useEffect(() => {
        console.log(searchParams.get("code"));
        if (id_token) {
            appleMutation.mutate(id_token);
        }
    }, [id_token]);

    return <></>;
};

export default KakaoLoginCallback;
