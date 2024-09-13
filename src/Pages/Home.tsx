import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Displaytruck from '../components/Displaytruck';
export default function Home({navigation}: any) {
  return (
    <SafeAreaView>
        <View style={{flexDirection: 'row', padding:10, paddingVertical: 8}}>
          <Pressable
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Image
              style={{width: 50, height: 50}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
              }}
            />
          </Pressable>
          <View style={{paddingHorizontal: 10}}>
            <Text style={{fontWeight: '600', fontSize: 18, color: '#433D8B'}}>
              Hello,
            </Text>
            <Text style={{fontWeight: '600', fontSize: 22, color: '#433D8B'}}>
              Admin
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Camera');
              }}>
              <Icon
                style={{paddingRight: 15}}
                name="qrcode"
                size={30}
                color="#433D8B"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Notification');
              }}>
              <Icon name="bell" size={30} color="#433D8B" />
            </TouchableOpacity>
          </View>
        </View>
      <ScrollView >
        <ScrollView   showsVerticalScrollIndicator={false}>
          <ScrollView  horizontal showsHorizontalScrollIndicator={false} >

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
              marginHorizontal: 6,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#2E073F',
            }}>
            <View style={{padding:10}} >
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                Track Truck Data
              </Text>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                At RealTime
              </Text>
            </View>
            <Image
              style={{width: 150, objectFit: 'contain', height: 150}}
              source={{
                uri: 'https://static.vecteezy.com/system/resources/previews/033/029/820/non_2x/dump-truck-clipart-ai-generative-free-png.png',
              }}
            />
          </View>
         

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
              marginHorizontal: 6,
              borderRadius: 8,
              padding:10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#193f6f',
            }}>
               <TouchableOpacity onPress={()=>{
            navigation.navigate("Map")
          }} >
            <View style={{padding:10}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                Find Where The Tyre
              </Text>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                Get damaged 
              </Text>
            </View>
            </TouchableOpacity>
            <Image
              style={{width: 100, objectFit: 'contain', height: 100 , padding:10}}
              source={{
                uri: 'https://static.vecteezy.com/system/resources/previews/035/088/515/non_2x/ai-generated-map-pin-icon-png.png',
              }}
            />
          </View>
          </ScrollView>
  
          {/* truck display */}
          <Text
            style={{
              padding: 10,
              fontSize: 20,
              fontWeight: '800',
              color: '#2E073F',
            }}>
            Available Trucks
          </Text>

          <Displaytruck navigation={navigation} />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
