import React from 'react';
import {View, Image, TextInput} from 'react-native';

const SearchFeature = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          marginHorizontal: 17,
          paddingTop: 15,
          flexDirection: 'row',
        }}>
        <View style={{position: 'relative', flex: 1}}>
          <TextInput
            placeholder="What do you want to eat ?"
            style={{
              borderWidth: 1,
              borderColor: '#E8E8E8',
              borderRadius: 25,
              height: 40,
              fontSize: 13,
              paddingLeft: 45,
              paddingRight: 20,
              backgroundColor: 'white',
              marginRight: 17,
            }}
          />
          <Image
            source={require('../../../assets/images/icon/search.png')}
            style={{
              position: 'absolute',
              top: 5,
              left: 12,
            }}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('./../../../assets/images/icon/promo.png')}
            style={{
              width: 35,
              backgroundColor: 'gray',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchFeature;
