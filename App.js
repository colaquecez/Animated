import React, {useState} from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function App() {
  const [buttonSize] = useState(new Animated.Value(1));
  const [mode] = useState(new Animated.Value(0));
  function teste() {
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.95,
        duration: 200,
      }),
      Animated.timing(buttonSize, {
        toValue: 1,
      }),
      Animated.timing(mode, {
        toValue: mode._value === 0 ? 1 : 0,
      }),
    ]).start();
  }

  const rotation = mode.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  const top = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 160],
  });

  const sizeStyle = {
    transform: [{scale: buttonSize}],
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          position: 'absolute',
          width: 30,
          height: 30,
          top: top,
          backgroundColor: 'blue',
          borderRadius: 15,
        }}
      />

      <Animated.View
        style={[
          {
            width: 76,
            height: 76,
            borderRadius: 38,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          },
          sizeStyle,
        ]}>
        <TouchableOpacity onPress={teste}>
          <Animated.View
            style={{
              transform: [{rotate: rotation}],
            }}>
            <Icon name="add" size={50} color="white" />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
