/* eslint-disable linebreak-style */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable keyword-spacing */
/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import styles from './styles';

const Icon = ({ checkmark, visible, iconBackground }) => {   
    const iconStyles = [styles.icon]; 
    if(visible) {
        iconStyles.push(styles.iconVisible);
    }

    if(iconBackground) {
        iconStyles.push({ backgroundColor: iconBackground });
    }

    return (
        <View style={iconStyles}>
            { checkmark ? <Image style={styles.check} resizeMode="contain" source={require('./images/check.png')} /> : null }
        </View>
    );
};

Icon.propTypes = {
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    iconBackground: PropTypes.string
}; 

export default Icon;