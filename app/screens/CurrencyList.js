/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable keyword-spacing */
/* eslint-disable indent */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, Text, FlatList } from 'react-native';
import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    };

    renderSeparator = () => {
        return (<Separator />);
    }

    handlePress = () => {
        console.log("row pressed");
        this.props.navigation.goBack();
    }

    render() {
        return(
            <View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="default" />
                <FlatList 
                    data={currencies}
                    renderItem={({ item }) => 
                        <ListItem 
                            text={item}
                            selected={item === TEMP_CURRENT_CURRENCY} 
                            onPress={this.handlePress}   
                        />}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        );
    }
}

export default CurrencyList;