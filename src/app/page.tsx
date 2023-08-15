"use client";

import Home from "src/pages-edit/home/Home";
import SignIn from "src/pages-edit/sign-up/default";
import { useRouter } from "next/navigation";
import { useUserQuery } from "src/hooks/account/useUserQuery";

export default function Page() {
    const { user, isLoading } = useUserQuery();
    const router = useRouter();

    return isLoading ? (
        <>loading</>
    ) : user?.name && user?.schoolType ? (
        <Home />
    ) : (
        <SignIn />
    );
}
