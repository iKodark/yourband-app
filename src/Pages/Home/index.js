import React, { useEffect, useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  Image,
  FlatList
} from 'react-native';

import Dashboard from '../../Templates/Dashboard';
import styles from './styles';
import Placeholder from '../../Constants/placeholders';

import api from '../../Services/BillClintonSwag';

export default function Home () {

  const [albums, setAlbums] = useState([]);

  const [musics, setMusics] = useState([]);

  const generes = [
    {
      album: 'Rock',
      url: 'https://fakeimg.pl/125/ff0000,128/fff/?retina=1&text=Rock'
    },
    {
      album: 'Blues',
      url: 'https://fakeimg.pl/125/ffee33,128/fff/?retina=1&text=Blues'
    },
    {
      album: 'Pop',
      url: 'https://fakeimg.pl/125/ff5588,128/fff/?retina=1&text=Pop'
    },
    {
      album: 'Rap',
      url: 'https://fakeimg.pl/125/000000,128/fff/?retina=1&text=Rap'
    },
    {
      album: 'Funk',
      url: 'https://fakeimg.pl/125/ccccff,128/fff/?retina=1&text=Funk'
    },
    {
      album: 'Grunge',
      url: 'https://fakeimg.pl/125/00bb00,128/fff/?retina=1&text=Rock'
    },
  ];

  useEffect(() => {

    getAlbums();
    getMusics();
  }, []);

  const getAlbums = () => {

    api.get('Black Sabbath')
    .then(res => {

      const { data } = res;
      setAlbums(data);
    })
    .catch(err => {

      console.log(err);
    });
  }

  const getMusics = () => {

    api.get('Fire')
    .then(res => {

      const { data } = res;
      setMusics(data);
    })
    .catch(err => {

      console.log(err);
    });
  }

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image style={[ styles.image ]} source={ {uri: item.url || Placeholder.album} }/>
      <Text numberOfLines={2} style={{ color: '#fff' }}>{item.album}</Text>
    </View>
  );

  return (
    <Dashboard>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : "height"} style={styles.content}>
        <ScrollView>

          <View style={styles.contentList}>
            <Text style={styles.titleList}> Álbuns </Text>
            <FlatList
              horizontal={true}
              data={albums}
              renderItem={renderItem}
              keyExtractor={(item, index) => index}
            />
          </View>

          <View style={styles.contentList}>
            <Text style={styles.titleList}> Músicas </Text>
            <FlatList
              horizontal={true}
              data={musics}
              renderItem={renderItem}
              keyExtractor={(item, index) => index}
            />
          </View>

          <View style={styles.contentList}>
            <Text style={styles.titleList}> Gêneros </Text>
            <FlatList
              horizontal={true}
              data={generes}
              renderItem={renderItem}
              keyExtractor={(item, index) => index}
            />
          </View>

        </ScrollView>
      </KeyboardAvoidingView>

    </Dashboard>
  );
};