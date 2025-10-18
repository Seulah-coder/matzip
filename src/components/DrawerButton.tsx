import React from 'react';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {MainDrawerParamList} from '../types/navigation';

import {colors} from '@/constants/colors';
import Ionicons from '@react-native-vector-icons/ionicons';

type Navigation = DrawerNavigationProp<MainDrawerParamList>;

interface DrawerButtonProps {
    color?: string;
    style?: StyleProp<ViewStyle>
}

function DrawerButton({style, color = colors.BLACK} : DrawerButtonProps) {
  const navigation = useNavigation<Navigation>();
  return (
    <Pressable style={[styles.container, style]} onPress={() => navigation.openDrawer()}>
      <Ionicons name="menu" size={25} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
});

export default DrawerButton;
