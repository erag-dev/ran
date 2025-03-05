import { useEffect } from "react"

const usePageTitle = (title) => {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = `${title} | Snuggle Seekers`;

        return () => {
            document.title = `${prevTitle} | Snuggle Seekers`;
        };

    }, [title]);

    return <></>
}

export default usePageTitle;