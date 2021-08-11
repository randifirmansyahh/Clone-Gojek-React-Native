import React from 'react';
import {Text, View, Button} from 'react-native';
import Navbar from './../../../containers/organisms/NavBar';

const Orders = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>Halaman Orders</Text>
        <Button title="Go to detail" onPress={() => alert('go to detail')} />
      </View>
      <Navbar />
    </View>
  );
};

export default Orders;
