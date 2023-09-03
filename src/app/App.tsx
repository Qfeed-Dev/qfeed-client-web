"use client";
import StyledComponentsRegistry from "../lib/registry";
import Layout from "src/components/layout/Layout";
import { useAppSelector } from "src/hooks/useReduxHooks";
import BottomSheet from "src/components/BottomSheet";

export default function App({ children }: { children: React.ReactNode }) {
    const { visible } = useAppSelector((state) => state.bottomSheet);

    const preventZoom = (event: TouchEvent) => {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    };
    document.addEventListener("touchmove", preventZoom, { passive: false });

    return (
        <StyledComponentsRegistry>
            <>
                <Layout>{children}</Layout>
                {visible ? <BottomSheet /> : null}
            </>
        </StyledComponentsRegistry>
    );
}
