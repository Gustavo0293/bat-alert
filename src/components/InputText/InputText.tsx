import React from 'react';
import { View, TextInput, Text } from 'react-native';

import { styles } from './InputTextStyles';

interface inputText {
    placeholder: string,
    multiline: boolean,
    value: string,
    set: (data: string)=> void
}

export function InputText(props:inputText) {
  return (
    <>
    <Text style={{alignSelf:'flex-start', fontWeight:'bold', fontSize:20}}>{props.placeholder}</Text>
    <TextInput 
    placeholder={props.placeholder}
    multiline={props.multiline}
    onChangeText={(text)=>{
        props.set(text)
    }}
    style={styles.input}
    />
    </>
  );
}