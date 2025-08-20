import { useEffect } from "react"

const usePageTitle = (title) => {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = `${title} | RAN Online EP.7`;

        return () => {
            document.title = `${prevTitle} | RAN Online EP.7`;
        };

    }, [title]);

    return <></>
}

export default usePageTitle;