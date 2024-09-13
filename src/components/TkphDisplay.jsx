import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import axiosInstance from '../../axiosconfig';
import { LineChart } from 'react-native-chart-kit';

const TkphDisplay = ({route}) => {
  const {data} = route.params;
  const [tkphTrend, setTkphTrend] = useState([]);

  const getTkphHistory = async () => {
    try {
      const response = await axiosInstance.get(
        `/tkph/${data.truck.registrationNumber}`,
      );
      console.log(response.data);
      setTkphTrend(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTkphHistory();
  }, []);

  const d = {
    labels:
      tkphTrend && tkphTrend.tkph_data
        ? tkphTrend.tkph_data.map(item => item.date.split(".")[0]+"/"+item.date.split(".")[1])
        : [],
    datasets: [
      {
        data:
          tkphTrend && tkphTrend.tkph_data
            ? tkphTrend.tkph_data.map(item => parseFloat(item.tkph))
            : [1, 2, 3],
      },
    ],
  };

  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 19,
          fontWeight: 'bold',
          color: '#2E073F',
          padding: 10,
        }}>
        TKPH ( Tonne Kilometre Per Hour){' '}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          height={250}
          width={250}
          style={{objectFit: 'contain'}}
          source={{
            uri: 'https://png.pngtree.com/png-clipart/20230913/original/pngtree-dumptruck-clipart-cartoon-illustration-of-orange-dump-truck-vector-png-image_11059341.png',
          }}
        />
        <Text
          style={{
            color: 'black',
            fontWeight: '600',
            textAlign: 'center',
            fontSize: 25,
          }}>
          <Text style={{fontSize: 55}}>{Math.round(data.data.tkph, 2)}</Text>{' '}
          {'\n'}TKPH
        </Text>
      </View>
      <Text style={{padding: 10, fontWeight: '400', color: '#2E073F'}}>
        Note - TKPH value may have small difference with actual TKPH{' '}
      </Text>
      <View
        style={{
          margin: 8,
          backgroundColor: 'green',
          height: 60,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
          TKPH Seems Good <Icon name="asterisk" color="white" size={25} />{' '}
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontSize: 19,
            fontWeight: 'bold',
            color: '#2E073F',
            padding: 10,
          }}>
          Payload Record
        </Text>

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
              curb weight {'\n'}
              <Text style={{color: 'white', fontSize: 60}}>
                {data.data.vehicle_weight}
              </Text>{' '}
              Tonne
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
              Max-Capacity {'\n'}
              <Text style={{color: 'white', fontSize: 60}}>
                {data.data.payLoadcap}
              </Text>{' '}
              Tonne
            </Text>
          </View>
          <View
            style={{
              margin: 8,
              width: 175,
              backgroundColor: '#dd9564',
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
            }}>
            <Text style={{color: 'white', fontWeight: '700'}}>
              Loaded Payload {'\n'}
              <Text style={{color: 'white', fontSize: 60}}>
                {' '}
                {data.truck.payload}
              </Text>
              Tonne
            </Text>
          </View>

          <View
            style={{
              margin: 8,
              width: 175,
              backgroundColor: '#6058a8',
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
            }}>
            <Text style={{color: 'white', padding: 10, fontWeight: '700'}}>
              Load per Tyre {'\n'}
              <Text style={{color: 'white', fontSize: 50}}>
                {data.data.singleTyreLoadAfterLoad}
              </Text>{' '}
              Tonne
            </Text>
          </View>

          <View
            style={{
              margin: 8,
              width: 175,
              backgroundColor: '#794244',
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
            }}>
            <Text style={{color: 'white', padding: 10, fontWeight: '700'}}>
              Load per Tyre {'\n'}
              <Text style={{color: 'white', fontSize: 40}}>
                {data.data.meanTyreLoad}
              </Text>{' '}
              Tonne
            </Text>
          </View>
        </View>

        <View
          style={{
            margin: 8,
            padding: 6,
            backgroundColor: 'green',
            height: 60,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            {' '}
            AWSS (Average Working Speed ) : {data.data.Awss} km/h{' '}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 19,
            fontWeight: 'bold',
            color: '#2E073F',
            padding: 10,
          }}>
          TKPH Trend (last 7 days)
        </Text>
        <View style={{padding: 10}}>
          {tkphTrend && (
            <LineChart
              data={d}
              width={370} // from react-native
              height={220}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#5a73b8',
                backgroundGradientFrom: '#5a73b8',
                backgroundGradientTo: '#5a73a8',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 8,
                  padding:10
                },

                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: 'black',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          )}
        </View>
        <Text style={{color:"black" , textAlign:"center" ,fontSize:20, padding:10, fontWeight:"600" }}>TKPH vs Date</Text>
      </View>
    </ScrollView>
  );
};

export default TkphDisplay;

const styles = StyleSheet.create({});
