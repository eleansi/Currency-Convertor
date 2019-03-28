/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';


export default EStyleSheet.create({
    $underlayColor: '$border',
    separator: {
        backgroundColor: '$border',
        height: StyleSheet.hairlineWidth,
        marginLeft: 20,
        flex: 1,
    },
    row: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '$white'
    },
    text: {
        fontSize: 16,
        color: '$darkText'
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconVisible: {
        backgroundColor: '$primaryBlue',
    },
    check: {
        width: 18
    }
    // listItemIcon: {
    //     // alignSelf: 'flex-end',
    //     textAlign: 'left',
    //     width: $defaultWidhtDivByTwo,
    //     paddingVertical: 10,
    //     paddingHorizontal: 30
    // }
});
