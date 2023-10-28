"use client";

import Modal from "src/components/common/Modal";
import { useRouter } from "next/navigation";
import useBlockFriendMutation from "src/hooks/account/useBlockFriendMutation";

export default function BlockModal({ params }: { params: { id: number } }) {
    const router = useRouter();
    const blockFriend = useBlockFriendMutation();

    return (
        <Modal
            handleClose={() => router.back()}
            title="차단하시겠어요?"
            detail="해당 유저의 질문을 볼 수 없으며,\n다시 해제하실 수 있습니다."
            rightText="차단"
            rightClick={() => {
                blockFriend.mutate(params.id);
            }}
        />
    );
}
