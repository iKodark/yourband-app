import React, { useEffect, useState } from 'react';
import { Text, View, KeyboardAvoidingView, Image, FlatList } from 'react-native';

import api from '../../Services/Api';

import Dashboard from '../../Templates/Dashboard';
import styles from './styles';
import Placeholder from '../../Constants/placeholders';

export default function Bands () {

  const [bands, setBands] = useState([]);

  useEffect(() => {

    api.get('/band')
    .then(res => {

      setBands(res.data.bands);
    })
    .catch(err => {

      console.log('ERROR', err);
    })
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image style={[ styles.image ]} source={ {uri: item.picture || Placeholder.album} }/>
      <Text numberOfLines={2} style={{ color: '#fff' }}>{item.name}</Text>
    </View>
  );

  return (
    <Dashboard>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : "height"} style={styles.content}>
          <FlatList
            data={bands}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            numColumns={2}
          />
      </KeyboardAvoidingView>
    </Dashboard>
  );
}