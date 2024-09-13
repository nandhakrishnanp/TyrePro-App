import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import DisplayData from '../components/DisplayData';
import axiosInstance from '../../axiosconfig';

export default function Data({navigation, route}: any) {
  const {item} = route.params;

  const [data, setData] = useState<any>([]);

  const fetchTruckData = async () => {
    try {
      const response = await axiosInstance.get(
        `/truckdetails/${item.registrationNumber}`,
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTruckData();
  }, []);

  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#2E073F',
          paddingVertical: 8,
          paddingHorizontal: 10,
        }}>
        {item.registrationNumber} Details{' '}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          marginHorizontal: 6,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#2E073F',
        }}>
        <View>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
            Make : {item.make ? item.make : 'NAN'}
          </Text>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
            Model : {item.model ? item.model : 'NAN'}
          </Text>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
            Status : <Text style={{color: '#c1f3b3'}}>Running</Text>
          </Text>
        </View>
        <Image
          style={{width: 150, objectFit: 'contain', height: 150, padding: 10}}
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/033/029/820/non_2x/dump-truck-clipart-ai-generative-free-png.png',
          }}
        />
      </View>
      {data.truck ? <DisplayData data={data} navigation={navigation} /> : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
