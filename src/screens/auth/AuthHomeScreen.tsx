import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthStackParamList} from '@/types/navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import CustomButton from '@/components/CustomButton';
import {colors} from '@/constants/colors';

type Navigation = StackNavigationProp<AuthStackParamList>;

function AuthHomeScreen() {
  const navigation = useNavigation<Navigation>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/youtubelogo.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="이메일 로그인"
          onPress={() => navigation.navigate('Login')}
        />
        <Pressable onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.emailText}>이메일로 가입하기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  imageContainer: {
    flex: 3,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    gap: 5,
  },
  image: {width: '100%', height: '100%'},
  emailText: {
    textDecorationLine: 'underline',
    fontWeight: '500',
    padding: 10,
    color: colors.BLACK,
  },
});

export default AuthHomeScreen;
