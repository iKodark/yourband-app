import React, { useEffect, useState, useRef } from 'react';
import { Text, View, KeyboardAvoidingView, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Formik} from 'formik';

import { colors } from '../../Styles';
import { api } from '../../Services/Api';
import Dashboard from '../../Templates/Dashboard';
import styles from './styles';
import Placeholder from '../../Constants/placeholders';
import { Modalize } from 'react-native-modalize';

import { TabHeader, Button, Input, Notify } from '../../Components';

export default function Albums ({navigation, route}) {

  const [listAlbums, setListAlbums] = useState([]);
  const [formBand, setFormBand] = useState(null);
  const [formAlbum, setFormAlbum] = useState(null);
  const { band } = route.params;
  const modalizeBandRef = useRef(null);
  const modalizeAlbumRef = useRef(null);

  useEffect(() => {

    api.get(`/band/${band}`)
    .then(res => {

      const { albums, name } = res.data.band;
      
      albums.unshift({
        name: 'add new'
      });

      setListAlbums(albums);
      setFormBand({
        name: name
      });
    })
    .catch(err => {

      console.log('ERROR', err);
    })
  }, []);

  const renderItem = ({ item, index }) => (

    index == 0 ?
    <TouchableOpacity onPress={onOpenAlbum}>
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
    <TouchableOpacity onPress={() => navigation.navigate('Musics', { album: item._id})} >
      <View style={styles.item}>
        <Image style={[ styles.image ]} source={ {uri: item.picture || Placeholder.album} }/>
        <Text numberOfLines={2} style={{ color: '#fff' }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const onOpenBand = () => {
      modalizeBandRef.current?.open();
  };

  const onCloseBand = () => {
      modalizeBandRef.current?.close();
  };

  const onOpenAlbum = () => {
      modalizeAlbumRef.current?.open();
  };

  const onCloseAlbum = () => {
      modalizeAlbumRef.current?.close();
  };

  const buttonAction = <Button action={onOpenBand} style={styles.button} textStyle={styles.buttonText}>Editar</Button>;

  const initialValuesBand = {
    name: ''
  };

  const submitBand = async (data) => {

    api.put(`/band/${band}`, {
      name: data.name
    })
    .then(res => {

      const {band, message} = res.data;
      Notify(message, 'success');

      setFormBand({
        name: band.name
      });

      onCloseBand();
    })
    .catch(err => {

      const { message } = err.response.data;
      Notify(message, 'error');
    })
  }

  const renderFormBand = ({
    values,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
    handleSubmit
  }) => (
    <View style={styles.form}>
      
      <Image source={ {uri: Placeholder.band} } style={styles.avatar} />

      <Input
        name="name"
        label="Nome da banda"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
        onChange={setFieldValue}
        onTouch={setFieldTouched}
        value={values.name}
        error={touched.name && errors.name}
      />

      <View style={styles.groupButton}>
        <Button action={onCloseBand} style={[ styles.buttonCancel, styles.buttonForm]} textStyle={styles.textButtonForm}>
          Cancelar
        </Button>

        <Button action={handleSubmit} style={[ styles.buttonSubmit, styles.buttonForm]} textStyle={styles.textButtonForm}>
          Editar
        </Button>
      </View>

    </View>
  );

  const initialValuesAlbum = {
    name: ''
  };

  const submitAlbum = async (data) => {

    api.post(`/album`, {
      band: band,
      name: data.name
    })
    .then(res => {

      const {albums, message} = res.data;

      Notify(message, 'success');

      albums.unshift({
        name: 'add new'
      });

      setListAlbums(albums);
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
          Criar
        </Button>
      </View>

    </View>
  );

  return (
    <Dashboard>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : "height"} style={styles.content}>
          <TabHeader navigation={navigation} buttonAction={buttonAction} title="Meus álbuns"/>
          <FlatList
            data={listAlbums}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            numColumns={2}
          />

          <Modalize
            ref={modalizeBandRef}
            modalTopOffset={50}
            handlePosition={'outside'}
            modalStyle={styles.modal}
            overlayStyle={{backgroundColor: colors.transparent}}
          >
            <Formik
              initialValues={formBand || initialValuesBand}
              onSubmit={submitBand}
              enableReinitialize
            >
              {renderFormBand}
            </Formik>
          </Modalize>

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
      </KeyboardAvoidingView>
    </Dashboard>
  );
}