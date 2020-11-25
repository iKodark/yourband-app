import React, { useEffect, useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

import Dashboard from '../../Templates/Dashboard';
import styles from './styles';
import Placeholder from '../../Constants/placeholders';

import { api } from '../../Services/Api';

import { Audio } from 'expo-av';

export default function Home () {

  const [ listBands, setListBands ] = useState([]);
  const [ listAlbums, setListAlbums ] = useState([]);
  const [ listMusics, setListMusics ] = useState([]);

  const [playbackObject, setPlaybackObject] = useState([]);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {

    api.get('/home')
    .then(res => {
      
      var { bands, albums, musics } = res.data;
      
      bands = bands.map(band => ({...band, type: 'band'}));
      albums = albums.map(album => ({...album, type: 'album'}));
      musics = musics.map(music => ({...music, type: 'music', path: music.path ? `https://yourband.s3-sa-east-1.amazonaws.com/${music.path}` : null}));

      setListBands(bands);
      setListAlbums(albums);
      setListMusics(musics);
    })
    .catch(err => {

      console.log(err);
    });
  }, []);

  const play = async (path) => {

    console.log(path);

    if(!playing && path) {

      const soundObject = new Audio.Sound()
      try {
          
          await soundObject.loadAsync({uri: path})
          setPlaying(true);
          
          await soundObject.playAsync()
          setPlaybackObject(soundObject)
      } catch (error) {
          console.log("Couldnt load main theme", error)
          return
      }
    } else {

      stop()
    }
  }

  const stop = async () => {

      try {

          await playbackObject.stopAsync()
          await playbackObject.unloadAsync()
          setPlaying(false);
      } catch (error) {
          console.log("Couldnt stop main theme", error)
          return
      }
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => play(item.path)}>
      <View key={item._id} style={styles.item}>
        <Image style={[ styles.image ]} source={ {uri: item.url || Placeholder[item.type]} }/>
        <Text numberOfLines={2} style={{ color: '#fff' }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Dashboard>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : "height"} style={styles.content}>
        <ScrollView>

          <View style={styles.contentList}>
            <Text style={styles.titleList}> Bandas </Text>
            <FlatList
              horizontal={true}
              data={listBands}
              renderItem={renderItem}
              keyExtractor={item => ( item._id.toString() )}
            />
          </View>

          <View style={styles.contentList}>
            <Text style={styles.titleList}> Álbuns </Text>
            <FlatList
              horizontal={true}
              data={listAlbums}
              renderItem={renderItem}
              keyExtractor={item => ( item._id.toString() )}
            />
          </View>

          <View style={styles.contentList}>
            <Text style={styles.titleList}> Músicas </Text>
            <FlatList
              horizontal={true}
              data={listMusics}
              renderItem={renderItem}
              keyExtractor={item => ( item._id.toString() )}
            />
          </View>

        </ScrollView>
      </KeyboardAvoidingView>

    </Dashboard>
  );
};