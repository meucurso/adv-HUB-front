import { useState } from "react";

export function usePagina1Model() {
    const [count, setCount] = useState(0)

    const handleCounter = () => {
        setCount((prev) => prev +1)
    }

    return {
        count,
        handleCounter
    }
}