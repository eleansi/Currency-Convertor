/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable padded-blocks */
/* eslint-disable keyword-spacing */
/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  View, Text, Keyboard, Animated, StyleSheet, Platform
} from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 350;

class Logo extends Component {

  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }

  componentDidMount() {
    // Those two listeners are only for iOS and we should check conditionally if it's 
    // Android and change listener name to 'keyboardDidShow' and 'keyboardDidHide'
    let showListener = 'keyboardWillShow';
    let hideListener = 'keyboardWillHide';
    if(Platform.OS === 'android') {
      showListener = 'keyboardDidShow';
      hideListener = 'keyboardDidHide';
    }

    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, { 
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION
      }).start(),
      Animated.timing(this.imageWidth, { 
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION
      }).start()
    ]).start();
  }

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, { 
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION
      }).start(),
      Animated.timing(this.imageWidth, { 
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION
      }).start()
    ]).start();
  }

  render() {

    const containerImageStyles = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth }
    ];

    const imageStyles = [
      styles.logo,
      { width: this.imageWidth }
    ];

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyles}>
          <Animated.Image
            resizeMode="contain"
            style={[StyleSheet.absoluteFill, containerImageStyles]}
            source={require('./images/background.png')}
          />
          <Animated.Image
            resizeMode="contain"
            style={imageStyles}
            source={require('./images/logo.png')}
          />
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
