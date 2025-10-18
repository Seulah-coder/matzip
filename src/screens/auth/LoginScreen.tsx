import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import useAuth from '@/hooks/queries/useAuth';
import useForm from '@/hooks/useForm';
import {validateLogin} from '@/utils/validations';
import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

function LoginScreen() {
  const {loginMutation} = useAuth();
  const passwordRef = useRef<TextInput | null>(null);
  const login = useForm({
    initialValues: {email: '', password: ''},
    validate: validateLogin,
  });

  const handleSubmit = () => {
    loginMutation.mutate(login.values);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          autoFocus
          placeholder="이메일"
          returnKeyType="next"
          touched={login.touched.email}
          error={login.errors.email}
          inputMode="email"
          autoCapitalize="none"
          textContentType="emailAddress"
          autoComplete="email"
          submitBehavior="submit"
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...login.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          secureTextEntry
          returnKeyType="join"
          touched={login.touched.password}
          error={login.errors.password}
          textContentType="oneTimeCode"
          onSubmitEditing={handleSubmit}
          {...login.getTextInputProps('password')}
        />
      </View>
      <CustomButton
        label="로그인"
        variant="filled"
        size="large"
        onPress={handleSubmit}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default LoginScreen;
