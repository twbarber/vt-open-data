import {StyleSheet, Text, View} from "react-native";

const Header = () => {
    const styles = StyleSheet.create({
        header: {
            backgroundColor: '#006937',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 15,
            paddingBottom: 15
        },
        title: {
            fontWeight: 'bold',
            fontSize: 24,
            color: 'white'
        }
    });

    return (
        // Moving inline styles into StyleSheet
        <View style={styles.header}>
            <Text style={styles.title}>Vermont Open Data Explorer</Text>
        </View>
    );
};

export default Header