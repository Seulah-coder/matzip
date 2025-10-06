import {NavigatorScreenParams} from '@react-navigation/native';

export type MapStackParamList = {
  MapHome: undefined;
  SearchLocation: undefined;
  AddLocation: {latitude: number; longitude: number};
};

export type FeedStackParamList = {
  FeedList: undefined;
  FeedDetail: {id: number};
  FeedFavorite: undefined;
  EditLocation: {id: number};
};

export type AuthStackParamList = {
  AuthHome: undefined;
  Login: undefined;
  Signup: undefined;
};

export type MainDrawerParamList = {
  Map: NavigatorScreenParams<MapStackParamList>;
  Feed: NavigatorScreenParams<FeedStackParamList>;
  Calendar: undefined;
};

export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainDrawerParamList {}
  }
}
