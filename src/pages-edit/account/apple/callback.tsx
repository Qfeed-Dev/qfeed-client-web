"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "src/hooks/account/useAuth";

const AppleLoginCallback = () => {
    const pathname = usePathname();
    const { appleMutation } = useAuth();

    useEffect(() => {
        if (pathname) {
            const id_token = pathname.split("&")[2].split("id_token=")[1];
            appleMutation.mutate(id_token);
        }
    }, [pathname]);

    return <></>;
};

export default AppleLoginCallback;
