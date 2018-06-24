import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';

import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import AppHeader from '../components/AppHeader';

const { height, width } = Dimensions.get('window');
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

export default class App extends Component {

  state =
    {
      items: [
        { img: 'http://media.kenanaonline.com/photos/1238044/1238044120/large_1238044120.jpg?1407305902' },
        { img: 'https://www.babnet.net/2b/samakbaltiiii.jpg' },
        { img: 'http://www.vb.6ocity.net/imgcache/12740.imgcache.jpg' },
        { img: 'http://media.kenanaonline.com/photos/1238081/1238081374/gallery_1238081374.jpg?1299732946' },
        { img: 'http://media.kenanaonline.com/photos/1238044/1238044120/large_1238044120.jpg?1407305902' },
      ]
    }
  render() {
    return (
      <View style={styles.container}>
         <AppHeader showBurger title="الرئيسيه"   />
        <View style={{ height: 200, }} >
          <Swiper style={{ height: 200, }} showsButtons >
            {this.state.items.map((item, key) => (
              <FastImage
                style={{ width: '100%', borderRadius: 2, height: '100%', }}
                source={{
                  uri: item.img,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            ))}
          </Swiper>

        </View>
        <Text style={{ fontSize: 17, color: 'black', marginVertical: 20, marginHorizontal: 20, textAlign: 'center' }}> using react-native-fast-image 'fast load image from uri' + react-native-swiper     </Text>
        <Text style={{ fontSize: 17, textAlign: 'center' }} >thanks</Text>
        <Text style={{ fontSize: 12, textAlign: 'center' }} >M.shaeer</Text> 

      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
};
