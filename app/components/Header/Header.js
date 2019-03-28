/* eslint-disable linebreak-style */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const Header = ({ onPress }) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image resizeMode="contain" style={styles.icon} source={require('./images/gear.png')}></Image>
        </TouchableOpacity>
    </View>
);

Header.propTypes = {
    onPress: PropTypes.func
};

export default Header;