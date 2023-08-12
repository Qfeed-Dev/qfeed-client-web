import { useState, useEffect } from "react";

export const useSelect = (initialState?: string) => {
    const [value, setValue] = useState<string>(initialState || "");
    useEffect(() => setValue(initialState || ""), [initialState]);

    const handleSelect = (event: any) => {
        setValue(event);
    };
    return { value, handleSelect };
};
