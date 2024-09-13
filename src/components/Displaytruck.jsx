import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axiosconfig';


export default function Displaytruck({navigation}) {
    const [truckdetails, setTruckdetails] = useState([]);
    const getTruckdetails = async()=>{
        try {
            
            const response = await axiosInstance.get('/truckdetails');
            console.log(response.data);
            setTruckdetails(response.data);
        } catch (error) {
            console.warn(error) ; 
                      
        }
    }
    useEffect(() => {
        getTruckdetails();
    }, []);
  return (
    <View style={{alignItems:"center"}}>
       
     {
        truckdetails && <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={truckdetails}
        keyExtractor={(item)=>item._id}
        renderItem={({item})=>(
            <Pressable onPress={()=>{
                navigation.navigate("Data",{item})
            }}>

            <View  style={{  backgroundColor:"#ece9ee", borderRadius:8 , margin:8 ,padding:10}}>

                <Image
                height={150}
                width={150}
                style={{objectFit:"contain"}}
                 source={{uri:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ce91dcca-1121-4f97-a939-7670aeeb8a64/dga3nlm-bf9110f6-2909-472a-88e9-fa77a29dcdd2.png/v1/fill/w_1280,h_800/caterpillar_797_by_franchumar_dga3nlm-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvY2U5MWRjY2EtMTEyMS00Zjk3LWE5MzktNzY3MGFlZWI4YTY0XC9kZ2EzbmxtLWJmOTExMGY2LTI5MDktNDcyYS04OGU5LWZhNzdhMjlkY2RkMi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.mVlvkbMn3m4yEZW672pY9IbhyY0WHvMZNsLX_ii1tQc"}}
                />
                <Text style={{textAlign:"center" , fontSize:17 , fontWeight:"bold" , color:"#2E073F"}}>
                    {item.registrationNumber}
                </Text>
                <Text style={{textAlign:"center" , fontSize:17 , fontWeight:"bold" , color:"#2E073F"}}>
                    
                    {item.model}
                </Text>
            </View>
            </Pressable>
        )}
        />
     }
    </View>
  )
}

const styles = StyleSheet.create({})