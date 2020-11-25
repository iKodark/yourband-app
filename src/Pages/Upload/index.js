import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

import { upload } from '../../Services/Api';
import { getToken } from '../../Services/AsyncStorage';
import Base64 from '../../Services/Base64';

import Dashboard from '../../Templates/Dashboard';
import styles from './styles';

const dataUriToBuffer = require('data-uri-to-buffer');

import axios from "axios";

const Buffer = require('buffer/').Buffer;

export default function Upload({ navigation }) {

    const [avatar, setAvatar] = useState();

    const uploadRecFromPhone = async () => {
        // console.log('ENVIANDO...');
        DocumentPicker.getDocumentAsync({
            type: 'audio/*',
            copyToCacheDirectory: true,
            base64: true
        })
        .then(async succ => {
            // console.log(succ);
            // console.log(`Recording Information -- path: ${succ.uri}, type: ${succ.type}, size: ${succ.size}`)
            uploadAudio(succ);
        }).catch(err =>
            console.log('error uploading from phone', err)
        )
    }

    const uploadAudio = async ({ uri, name }) => {

        // const cloudUri = Base64.encode(uri);
        // const base64Aud = `data:audio/mpeg;base64,${cloudUri}`;
        // const decoded = dataUriToBuffer(base64Aud);

        const uriParts = uri.split('.');
        const fileType = uriParts[uriParts.length - 1];
        // console.log(fileType, name);
        const formData = new FormData();
        formData.append('audio', {
            uri,
            name: 'TESTEZERA.mp3',
            type: `audio/${fileType}`,
        });
        console.log(formData);
        const token = await getToken();
        axios.post('http://192.168.0.23:9000/api/uploads3', formData, {headers: {
            'x-access-token': token
        }}).then(response =>     
            {console.log(response)})
        .catch(error => 
            {console.log(error)});
        // upload.post(`/uploads3`, {
        //     formData
        // })
        // .then(res => {
        
        //     // console.log(res);
        // })
        // .catch(err => {

        //     console.log(err);
        // })
        
    }

    return (
    <Dashboard>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : "height"} style={styles.content}>
            <TouchableOpacity style={styles.button} onPress={uploadRecFromPhone}>
                <Text style={styles.buttonText}>Enviar imagem</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    </Dashboard>
    );
}