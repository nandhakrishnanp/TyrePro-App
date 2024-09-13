import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import axiosInstance from '../../axiosconfig';


const Map = () => {
  const [coordinates, setCoordinates] = useState([]);

  const getTruckdetails = async () => {
    try {
      const response = await axiosInstance.get('/coalmine');
      console.log(response.data);
      setCoordinates(response.data[0].nearby_locations);
      console.log(response.data[0].nearby_locations);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getTruckdetails();
  }, []);

  const selectColour = aqi => {
    if (aqi <= 80) {
      return 'green';
    } else if (aqi <= 70) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  return (
    <View>
      <Text
        style={{
          zIndex: 10,
          fontSize: 20,
          padding: 10,
          color: '#17153B',
          fontWeight: 'bold',
        }}>
        Road Quality Map
      </Text>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          cameraZoomRange={{
            minCenterCoordinateDistance: 12,
            maxCenterCoordinateDistance: 20,
          }}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: 11.6,
            longitude: 79.48,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {coordinates &&
            coordinates.map(item => (
              <Marker
                key={item.Longitude}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
                // description={`recorded at ${item.Station} \n Air Quality Idex : ${item.AQI} \n Air Quality : ${item.AQI_Quality} \n Last Updated : ${item.Pol_Date}`}
                pinColor={'red'}>
                <Callout tooltip={true} style={{backgroundColor: 'white'}}>
                  <View>
                    <Text style={{fontVariant: 'bold', fontSize: 18}}>
                      Road Quality : {item.road_quality}
                    </Text>
                    <Text style={{fontVariant: 'bold', fontSize: 15}}>
                      Quality Index : {item.health_percentage}
                    </Text>
                  </View>
                </Callout>
              </Marker>
            ))}
        </MapView>
      </View>
    </View>
  );
};

export default Map;
const styles = StyleSheet.create({
  container: {
    height: 820,
    width: 400,
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
