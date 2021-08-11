import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const NavBarIcon = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image style={{height: 26, width: 26}} source={props.img}></Image>
      <Text
        style={{
          fontSize: 10,
          color: props.active ? '#43AB4A' : '#545454',
          marginTop: 4,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default NavBarIcon;
