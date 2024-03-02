import {Linking, Text, View} from "react-native";
import Icon from "@expo/vector-icons/Octicons";

export interface DataFeedItemProps {
    link?: string;
    resource?: {
        name?: string;
        id?: string;
    };
}

const DataFeedItem = (
    {item, onItemClick}: { item: DataFeedItemProps, onItemClick: (url: string) => void }
) => {
    const handleButtonClick = () => {
        const url = `https://data.vermont.gov/resource/${item.resource?.id}.json`;
        if (url) {
            onItemClick(url);
        }
    }
    return (
        <View style={{flexDirection: "row", alignItems: "center"}}>
            <Text
                style={{padding: 10, color: "#fff", flex: 1, flexWrap: "wrap"}}
                onPress={handleButtonClick}>
                {item.resource?.name}
            </Text>
            <Icon name="chevron-right" size={14} color="#fff" />
        </View>
    );
}

export default DataFeedItem