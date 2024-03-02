import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import DataFeedItem from "./DataFeedItem";
import { DataFeedDivider } from "./DataFeedDivider";
import { DataFeedItemProps } from "./DataFeedItem";

const VT_PUBLIC_DATAFEED_URL = 'https://data.vermont.gov/api/catalog/v1?domains=data.vermont.gov';

interface DataFeedProps {
    searchQuery: string;
    onItemClick: (itemLink: string) => void;
}

const DataFeed = ({ searchQuery, onItemClick }: DataFeedProps) => {
    const [data, setData] = useState<{ results: Array<DataFeedItemProps> } | null>(null)

    const fetchData = useMemo(() => fetch(VT_PUBLIC_DATAFEED_URL)
        .then((response) => response.json())
        .catch((error) => console.error(error)), []);

    useEffect(() => {
        fetchData.then((json) => {
            setData(json);
        });
    }, [fetchData]);

    if (!data) {
        return (
            <View>
                <View style={{ "flex": 1, alignItems: 'center' }}>
                    <Text style={{ color: "#fff" }}>Loading...</Text>
                </View>
            </View>
        );
    }

    const filteredData = data.results.filter(item => item.resource?.name?.includes(searchQuery)).slice(0, 100);

    return (
        <View style={{ flex: 1, marginBottom: 24 }}>
            <FlatList
                style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10 }}
                data={filteredData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <DataFeedItem item={item} onItemClick={onItemClick} />}
                ItemSeparatorComponent={DataFeedDivider}
            />
        </View>
    );
}

export default DataFeed