import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Notification() {
  return (
    <View >
     <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#2E073F',
          paddingVertical: 8,
          paddingHorizontal: 10,
        }}>
       Notification
      </Text>
    
    <View style={{justifyContent:"center",height:800 ,alignItems:"center"}}>
       
        <Image
         style={{width: 150, objectFit: 'contain', height: 150 ,padding:10}}
         source={{uri:"https://static.vecteezy.com/system/resources/previews/009/590/430/non_2x/3d-yellow-empty-delivery-car-shipping-icon-e-commerce-illustration-free-png.png"}}
        />
         <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#2E073F',
          paddingVertical: 8,
          paddingHorizontal: 10,
        }}>
    Notification is empty
      </Text>
        
    </View>

    </View>
  )
}

const styles = StyleSheet.create({})