"use client";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import NavigationTop from "src/components/navigations/navigation-top";

import Text from "src/components/common/Text";
import Flex from "src/components/common/Flex";
import styled from "styled-components";
import { colors } from "styles/theme";
import ButtonFillLarge from "src/components/buttons/button-fill-large";
import { Route } from "src/constants/Route";

const IdCard = () => {
    const router = useRouter();
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [photoData, setPhotoData] = useState<string | null>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);

    useEffect(() => {
        getWebcam((stream: MediaStream) => {
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                setStream(stream);
            }
        });
    }, [photoData]);

    const getWebcam = (callback: (stream: MediaStream) => void) => {
        try {
            const constraints = {
                video: true,
                audio: false
            };
            navigator.mediaDevices.getUserMedia(constraints).then(callback);
        } catch (err) {
            console.log(err);
        }
    };

    const takePhoto = () => {
        if (videoRef.current && canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;

            context?.drawImage(
                videoRef.current,
                0,
                0,
                canvas.width,
                canvas.height
            );

            const photo = canvas.toDataURL("image/png");
            setPhotoData(photo);
        }
    };

    const stopCamera = () => {
        const tracks = stream?.getTracks();
        tracks?.forEach((track) => track.stop());
        router.push(Route.COMPLETE);
    };

    return (
        <Flex height="100%" justify="start" direction="column" gap={40}>
            <NavigationTop
                leftIcon={<div onClick={router.back}>왼</div>}
                title="회원 가입"
            />
            <Flex justify="start" direction="column" gap={16}>
                <Text typo="Subtitle1b">학생증 인증</Text>
                <Card>
                    {photoData ? (
                        <Img src={photoData} alt="Captured" />
                    ) : (
                        <video
                            ref={videoRef}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}
                            autoPlay
                            playsInline
                        />
                    )}
                </Card>
                <canvas ref={canvasRef} style={{ display: "none" }} />
            </Flex>
            {photoData ? (
                <Flex direction="column" gap={16}>
                    <ButtonFillLarge
                        text="다시 촬영하기"
                        onClick={() => setPhotoData(null)}
                        bottom={false}
                    />
                    <ButtonFillLarge
                        text="다음"
                        onClick={stopCamera}
                        bottom={false}
                        state="active"
                    />
                </Flex>
            ) : (
                <>
                    <Text typo="Subtitle2r" color="light_qwhite">
                        영역 안에 학생증이 꽉 차도록 촬영하세요.
                    </Text>
                    <Text typo="Subtitle1r" color="light_gray0">
                        가로로 어두운 배경에서 촬영하세요.
                        <br />빛 반사에 주의하세요.
                    </Text>
                    <PictureButton onClick={takePhoto} />
                </>
            )}
        </Flex>
    );
};

const Card = styled.div`
    width: 100%;
    height: 14rem;

    border-radius: 10px;
    background: ${colors.line_white_30};
    overflow: hidden;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const PictureButton = styled.button`
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background: ${colors.primary_qorange};

    border: 4px solid ${colors.light_qwhite};

    position: absolute;
    bottom: 6.25rem;
`;

export default IdCard;
