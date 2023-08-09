import { useEffect, useState } from "react";

export default function useDisplaySize() {
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        setWidth(window.innerWidth > 600 ? 600 : window.innerWidth);
        setHeight(window.innerHeight);
    }, []);

    return { width, height };
}
