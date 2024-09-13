import { Button, Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera'
import axiosInstance from '../../axiosconfig'


export default function CameraPage({navigation}: any) {
    const [codeScanned, setCodeScanned] = React.useState<string | null>(null)
    const device = useCameraDevice('back')


    const codeScanner = useCodeScanner({
        codeTypes: ['qr'],
        onCodeScanned: codes  => {
          if (codes.length > 0) {
            if (codes[0].value) {

              setTimeout(() => {setCodeScanned(codes[0]?.value) 
                navigateToData()
                
              }  , 500);

             
            }
          }
          return;
        },
      });

      
      const { hasPermission, requestPermission } = useCameraPermission()
      if (!hasPermission) {
          return (
              <View>
                <Text>Camera permission is required</Text>
                <Button title="Request permission" onPress={requestPermission} />
            </View>
        )
    }
    if(!device) {
        return <Text>Device not found </Text>
    }
    
    const navigateToData = async ()=>{
        if(codeScanned&&codeScanned.length>0){
            try {
                const response = await axiosInstance.get(`/${codeScanned}`);
                const item = response.data;
                if(item){

                    navigation.navigate("Data", {item:item})
                }
            } catch (error) {
                console.log(error);
                
            }
           
            
        }
    }
  
  
  

  return (
    <SafeAreaView style={styles.safeArea} >

       


         <Camera
      style={styles.fullScreenCamera}
      device={device}
      isActive={true}
      codeScanner={codeScanner}
    />
 
   
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    fullScreenCamera: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        flex: 1,
        zIndex: 100,
      },
      safeArea: {
        position: 'absolute',
        width: '100%',
        height: '100%',
      },
})