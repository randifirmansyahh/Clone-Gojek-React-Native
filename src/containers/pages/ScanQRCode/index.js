import React, {PureComponent} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const IconWithText = props => {
  return (
    <View>
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: 'green',
          borderRadius: 60,
        }}
      />
      <Text style={{maxWidth: 70, textAlign: 'center', marginTop: 10}}>
        {props.title}
      </Text>
    </View>
  );
};

const IconAction = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 35,
        height: 35,
        backgroundColor: 'green',
        borderRadius: 35,
      }}
    />
  );
};

class ScanQRCode extends PureComponent {
  state = {
    barcode: 'More Option',
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'gray'}}>
          {/* Start Camera */}
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onBarCodeRead={bar => {
              console.log(bar);
              this.setState({
                barcode: bar.data,
              });
            }}
          />
          {/* End Camera */}
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 16,
              marginTop: 16,
              justifyContent: 'space-between',
            }}>
            <IconAction
              onPress={() => this.props.navigation.navigate('Home')}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 80,
              }}>
              <IconAction />
              <IconAction />
            </View>
          </View>
        </View>
        <View
          style={{
            height: 200,
            backgroundColor: 'white',
            paddingHorizontal: 16,
          }}>
          <View style={{alignItems: 'center', marginTop: 8, marginBottom: 18}}>
            <View
              style={{
                width: 40,
                height: 3,
                backgroundColor: '#e0e0e0',
                marginVertical: 2,
              }}
            />
            <View
              style={{
                width: 40,
                height: 3,
                backgroundColor: '#e0e0e0',
                marginVertical: 2,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
              {`${this.state.barcode}`}
            </Text>
            <Text style={{fontSize: 14, color: '#61a756', fontWeight: 'bold'}}>
              SHORTCUT
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              marginTop: 14,
              width: '100%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                width: 160,
                justifyContent: 'space-between',
                paddingRight: 12,
              }}>
              <IconWithText title="Phone Number" />
              <IconWithText title="Gopay Code" />
            </View>
            <View style={{width: 2, height: 60, backgroundColor: '#e0e0e0'}} />
            <View style={{flex: 1, paddingLeft: 12}}>
              <Text>
                Your recent gopay receivers will show here. No admin fees!
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  preview: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default ScanQRCode;
