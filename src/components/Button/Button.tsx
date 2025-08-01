import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './ButtonStyles';

interface button {
  text: string,
  color: string
}

export function Button(props: button) {
  return (
    <>
        <Text
        style={[styles.button, props.color? {backgroundColor:props.color}:{backgroundColor:"black"}]}
        >
          {props.text || "Clique aqui"}
        </Text>
      </>
  );
}