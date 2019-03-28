/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { ScrollView, StatusBar, Image, Platform } from 'react-native';
import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = "#868686";
const ICON_SIZE = 18;
//<Ionicons name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />
class Options extends Component {
    handleThemesPress = () => {

    }
    handleSitePress = () => {

    }

    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default"></StatusBar>
                <ListItem 
                    text="Themes"
                    onPress={this.handleThemesPress}
                    customIcon={
                        <Image style={{ width: ICON_SIZE }} resizeMode="contain" source={require('../components/List/images/right-arrow.png')} />
                    }
                />
                <Separator />
                <ListItem 
                    text="Fixer.io"
                    onPress={this.handleSitePress}
                    customIcon={
                        <Image style={{ width: ICON_SIZE }} resizeMode="contain" source={require('../components/List/images/link.png')} />
                    }
                />
                 <Separator />
            </ScrollView>
        );
    }
}

export default Options;