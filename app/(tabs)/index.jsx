import { Image, StyleSheet } from 'react-native'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
export default function HomeScreen() {
const menu =[{title:"Veg Plater",imag:"menu-1.jpg"},{title:"egg fries",imag:"menu-2.jpg"},{title:"Olive pizza",imag:"menu-3.jpg"},{title:"Salad world",imag:"menu-5.jpg"},{title:"Fries",imag:"menu-6.jpg"},{title:"Tandoori pizza",imag:"menu-7.jpg"}]
  
 const fix ="https://webtonrestraunts.netlify.app/img/"
  return (
    <ParallaxScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Most Popular Items</ThemedText>
       </ThemedView>
        {menu.map((item)=>{
          return <ThemedView>
          <Image source={fix+item.imag} style={{ alignSelf: 'center' }} />
          <ThemedView>
        <ThemedView style={styles.stepContainer}>
           <ThemedText type="title">{item.title}</ThemedText>
       <ThemedText style={{color:"#e8a541"}}>$115</ThemedText>
       </ThemedView>
       <ThemedText>Ipsum ipsum clita erat amet dolor justo diam</ThemedText></ThemedView>
       </ThemedView>
        })}
      
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  }
});
