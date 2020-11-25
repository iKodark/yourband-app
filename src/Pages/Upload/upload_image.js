import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import { api } from '../../Services/Api';

import Dashboard from '../../Templates/Dashboard';
import styles from './styles';

export default function Upload({ navigation }) {

    const [avatar, setAvatar] = useState();

    const imagePickerCall = async () => {

        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

            if (status !== "granted") {
                alert("Nós precisamos dessa permissão.");
                return;
            }
        }

        const data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos
        });

        if (data.cancelled) {
            return;
        }

        if (!data.uri) {
            return;
        }

        setAvatar(data);
    }

    const uploadImage = async () => {

        const data = new FormData();

        data.append("avatar", {
        uri: avatar.uri,
        type: avatar.type
        });
    }

    return (
    <Dashboard>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : "height"} style={styles.content}>
            <Image
                source={{
                uri: avatar
                    ? avatar.uri
                    : "https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png"
                }}
                style={styles.avatar}
            />
            <TouchableOpacity style={styles.button} onPress={imagePickerCall}>
                <Text style={styles.buttonText}>Escolher imagem</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={uploadImage}>
                <Text style={styles.buttonText}>Enviar imagem</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    </Dashboard>
    );
}