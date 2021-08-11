import React, {Component} from 'react';
import {View} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';
import {withNavigation} from 'react-navigation';

class NavBar extends Component {
  render() {
    return (
      <View
        style={{
          height: 54,
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        {/* Start NavBarIcon */}

        <NavBarIcon
          onPress={() => this.props.navigation.navigate('Home')}
          title="Home"
          img={require('./../../../assets/images/icon/home-active.png')}
          active
        />
        <NavBarIcon
          onPress={() => this.props.navigation.navigate('Orders')}
          title="Orders"
          img={require('./../../../assets/images/icon/order.png')}
        />
        <NavBarIcon
          onPress={() => this.props.navigation.navigate('')}
          title="Help"
          img={require('./../../../assets/images/icon/help.png')}
        />
        <NavBarIcon
          onPress={() => this.props.navigation.navigate('')}
          title="Inbox"
          img={require('./../../../assets/images/icon/inbox.png')}
        />
        <NavBarIcon
          onPress={() => this.props.navigation.navigate('')}
          title="Account"
          img={require('./../../../assets/images/icon/account.png')}
        />

        {/* End NavBarIcon */}
      </View>
    );
  }
}

export default withNavigation(NavBar);
