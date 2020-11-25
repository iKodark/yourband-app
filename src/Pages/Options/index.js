import React from 'react';
import { Text, View, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';

import Dashboard from '../../Templates/Dashboard';
import styles from './styles';

import bandsImage from '../../assets/options/bands.png';
import musicsImage from '../../assets/options/musics.png';
import albumsImage from '../../assets/options/albums.png';
import favoritesImage from '../../assets/options/favorites.png';

const options = [
  {
    name: 'Minhas bandas',
    image: bandsImage,
    redirect: 'Bands'
  },
  {
    name: 'Minhas músicas',
    image: musicsImage,
    redirect: 'Musics'
  },
  {
    name: 'Meus álbuns',
    image: albumsImage,
    redirect: 'Albums'
  },
  {
    name: 'Favoritos',
    image: favoritesImage,
    redirect: 'Upload'
  },
];

const Options = ({ navigation }) => (
  <Dashboard>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : "height"} style={styles.content}>
        {
          options.map(item => (
            <TouchableOpacity onPress={() => navigation.navigate(item.redirect)} key={item.redirect}>
              <View style={styles.item}>
                <Image style={[ styles.image ]} source={ item.image }/>
                {/* <Text numberOfLines={2} style={{ color: '#fff' }}>{item.name}</Text> */}
              </View>
            </TouchableOpacity>
          ))
        }
    </KeyboardAvoidingView>
  </Dashboard>
);

export default Options;