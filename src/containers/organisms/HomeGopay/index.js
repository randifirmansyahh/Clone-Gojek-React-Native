import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import GopayFeature from './../../../components/molecules/GopayFeature';
import {withNavigation} from 'react-navigation';

class HomeGopay extends Component {
  render() {
    return (
      <View style={{marginHorizontal: 17}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#2c5fB8',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            padding: 14,
            marginTop: 8,
          }}>
          <Image source={require('./../../../assets/images/icon/gopay.png')} />
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
            Rp 50.000
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 20,
            paddingBottom: 14,
            backgroundColor: '#2f65BD',
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
          }}>
          <GopayFeature
            onPress={() => this.props.navigation.navigate('ScanQRCode')}
            title="Pay"
            img={require('./../../../assets/images/icon/pay.png')}
          />
          <GopayFeature
            onPress={() => this.props.navigation.navigate('')}
            title="NearBy"
            img={require('./../../../assets/images/icon/nearby.png')}
          />
          <GopayFeature
            onPress={() => this.props.navigation.navigate('')}
            title="Top Up"
            img={require('./../../../assets/images/icon/topup.png')}
          />
          <GopayFeature
            onPress={() => this.props.navigation.navigate('')}
            title="More"
            img={require('./../../../assets/images/icon/more.png')}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(HomeGopay);
