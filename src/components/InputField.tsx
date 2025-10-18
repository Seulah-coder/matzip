import {colors} from '@/constants/colors';
import React, {Ref} from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

interface InputFieldProps extends TextInputProps {
  ref?: Ref<TextInput>;
  error?: string;
  touched?: boolean;
}

function InputField({ref, error, touched, ...props}: InputFieldProps) {
  return (
    <View>
      <TextInput
        ref={ref}
        spellCheck={false}
        autoCorrect={false}
        autoCapitalize="none"
        placeholderTextColor={colors.GREY_400}
        style={[styles.input, touched && Boolean(error) && styles.inputError]}
        {...props}
      />
      {touched && Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.GREY_200,
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    color: colors.BLACK,
  },
  error: {
    color: colors.RED_600,
    marginTop: 5,
    fontSize: 12,
  },
  inputError: {
    borderWidth: 1,
    borderColor: colors.RED_200,
  },
});

export default InputField;
