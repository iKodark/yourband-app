import React, { useRef, useState, useEffect }  from 'react';
import { Text, TextInput, Animated, View } from 'react-native';
import { colors, fonts } from '../../Styles';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const AnimatedIcon = Animatable.createAnimatableComponent(Icon);

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

  const InputRef = useRef();
  const LabelRef = useRef();

  useEffect(() => {

    if(value.length > 0) {

      onBlur();
    }
  }, []);

  const onChangeText = text => {
    
    onChange(name, text);
  };

  const onFocus = () => {
    
    InputRef.current.transitionTo({ borderColor: colors.primary });

    setTimeout(() => {
      LabelRef.current.transitionTo({ top: 0 });
      LabelRef.current.transitionTo({ left: 0 });
      LabelRef.current.transitionTo({ fontSize: fonts.regular });
    });
  };

  const onBlur = () => {
    
    onTouch(name);

    InputRef.current.transitionTo({ borderColor: colors.transparent });

    setTimeout(() => {
      LabelRef.current.transitionTo({ top: value.length > 0 || value === undefined || value == null ? 0 : 20 });
      LabelRef.current.transitionTo({ left: value.length > 0 || value === undefined || value == null ? 0 : 5 });
      LabelRef.current.transitionTo({ fontSize: value.length > 0 || value === undefined || value == null ? fonts.regular : fonts.input });
    });
  };

  return (
    <>
      <View>

        
          <View style={ styles.textValidation }>
            {error ? (
              <Animatable.Text
                style={{ color: colors.danger }}
                animation="bounceIn"
                useNativeDriver
              >
                { error }
              </Animatable.Text>
            ) : null}
          </View>
        

      </View>
      <Animatable.View style={ styles.content } ref={InputRef}>

          { label &&
            <Animatable.Text
              style={ styles.label }
              ref={LabelRef}
            >
              {label}
            </Animatable.Text>
          }

          <TextInput
            style={styles.input}
            onChangeText={ onChangeText }
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
            value={value}
            {...rest}
          />

          {error ? (
            <View style={ styles.iconValidation }>
              <AnimatedIcon
                name="exclamation-circle"
                size={20}
                color={colors.danger}
                animation="bounceIn"
                useNativeDriver
              />
            </View>
          ) : null}

      </Animatable.View>
    </>
  );
}