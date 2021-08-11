import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const GoNews = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{paddingTop: 16, paddingHorizontal: 16}}>
      <View>
        <Image
          source={require('../../../assets/images/dummy/sepak-bola.jpg')}
          style={{height: 170, width: '100%', borderRadius: 8}}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'black',
            opacity: 0.2,
            borderRadius: 8,
          }}></View>
        <View
          style={{
            height: 15,
            width: 55,
            position: 'absolute',
            top: 10,
            left: 16,
          }}>
          {/* harusnya image tapi nge close mulu */}
          <Text style={{color: 'white', fontWeight: 'bold'}}>GOJEK</Text>
        </View>
      </View>
      <View
        style={{
          paddingTop: 16,
          paddingBottom: 20,
          borderBottomColor: '#e8e9ed',
          borderBottomWidth: 1,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>
          GO-NEWS
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'normal',
            color: '#7a7a7a',
            marginTop: 4,
          }}>
          Dimas Drajat selamatkan pinalti, Timnas U-23 Kalah atas tingkok bun
          bego ga bisa main bola parah
        </Text>
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: '#51a756',
            borderRadius: 4,
            alignSelf: 'flex-end',
            marginTop: 16,
          }}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              color: 'white',
              paddingHorizontal: 12,
              paddingVertical: 11,
              textAlign: 'center',
            }}>
            READ
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default GoNews;
