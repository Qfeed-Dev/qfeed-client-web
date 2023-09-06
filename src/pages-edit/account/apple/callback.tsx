"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "src/hooks/account/useAuth";

const AppleLoginCallback = () => {
    const pathname = usePathname();
    const { appleMutation } = useAuth();
    const id_token = pathname.split("&")[2].split("id_token=")[1];

    useEffect(() => {
        if (id_token) {
            appleMutation.mutate(id_token);
        }
    }, [id_token]);

    return <></>;
};

export default AppleLoginCallback;
