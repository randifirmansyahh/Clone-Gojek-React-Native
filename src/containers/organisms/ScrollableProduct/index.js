import React, {Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import ScrollableItem from './../../../components/molecules/ScrollableItem';

class ScrollableProduct extends Component {
  render() {
    return (
      <View
        style={{
          borderBottomColor: '#e8e9ed',
          borderBottomWidth: 1,
          paddingBottom: 16,
        }}>
        <View style={{padding: 16}}>
          <Image
            source={require('../../../assets/images/logo/go-food.png')}
            style={{height: 15, width: 70}}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                marginTop: 12,
                fontSize: 17,
                fontWeight: 'bold',
                color: '#1c1c1c',
              }}>
              NearBy Restaurant
            </Text>
            <Text
              style={{
                marginTop: 12,
                fontSize: 17,
                fontWeight: 'bold',
                color: '#61a756',
              }}>
              See All
            </Text>
          </View>
        </View>

        {/* Start Scrollable Item */}
        <ScrollView
          horizontal={true}
          style={{flexDirection: 'row', paddingLeft: 16}}>
          <ScrollableItem
            title="KFC"
            img={require('../../../assets/images/dummy/go-food-kfc.jpg')}
          />
          <ScrollableItem
            title="Bakmi"
            img={require('../../../assets/images/dummy/go-food-gm.jpg')}
          />
          <ScrollableItem
            title="Martabak"
            img={require('../../../assets/images/dummy/go-food-orins.jpg')}
          />
          <ScrollableItem
            title="Martabak"
            img={require('../../../assets/images/dummy/go-food-banka.jpg')}
          />
          <ScrollableItem
            title="Ayam Bakar"
            img={require('../../../assets/images/dummy/go-food-pak-boss.jpg')}
          />
        </ScrollView>
        {/* end Scrollable Item */}
      </View>
    );
  }
}

export default ScrollableProduct;
