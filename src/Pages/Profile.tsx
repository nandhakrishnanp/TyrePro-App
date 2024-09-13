import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View>
        <View style={{backgroundColor:"#2E073F" ,height:160 ,position:"relative" }}>
        <View style={{position:"absolute" , bottom:-50, left:150}}>

        <Image
            
            style={{width: 100, height: 100 , borderColor:"white" }}
        source={{uri:"https://cdn-icons-png.flaticon.com/512/149/149071.png"}}
        />
        </View>
        </View>
          <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#2E073F',
          paddingHorizontal: 10,
          paddingTop:55,
          
          textAlign:"center"
        }}>
       Admin
      </Text>

      <Text
        style={{
          fontSize: 18,
          fontWeight: '300',
          color: '#2E073F',
          textAlign:"center"
        }}>
       Coal India Limited
      </Text>
<View>
    <Text style={{
         fontSize: 20,
         fontWeight: '400',
         color: '#2E073F',
         paddingHorizontal:10
    }} >
        Record
    </Text>
<View>

</View  >
   <View style={{padding:10 }}>

    <Text style={{ fontSize:18 , fontWeight:"800" , color:"#2E073F"}}  >
        Total Issues : 1
    </Text>
    <Text style={{ fontSize:18 , fontWeight:"800" , color:"#2E073F"}} >
        Total issues Solved : 1
    </Text>
    <Text style={{ fontSize:18 , fontWeight:"800" , color:"#2E073F"}} >
        Total issues Pending : 0
    </Text>
   </View>

</View>
<Text style={{
         fontSize: 20,
         fontWeight: '400',
         color: '#2E073F',
         paddingHorizontal:10
    }} >
        History
    </Text>
    <View style={{ backgroundColor:"#2E073F"  , height:69, alignItems:"center" , justifyContent:"center" ,margin:10 , borderRadius:8}}>

    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
            {' '}
           CIL009 Tyre Pressure Issue Solved 
          </Text>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({})