import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';

// Atom
import GarisAbu from './../../../components/atoms/GarisAbu';

// Molecules
import SearchFeature from './../../../components/molecules/SearchFeature';
import GoNews from './../../../components/molecules/GoNews';
import GoBanner from './../../../components/molecules/GoBanner';
import GoInfo from './../../../components/molecules/GoInfo';

// Containers
import NavBar from './../../../containers/organisms/NavBar';
import ScrollableProduct from './../../../containers/organisms/ScrollableProduct';
import HomeMainFeature from './../../../containers/organisms/HomeMainFeature';
import HomeGopay from './../../../containers/organisms/HomeGopay';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView style={{flex: 1}}>
          <SearchFeature />
          <HomeGopay />
          <HomeMainFeature />
          <GarisAbu />
          <GoNews
            onPress={() => this.props.navigation.navigate('NewsDetail')}
          />
          <GoInfo />
          <GoBanner />
          <ScrollableProduct />
        </ScrollView>
        <NavBar />
      </View>
    );
  }
}

export default Home;
