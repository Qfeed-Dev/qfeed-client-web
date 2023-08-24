"use client";

import Modal from "src/components/common/Modal";
import { useRouter } from "next/navigation";

export default function AccountCheckModal() {
    const router = useRouter();

    return (
        <Modal
            handleClose={() => router.back()}
            detail="QFeed는 실명 기반 어플입니다. 카카오 로그인 시, [전체 동의하기]가 필수입니다."
            rightText="확인"
            rightClick={() =>
                router.push(
                    `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`
                )
            }
        />
    );
}
