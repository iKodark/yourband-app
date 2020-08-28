import React, { useRef, useState }  from 'react';
import { Text, TextInput, Animated, View } from 'react-native';
import { colors } from '../../Styles';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Input({
  name,
  label,
  value,
  onChange,
  onTouch,
  error,
  errorStyle,
  ...rest
}) {

  const fadeLabelPosition = useRef(new Animated.Value(20)).current;
  const [animationInput, setAnimation] = useState(new Animated.Value(0));

  const onChangeText = text => {
    onChange(name, text);
  };

  const onFocus = () => {
    Animated.parallel([
      Animated.timing(fadeLabelPosition, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true
      }),

      Animated.timing(animationInput, {
        toValue:1,
        duration: 1000
      })
    ]).start();
  };

  const boxInterpolation =  animationInput.interpolate({
    inputRange: [0, 1],
    outputRange:[colors.secondary , "rgb(1, 255, 205)"]
  });

  const animatedStyle = {
    borderColor: boxInterpolation
  }

  const onBlur = () => {

    onTouch(name);

    Animated.parallel([
      Animated.timing(fadeLabelPosition, {
        toValue: value.length > 0 || value === undefined || value == null ? 0 : 20,
        duration: 400,
        useNativeDriver: 'true'
      }),

      Animated.timing(animationInput, {
        toValue: 0,
        duration: 400
      })
    ]).start();
  };

  return (
    <>
      <View>

        
          <View style={ styles.textValidation }>
            {error ? (
              <Text style={{ color: colors.danger }} >{ error }</Text>
            ) : null}
          </View>
        

      </View>
      <Animated.View style={{ ...styles.content, ...animatedStyle }}>

          { label &&
            <Animated.Text style={[ styles.label, { transform: [ { translateY: fadeLabelPosition} ] } ]}>{label}</Animated.Text>
          }

          <TextInput
            style={styles.input}
            onChangeText={ onChangeText }
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
            {...rest}
          />

          {error ? (
            <View style={ styles.iconValidation }>
              <Icon
                name="exclamation-circle"
                size={20}
                color={colors.danger}
              />
            </View>
          ) : null}

      </Animated.View>
    </>
  );
}