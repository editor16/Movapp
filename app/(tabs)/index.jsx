import { Image, StyleSheet } from 'react-native'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText';
import { useFonts } from 'expo-font';
import {Cookie_400Regular} from '@expo-google-fonts/cookie'
import { ThemedView } from '@/components/ThemedView';
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react';
SplashScreen.preventAutoHideAsync();
export default function HomeScreen() {
  const fix ="https://webtonrestraunts.netlify.app/img/"
const menu =[{title:"Veg Plate",imag:"menu-1.jpg"},{title:"Egg & Fries",imag:"menu-2.jpg"},{title:"Olive pizza",imag:"menu-3.jpg"},{title:"Salad world",imag:"menu-5.jpg"},{title:"Fries",imag:"menu-6.jpg"},{title:"Tandoori pizza",imag:"menu-7.jpg"}]
  const [loaded] = useFonts({
        Cookie_400Regular,
          });
     useEffect(() => {
            if (loaded) {
              SplashScreen.hideAsync();
            }
          }, [loaded]);
        
          if (!loaded) {
            return null;
          }
        

  return (
    <ParallaxScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{color:"#e8a541",fontFamily:"Cookie_400Regular"}}>Food Menu</ThemedText>
        <ThemedText type="title">Most Popular Items</ThemedText>
       </ThemedView>
        {menu.map((item,index)=>{
          return <ThemedView style={{flex:1,gap:15,flexDirection:"row"}} key={index}>
          <Image alt='Check internet' source={{uri:fix+item.imag}} style={{marginTop:9,marginBottom:9,width:100,flex:1}} />
          <ThemedView style={{flex:3}}>
        <ThemedView style={styles.stepContainer}>
           <ThemedText type="subtitle">{item.title}</ThemedText>
       <ThemedText type="subtitle" style={{color:"#e8a541"}}>$115</ThemedText>
       </ThemedView>
       <ThemedText>Ipsum ipsum clita erat amet dolor justo diam</ThemedText></ThemedView>
       </ThemedView>
        })}
      
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {  flexDirection: 'column', marginTop:8,
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    justifyContent:"space-between",
    marginBottom: 8,
    paddingBottom:12,
borderColor:"gray",
borderBottomWidth:1,
    flex:1,
  flexDirection: 'row',
  }
});
