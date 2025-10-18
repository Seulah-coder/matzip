import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, {use} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../constants/colors';
import useAuth from '@/hooks/queries/useAuth';

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const {auth} = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={styles.contentContainer}>
        <Pressable style={styles.profileContainer}>
          <View style={styles.userImageContainer}>
            <Image
              source={require('@/assets/images/default-user.png')}
              style={styles.userImage}
            />
          </View>
          <Text style={styles.nickname}>{auth.nickname}</Text>
        </Pressable>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.buttomContainer}>
        <Text style={styles.menuText}>설정</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  contentContainer: {gap: 5, marginTop: 30},
  userImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
    gap: 5,
  },
  userImage: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
  },
  nickname: {fontSize: 14},
  buttomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.GREY_200,
  },
  menuText: {fontSize: 15},
});

export default CustomDrawerContent;
