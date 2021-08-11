import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const GoInfo = () => {
  return (
    <View style={{padding: 16}}>
      <View
        style={{
          paddingBottom: 20,
          borderBottomColor: '#e8e9ed',
          borderBottomWidth: 1,
        }}>
        <Image
          source={require('./../../../assets/images/logo/gojek.png')}
          style={{height: 15, width: 60}}
        />
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: '#1c1c1c',
            marginTop: 15,
            marginBottom: 20,
          }}>
          Complite your profile
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              source={require('./../../../assets/images/dummy/facebook-connect.png')}
            />
          </View>
          <View style={{marginLeft: 16, flex: 1}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#4a4a4a',
              }}>
              Connect with Facebook
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'normal',
                color: '#4a4a4a',
              }}>
              Login faster without verification code
            </Text>
          </View>
        </View>
        <TouchableOpacity
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
            CONNECT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoInfo;
