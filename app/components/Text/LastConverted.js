/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-deprecated */
/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
// eslint-disable-next-line linebreak-style
import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';
import styles from './styles';

const LastConverted = ({ base, quote, conversionRate, date }) => (
    <Text style={styles.smallText}>
        1 {base} = {conversionRate} {quote} as of {moment(date).format("MMMM D, YYYY")}
    </Text>
);

LastConverted.propTypes = {
    date: PropTypes.object,
    base: PropTypes.string,
    quote: PropTypes.string,
    conversionRate: PropTypes.number
};

export default LastConverted;