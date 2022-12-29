import { client } from "../../client";
import { useState,useEffect } from "react";
export const useSanityFetch = (query) => {
    const [fetchedData, setFetchedData] = useState();
    useEffect(() => {
        client.fetch(query).then((data) => setFetchedData(data));
    }, []);
    return [fetchedData];
};
