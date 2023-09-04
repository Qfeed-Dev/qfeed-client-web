"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import accountAPI from "src/apis/account";
import { Route } from "src/constants/Route";
import { useAuth } from "src/hooks/account/useAuth";
import { setAccessToken } from "src/utils/cookie";

const AppleLoginCallback = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const id_token = searchParams.get("id_token");
    const { appleMutation } = useAuth();

    useEffect(() => {
        if (id_token) {
            appleMutation.mutate({
                identityToken: id_token,
                name: ""
            });
        }
    }, [id_token]);

    return <></>;
};

export default AppleLoginCallback;
