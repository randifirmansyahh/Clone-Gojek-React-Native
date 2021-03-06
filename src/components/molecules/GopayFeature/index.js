import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

const GopayFeature = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{flex: 1, alignItems: 'center'}}>
      <Image source={props.img} />
      <Text
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          marginTop: 7,
          color: 'white',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default GopayFeature;
