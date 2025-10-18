import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import useAuth from '@/hooks/queries/useAuth';
import useForm from '@/hooks/useForm';
import {validateSignup} from '@/utils/validations';
import {useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

function SignupScreen() {
  const {signupMutation} = useAuth();
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);
  const signup = useForm({
    initialValues: {email: '', password: '', passwordConfirm: ''},
    validate: validateSignup,
  });

  const handleSubmit = () => {
    const {email, password} = signup.values;
    signupMutation.mutate({email, password});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          autoFocus
          placeholder="이메일"
          returnKeyType="next"
          submitBehavior="submit"
          touched={signup.touched.email}
          inputMode="email"
          autoCapitalize="none"
          textContentType="emailAddress"
          autoComplete="email"
          error={signup.errors.email}
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...signup.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          submitBehavior="submit"
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
          textContentType="oneTimeCode"
          touched={signup.touched.password}
          secureTextEntry
          error={signup.errors.password}
          {...signup.getTextInputProps('password')}
        />
        <InputField
          ref={passwordConfirmRef}
          placeholder="비밀번호 확인"
          onSubmitEditing={handleSubmit}
          touched={signup.touched.passwordConfirm}
          {...signup.getTextInputProps('passwordConfirm')}
          error={signup.errors.passwordConfirm}
          secureTextEntry
        />
      </View>
      <CustomButton
        label="회원가입"
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

export default SignupScreen;
