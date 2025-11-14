import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        let cancel = false;
        setLoading(true);

        fetch(url)
            .then((res) => res.json())
            .then((data) => !cancel && setData(data))
            .catch((err) => !cancel && setError(err))
            .finally(() => !cancel && setLoading(false));

        return () => {
            cancel = true;
        };
    }, [url]);

    return { data, loading, error };
}

export default useFetch;