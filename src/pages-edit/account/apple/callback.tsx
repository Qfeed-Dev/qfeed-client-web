"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "src/hooks/account/useAuth";

const AppleLoginCallback = () => {
    const url = window.location.hash;
    const { appleMutation } = useAuth();

    useEffect(() => {
        if (url) {
            const id_token = url.split("id_token=")?.[1];
            appleMutation.mutate(id_token);
        }
    }, [url]);

    return <></>;
};

export default AppleLoginCallback;
