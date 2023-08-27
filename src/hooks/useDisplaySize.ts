import { useEffect, useState } from "react";

export default function useDisplaySize() {
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    const handleResize = () => {
        setWidth(window.innerWidth > 820 ? 600 : window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        setWidth(window.innerWidth > 820 ? 600 : window.innerWidth);
        setHeight(window.innerHeight);

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { width, height };
}
