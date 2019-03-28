/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-quotes */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import Icon from './Icon';
import Separator from './Separator';

// eslint-disable-next-line react/prop-types
const ListItem = ({ 
    text, selected, onPress, checkmark = true, visible = true, customIcon = null, iconBackground,
}) => (  
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>

            <View style={styles.row}>
                <Text style={styles.text}>{text}</Text>
                {selected ? <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground} /> : <Icon />}
                { customIcon }
            </View>

    </TouchableHighlight> 
);

ListItem.propTypes = {
    text: PropTypes.string,
    selected: PropTypes.bool,
    onPress: PropTypes.func,
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    customIcon: PropTypes.element,
    iconBackground: PropTypes.string
};

export default ListItem;