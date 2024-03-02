import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import Header from './data_feed/Header';
import SearchBar from './data_feed/SearchBar';
import DataFeed from './data_feed/DataFeed';
import Footer from './data_feed/Footer';
import CSVTable from "./data_feed/CSVTable";


const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleItemClick = (itemLink: string) => {
        setSelectedItem(itemLink);
    };

    return (
        <PaperProvider>
            <StatusBar style="light" backgroundColor="#006937" />
            <SafeAreaView style={styles.container}>
                <Header/>
                <View style={{flex: 1}}>
                    <SearchBar onSearch={handleSearch}/>
                    {selectedItem ?
                        <CSVTable url={selectedItem} /> :
                        <DataFeed searchQuery={searchQuery} onItemClick={handleItemClick} />}
                </View>
                <Footer/>
            </SafeAreaView>
        </PaperProvider>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#006937',
    },
});

export default Home;