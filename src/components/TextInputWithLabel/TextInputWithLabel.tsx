import React, { Text, TextInput, TextInputProps, View } from 'react-native';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { styles } from './styles';

type Props = {
  errorMsg?: string;
  label: string;
} & TextInputProps;

const TextInputWithLabel = forwardRef(
  ({ label, errorMsg, onChangeText, onBlur, value, ...rest }: Props, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    useImperativeHandle(
      ref,
      () => ({
        focus: () => internalInputRef?.current?.focus(),
        blur: () => internalInputRef?.current?.blur(),
      }),
      [],
    );

    const onFocusInput = isFocused && styles.onFocusTextInput;
    const onFocusLabel = isFocused && styles.onFocusLabel;

    const internalInputRef = useRef<TextInput>(null);

    return (
      <View style={styles.textInputContainer}>
        <Text style={[styles.label, onFocusLabel]}>{label}</Text>
        <TextInput
          ref={internalInputRef}
          style={[styles.textInput, onFocusInput]}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={e => {
            setIsFocused(false);
          }}
          onChangeText={onChangeText}
          {...rest}
        />
        {errorMsg && <Text style={{ color: 'black' }}>{errorMsg}</Text>}
      </View>
    );
  },
);

export default TextInputWithLabel;
