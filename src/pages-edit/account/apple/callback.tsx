"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "src/hooks/account/useAuth";

const AppleLoginCallback = () => {
    const url = window.location.href;
    const { appleMutation } = useAuth();

    useEffect(() => {
        console.log(url);
        if (url) {
            const id_token = url.split("id_token=")?.[1];
            console.log("id_token" + id_token);
            appleMutation.mutate(id_token);
        }
    }, [url]);

    return <></>;
};

export default AppleLoginCallback;
