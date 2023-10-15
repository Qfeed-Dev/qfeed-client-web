"use client";

import Modal from "src/components/common/Modal";
import { useRouter } from "next/navigation";
import useUnBlockFriendMutation from "src/hooks/account/useUnBlockFriendMutation";

export default function UnBlockModal({ params }: { params: { id: number } }) {
    const router = useRouter();
    const unblockFriend = useUnBlockFriendMutation();

    return (
        <Modal
            handleClose={() => router.back()}
            title="차단을 해제하시겠어요?"
            detail="쪽지 수신 및 발신이 모두 가능해집니다."
            rightText="차단 해제"
            rightClick={() => {
                unblockFriend.mutate(params.id);
            }}
        />
    );
}
