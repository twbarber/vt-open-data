import React from 'react';
import {View, Image, Text} from 'react-native';
import VermontBit from '../../assets/vermont-bit.png';

const Footer = () => {
    return (
        <View style={{ alignItems: 'center'}}>
            <Image source={VermontBit} style={{width: 32, height: 32}} />
        </View>
    );
};

export default Footer;