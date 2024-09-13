import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import axiosInstance from '../../axiosconfig';


export default function DisplayData({data, navigation}) {
  const [suggest, setSuggest] = useState('');
  const [isgenerating, setIsGenerating] = useState(false);

  const generateSuggestion = async () => {
    const response = await axiosInstance.post('/suggest', {
      data,
    });
    if (response.status === 200) {
      setSuggest(response.data.suggestion);
      setIsGenerating(false);
    }
  };

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const datas = {
    labels: ['Swim'], // optional
    data: [0.4],
  };
  return (
    <ScrollView>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <TouchableOpacity
          onPress={() => {
            setIsGenerating(true);
            generateSuggestion();
          }}
          style={{flexDirection: 'row', marginRight: 10}}>
          <Text
            style={{
              textAlign: 'right',

              color: 'green',
              fontSize: 18,
              fontWeight: '800',
            }}>
            {' '}
            <Icon name="calendar" size={18} color="green" /> Maintanence Check{' '}
          </Text>
          <View
            style={{backgroundColor: 'black', borderRadius: 15, padding: 3}}>
            <Text style={{color: 'white', borderRadius: 8}}> AI </Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'right',
            paddingRight: 10,
            color: 'green',
            fontSize: 18,
            fontWeight: '800',
          }}>
          {' '}
          <Icon name="rss" size={18} color="green" /> Connected{' '}
        </Text>
      </View>

      {isgenerating && (
        <View
          style={{
            backgroundColor: 'green',
            padding: 10,
            margin: 10,
            borderRadius: 8,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            {' '}
            Analysing Data...
          </Text>
        </View>
      )}

      {!isgenerating && suggest && (
        <View style={{margin:10, padding:11, borderRadius:8 , backgroundColor:"#364F6B" }}>
          <Text style={{color:"white" , fontWeight:"600"}}>{suggest}</Text>
        </View>
      )}

      <View
        style={{
          padding: 5,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        <View
          style={{
            margin: 8,
            width: 175,
            backgroundColor: '#56a44b',
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}>
          <Text style={{color: 'white', padding: 10, fontWeight: '700'}}>
            Tyre Pressure {'\n'}
            <Text style={{color: 'white', fontSize: 60}}>
              {data.truck.tyrePressure}
            </Text>{' '}
            PSI
          </Text>
        </View>
        <View
          style={{
            margin: 8,
            width: 175,
            backgroundColor: '#4d98a4',
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}>
          <Text style={{color: 'white', padding: 10, fontWeight: '700'}}>
            Speed {'\n'}
            <Text style={{color: 'white', fontSize: 60}}>
              {data.truck.speed}
            </Text>{' '}
            Km/h
          </Text>
        </View>
        <View
          style={{
            margin: 8,
            width: 150,
            backgroundColor: '#dd9564',
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}>
          <Text style={{color: 'white', padding: 10, fontWeight: '700'}}>
            Payload {'\n'}
            <Text style={{color: 'white', fontSize: 60}}>
              {' '}
              {data.truck.payload}
            </Text>
            Tonne
          </Text>
        </View>
      </View>

      <Text
        style={{
          fontSize: 19,
          fontWeight: 'bold',
          color: '#2E073F',
          padding: 10,
        }}>
        TKPH ( Tonne Kilometre Per Hour){' '}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'centre',
          justifyContent: 'flex-start',
          backgroundColor: '#2d3b4d',
          height: 120,
          padding: 8,
          margin: 8,
          borderRadius: 8,
        }}>
        <View
          style={{
            alignItems: 'center',
            paddingLeft: 10,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: '300', fontSize: 25}}>
            <Text style={{fontSize: 55}}>{Math.round(data.data.tkph, 2)}</Text>{' '}
            {'\n'} TKPH
          </Text>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <View>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => {
                navigation.navigate('Tkph', {data});
              }}>
              <Icon name="arrow-right" color="white" size={28} />
              <Text style={{color: 'white', padding: 10, fontWeight: 'bold'}}>
                More Details
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text
        style={{
          fontSize: 19,
          fontWeight: 'bold',
          color: '#2E073F',
          padding: 10,
        }}>
        Tyre Pressure
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'centre',
          justifyContent: 'flex-start',
          backgroundColor: '#2d3b4d',
          height: 120,
          padding: 8,
          margin: 8,
          borderRadius: 8,
        }}>
        <View
          style={{
            alignItems: 'center',
            paddingLeft: 10,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: '300', fontSize: 25}}>
            <Text style={{fontSize: 55}}>
              {Math.round(data.truck.tyrePressure, 2)}
            </Text>{' '}
            {'\n'} PSI
          </Text>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <View>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => {
                navigation.navigate('Pressure', {data});
              }}>
              <Icon name="arrow-right" color="white" size={28} />
              <Text style={{color: 'white', padding: 10, fontWeight: 'bold'}}>
                More Details
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2E073F',
    padding: 10,
  },
});
