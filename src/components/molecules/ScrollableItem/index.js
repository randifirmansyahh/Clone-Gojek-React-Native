import React from 'react';
import {View, Text, Image} from 'react-native';

const ScrollableItem = props => {
  return (
    <View style={{marginRight: 16}}>
      <View style={{width: 150, height: 150}}>
        <Image
          source={props.img}
          style={{
            flex: 1,
            height: undefined,
            width: undefined,
            resizeMode: 'cover',
            borderRadius: 10,
            marginTop: 12,
          }}
        />
      </View>
      <Text style={{marginTop: 12}}>{props.title}</Text>
    </View>
  );
};

export default ScrollableItem;
