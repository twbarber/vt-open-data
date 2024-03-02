import React, { useEffect, useState } from 'react';
import JSONTree from 'react-native-json-tree';

const CSVTable = ({ url }: { url: string }) => {
    const [jsonData, setJsonData] = useState(null);

    const theme = {
        "scheme": "Vermont",
        "author": "twbarber",
        "base00": "#000000",
        "base01": "#1D2021",
        "base02": "#32302F",
        "base03": "#504945",
        "base04": "#665C54",
        "base05": "#7C6F64",
        "base06": "#928374",
        "base07": "#A89984",
        "base08": "#FB543F",
        "base09": "#FE8625",
        "base0A": "#FAC03B",
        "base0B": "#006937",
        "base0C": "#8BA59B",
        "base0D": "#0D6678",
        "base0E": "#8F4673",
        "base0F": "#A87322"
    }

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setJsonData(data);
            })
            .catch(error => console.error(error));
    }, [url]);

    return (
        <>
            {jsonData && <JSONTree data={jsonData} theme={theme} />}
        </>
    );
};

export default CSVTable;