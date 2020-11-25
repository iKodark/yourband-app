import React, { useEffect, useState, useRef } from 'react';
import { Text, View, KeyboardAvoidingView, ScrollView, Button } from 'react-native';

import Dashboard from '../../Templates/Dashboard';
import styles from './styles';

import { Audio } from 'expo-av';

export default function Player () {

    const [playbackObject, setPlaybackObject] = useState([]);
    const [playing, setPlaying] = useState(false);

    const play = async () => {

        const soundObject = new Audio.Sound()

        try {
            
            // if(!playing) {
                await soundObject.loadAsync({uri: "https://yourband.s3-sa-east-1.amazonaws.com/bands/5f909d51b488ab2ae86eed7f/albums/5fbc8c63cc5b5a18b0e0cf64/musics/5fbc8c78cc5b5a18b0e0cf66_Tora_Tora.mp3"})
                setPlaying(true);
            // }
            await soundObject.playAsync()
            setPlaybackObject(soundObject)
        } catch (error) {
            console.log("Couldnt load main theme", error)
            return
        }
    }

    const pause = async () => {

        try {

            await playbackObject.pauseAsync()
        } catch (error) {
            console.log("Couldnt pause main theme", error)
            return
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

    return (
        <Dashboard>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : "height"} style={styles.content}>
                <ScrollView>

                    <Button
                        title="Play"
                        onPress={play}
                    />

                    <Button
                        title="Pause"
                        onPress={pause}
                    />

                    <Button
                        title="Stop"
                        onPress={stop}
                    />

                </ScrollView>
            </KeyboardAvoidingView>
        </Dashboard>
    )
};