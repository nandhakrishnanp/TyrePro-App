import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native';
import axiosInstance from '../../axiosconfig';



const Pressure = ({route}:any) => {
    const {data} = route.params;

    const registrationNumber = data.truck.registrationNumber;
   const [simuData , setSimuData] = useState<any>(0);
   const [dataval, setDataval] = useState<any>([]);
   const fetchTruckData = async () => {
     try {
       const response = await axiosInstance.get(
         `/truckdetails/${registrationNumber}`,
       );
       setDataval(response.data);
       console.log(response.data);
     } catch (error) {
       console.log(error);
     }
   };
   useEffect(()=>{
    const interval = setInterval(()=>{

      fetchTruckData();
      console.log("called from pressure");
      
    },3000)
   },[])

  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#2E073F',
          padding: 10,
        }}>
        Tyre Pressure Analysis
      </Text>
   
      { dataval.truck ? <View>
       
        

     
     <View style={{alignItems:"center" , position:"relative"}}>
     <Text style={{ borderRadius:10, borderColor:"black",borderWidth:1, padding:5, backgroundColor:"white",color:"black" , textAlign:"center", fontSize:16 , fontWeight:"bold" , position:"absolute" , left:62 , top:94}}>
     {dataval.truck.tyrePressure }
     </Text>
     <Text style={{ borderRadius:10, borderColor:"black",borderWidth:1, padding:5, backgroundColor:"white",color:"black" , textAlign:"center", fontSize:16 , fontWeight:"bold" , position:"absolute" , left:295 , top:94}}>
        {dataval.truck.tyrePressure-1 }
     </Text>

     <Text style={{ borderRadius:10, borderColor:"black",borderWidth:1, padding:5, backgroundColor:"white",color:"black" , textAlign:"center", fontSize:16 , fontWeight:"bold" , position:"absolute" , left:50 , top:390}}>
     {dataval.truck.tyrePressure+1 }
     </Text>
     <Text style={{ borderRadius:10, borderColor:"black",borderWidth:1, padding:5, backgroundColor:"white",color:"black" , textAlign:"center", fontSize:16 , fontWeight:"bold" , position:"absolute" , left:116 , top:450}}>
     {dataval.truck.tyrePressure-1 }
     </Text>
     <Text style={{ borderRadius:10, borderColor:"black",borderWidth:1, padding:5, backgroundColor:"white",color:"black" , textAlign:"center", fontSize:16 , fontWeight:"bold" , position:"absolute" , left:310 , top:390}}>
     {dataval.truck.tyrePressure+1 }
     </Text>
     <Text style={{ borderRadius:10, borderColor:"black",borderWidth:1, padding:5, backgroundColor:"white",color:"black" , textAlign:"center", fontSize:16 , fontWeight:"bold" , position:"absolute" , left:250 , top:450}}>
     {dataval.truck.tyrePressure+1 }
     </Text>
     <Image style={{width:250 , height:500}} source={{uri:"https://i.postimg.cc/nrZPz9r3/Chassis-removebg-preview.png"}}  />


</View>
    
        
        

        <Text
        style={{
          textAlign: 'right',
          paddingRight: 10,
          color: 'green',
          fontSize: 18,
          fontWeight: '800',
        }}>
        {' '}

        <Icon name="cog" size={18} color="green" /> Running {' '}
      </Text>

      <Text style={{color:"black" , textAlign:"center" ,fontSize:20, padding:10, fontWeight:"600" }}>Realtime Data 

        <Text style={{color:"green"}}> (PSI)</Text>
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
            Tyre Pressure Avg  {'\n'}
            <Text style={{color: 'white', fontSize: 50}}>
              {dataval.truck.tyrePressure}
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
            Min Pressure {'\n'}
            <Text style={{color: 'white', fontSize: 50}}>
            {dataval.truck.tyrePressure -2}
            </Text>{' '}
            PSI
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
           Max Pressure {'\n'}
            <Text style={{color: 'white', fontSize: 50}}>
              {' '}
              {dataval.truck.tyrePressure+2}
            </Text>
            PSI
          </Text>
        </View>
      </View>
      </View>
 :<Text style={{ alignItems:"center" , justifyContent:"center" , fontSize:20 , padding:10}}>loading.. </Text> }


    </ScrollView>
  )
}

export default Pressure

const styles = StyleSheet.create({})