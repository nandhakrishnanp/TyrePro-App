import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Pages/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Data from './Pages/Data'
import Notification from './Pages/Notification'
import Profile from './Pages/Profile'
import TkphDisplay from './components/TkphDisplay'
import CameraPage from './Pages/Camera'
import Map from './components/Map'
import Pressure from './Pages/Pressure'


const stack = createNativeStackNavigator()
export default function App() {

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <stack.Screen name="Data" component={Data} options={{headerShown:false}} />
        <stack.Screen name="Notification" component={Notification} options={{headerShown:false}} />
        <stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
        <stack.Screen name="Tkph" component={TkphDisplay} options={{headerShown:false}} />
        <stack.Screen name ="Camera" component={CameraPage} options={{headerShown:false}}/>
        <stack.Screen name ="Map" component={Map} options={{headerShown:false}}/> 
        <stack.Screen name="Pressure" component={Pressure} options={{headerShown:false}}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

  bg:{
    backgroundColor:"white"
  }

})