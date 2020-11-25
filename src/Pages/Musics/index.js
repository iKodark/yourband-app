import React, { useEffect, useState, useRef } from 'react';
import { Text, View, KeyboardAvoidingView, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Formik} from 'formik';

import { colors } from '../../Styles';
import { api, upload } from '../../Services/Api';
import Dashboard from '../../Templates/Dashboard';
import styles from './styles';
import Placeholder from '../../Constants/placeholders';
import { Modalize } from 'react-native-modalize';

import { TabHeader, Button, Input, Notify } from '../../Components';

import * as DocumentPicker from 'expo-document-picker';

import { getToken } from '../../Services/AsyncStorage';

import axios from "axios";

export default function Musics ({navigation, route}) {

  const [listMusics, setListMusics] = useState([]);
  const [formAlbum, setFormAlbum] = useState(null);
  const [formMusic, setFormMusic] = useState(null);
  const [formUri, setFormUri] = useState(null);
  const { album } = route.params;
  const modalizeAlbumRef = useRef(null);
  const modalizeMusicRef = useRef(null);

  useEffect(() => {

    api.get(`/album/${album}`)
    .then(res => {

      const { musics, name } = res.data.album;

      musics.unshift({
        name: 'add new'
      });

      setListMusics(musics);
      setFormAlbum({
        name: name
      });
    })
    .catch(err => {

      console.log('ERROR', err);
    })
  }, []);

  const onOpenAlbum = () => {
      modalizeAlbumRef.current?.open();
  };

  const onCloseAlbum = () => {
      modalizeAlbumRef.current?.close();
  };

  const initialValuesAlbum = {
    name: ''
  };

  const submitAlbum = async (data) => {

    api.put(`/album/${album}`, {
      name: data.name
    })
    .then(res => {

      const {album, message} = res.data;
      Notify(message, 'success');

      setListAlbums({
        name: album.name
      });

      onCloseAlbum();
    })
    .catch(err => {

      const { message } = err.response.data;
      Notify(message, 'error');
    })
  }

  const renderFormAlbum = ({
    values,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
    handleSubmit
  }) => (
    <View style={styles.form}>
      
      <Image source={ {uri: Placeholder.album} } style={styles.avatar} />

      <Input
        name="name"
        label="Nome do álbum"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
        onChange={setFieldValue}
        onTouch={setFieldTouched}
        value={values.name}
        error={touched.name && errors.name}
      />

      <View style={styles.groupButton}>
        <Button action={onCloseAlbum} style={[ styles.buttonCancel, styles.buttonForm]} textStyle={styles.textButtonForm}>
          Cancelar
        </Button>

        <Button action={handleSubmit} style={[ styles.buttonSubmit, styles.buttonForm]} textStyle={styles.textButtonForm}>
          Editar
        </Button>
      </View>

    </View>
  );

  const onOpenMusic = () => {
      modalizeMusicRef.current?.open();
  };

  const onCloseMusic = () => {
      modalizeMusicRef.current?.close();
  };

  const initialValuesMusic = {
    name: ''
  };

  const submitMusic = async (data) => {

    const uriParts = formUri.split('.');
    const fileType = uriParts[uriParts.length - 1];

    const formData = new FormData();

    formData.append('audio', {
        uri: formUri,
        name: `${data.name.replaceAll(' ', '_')}.${fileType}`,
        type: `audio/${fileType}`
    });

    formData.append('audio_name', data.name);
    formData.append('album', album);

    const token = await getToken();

    axios.post('http://192.168.0.23:9000/api/music',
      formData,
      {
        headers: {
          'x-access-token': token
        }
      }
    )
    .then(res => {

      const {musics, message} = res.data;
      Notify(message, 'success');

      musics.unshift({
        name: 'add new'
      });

      setListMusics(musics);
      onCloseMusic();
    })
    .catch(err => {
      console.log(err);
    });
  }

  const renderFormMusic = ({
    values,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
    handleSubmit
  }) => (
    <View style={styles.form}>

      <Input
        name="name"
        label="Nome da música"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
        onChange={setFieldValue}
        onTouch={setFieldTouched}
        value={values.name}
        error={touched.name && errors.name}
      />

      <Button action={handleMusic} style={[ styles.buttonUpload ]} type={ formUri ? "fill" : "outline" } textStyle={styles.textButtonUpload}>
        { formUri? 'Upload realizado' : "Realizar upload" }
      </Button>

      <View style={styles.groupButton}>
        <Button action={onCloseMusic} style={[ styles.buttonCancel, styles.buttonForm]} textStyle={styles.textButtonForm}>
          Cancelar
        </Button>

        <Button action={handleSubmit} style={[ styles.buttonSubmit, styles.buttonForm]} textStyle={styles.textButtonForm}>
          Criar
        </Button>
      </View>

    </View>
  );

  const handleMusic = async () => {

    DocumentPicker.getDocumentAsync({
        type: 'audio/*',
        copyToCacheDirectory: true,
        base64: true
    })
    .then(async succ => {

      setFormUri(succ.uri)
    }).catch(err =>
        console.log('error uploading from phone', err)
    )
  }

  const buttonAction = <Button action={onOpenAlbum} style={styles.button} textStyle={styles.buttonText}>Editar</Button>;

  const renderItem = ({ item, index }) => (

    index == 0 ?
    <TouchableOpacity onPress={onOpenMusic}>
      <View
        style={[ styles.item, {
          borderColor: colors.primary,
          borderWidth: 7,
          width: 190,
          height: 190,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }]}
      >
        <Icon
            style={styles.icon}
            name="add"
            size={ 110 }
            color={ colors.primary }
        />
      </View>
    </TouchableOpacity>
    :
    <TouchableOpacity>
      <View style={styles.item}>
        <Image style={[ styles.image ]} source={ {uri: item.picture || Placeholder.music} }/>
        <Text numberOfLines={2} style={{ color: '#fff' }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Dashboard>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : "height"} style={styles.content}>
          <TabHeader navigation={navigation} buttonAction={buttonAction} title="Minhas músicas"/>

          <FlatList
            data={listMusics}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            numColumns={2}
          />

          <Modalize
            ref={modalizeAlbumRef}
            modalTopOffset={50}
            handlePosition={'outside'}
            modalStyle={styles.modal}
            overlayStyle={{backgroundColor: colors.transparent}}
          >
            <Formik
              initialValues={formAlbum || initialValuesAlbum}
              onSubmit={submitAlbum}
              enableReinitialize
            >
              {renderFormAlbum}
            </Formik>
          </Modalize>

          <Modalize
            ref={modalizeMusicRef}
            modalTopOffset={50}
            handlePosition={'outside'}
            modalStyle={styles.modal}
            overlayStyle={{backgroundColor: colors.transparent}}
          >
            <Formik
              initialValues={formMusic || initialValuesMusic}
              onSubmit={submitMusic}
              enableReinitialize
            >
              {renderFormMusic}
            </Formik>
          </Modalize>
      </KeyboardAvoidingView>
    </Dashboard>
  );
}