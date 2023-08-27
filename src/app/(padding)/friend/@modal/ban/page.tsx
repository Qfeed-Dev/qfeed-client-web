"use client";

import Modal from "src/components/common/Modal";
import { useRouter } from "next/navigation";

export default function AccountCheckModal() {
    const router = useRouter();

    return (
        <Modal
            handleClose={() => router.back()}
            title="차단하시겠어요?"
            detail="쪽지 수신 및 발신이 모두 차단되며, 다시 해제하실 수 없습니다."
            rightText="차단"
            rightClick={() => {}}
        />
    );
}
