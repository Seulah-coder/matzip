import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, SafeAreaView, View, Pressable} from 'react-native';
import DrawerButton from '@/components/DrawerButton';
import useAuth from '@/hooks/queries/useAuth';
import MapView  , {PROVIDER_GOOGLE}from 'react-native-maps';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '@/constants/colors';
import Geolocation from 'react-native-geolocation-service';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';


function MapHomeScreen() {

  useEffect(() => {
    Geolocation.requestAuthorization('whenInUse');
  }, []);

  const inset =  useSafeAreaInsets();
  const [userLocation, setUserLocation] = useState<LatLng>();
  const [isUserLocationError, setIsUserLocationError] = useState(false);
  const mapRef = useRef<MapView | null>(null);
  const moveMapView = (coordinate : LatLng) => {
    mapRef.current?.animateToRegion({
        ...coordinate,
        latitudeDelta : 0.0922,
        longitudeDelta : 0.0421,
    });
  };

  const handlePressUserLocation = () => {
    if(isUserLocationError){
        return 
    }
    moveMapView(userLocation);
  }


  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
    setUserLocation(info.coords);
    },
    () => {
        setIsUserLocationError(true)

    },
    {
        enableHighAccuracy : true
    });
  }, [])
  return (
    <>
        <MapView style={styles.container} provider={PROVIDER_GOOGLE} ref={mapRef}/>
        <DrawerButton style={[styles.drawerButton, {top : inset.top + 10}]} color={colors.WHITE}/>
        <View style={styles.buttonList}>
            <Pressable style={styles.mapButton} onPress={handlePressUserLocation}>
                <FontAwesome6 name='location-crosshairs' iconStyle='solid' size={25} color={colors.WHITE}/>
            </Pressable>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    drawerButton: {
        position : 'absolute',
        left: 0,
        top : 0,
        zIndex : 1,
        paddingVertical : 10,
        paddingHorizontal : 15,
        backgroundColor : colors.PINK_600,
        borderTopRightRadius : 50,
        borderBottomRightRadius  : 50,
        boxShadow : '1px 1px 3px rgba(0, 0, 0, 0.5)'
    },
    buttonList : {
        position : 'absolute',
        bottom: 30,
        right : 20,
        zIndex: 1,
    },
    mapButton : {
        backgroundColor : colors.PINK_600,
        marginVertical : 5,
        height : 45,
        width : 45,
        borderRadius : 45,
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow : '1px 1px 3px rgba(0, 0, 0, 0.5)'
    }
});

export default MapHomeScreen;
