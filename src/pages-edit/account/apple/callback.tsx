"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "src/hooks/account/useAuth";

const AppleLoginCallback = () => {
    const pathname = usePathname();
    const { appleMutation } = useAuth();

    useEffect(() => {
        console.log(pathname);
        if (pathname) {
            console.log(pathname);
            const id_token = pathname.split("&")[2].split("id_token=")[1];
            console.log(id_token);
            appleMutation.mutate(id_token);
        }
    }, [pathname]);

    return <></>;
};

export default AppleLoginCallback;
