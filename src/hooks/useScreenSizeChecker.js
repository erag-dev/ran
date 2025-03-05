
import { useEffect, useState } from "react";

const useScreenSizeChecker = (size) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            if(window.innerWidth <= size) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
        
        window.addEventListener("resize", handleResize);
        handleResize();
        
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
}

export default useScreenSizeChecker;