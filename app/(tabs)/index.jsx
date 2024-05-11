import { Image, StyleSheet, Platform, Pressable, FlatList } from 'react-native'
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect,useState } from 'react';
import { Link } from 'expo-router';
export default function HomeScreen() {
  const [info,setInfo] = useState([]);
useEffect(()=>{
  fetch('https://api.themoviedb.org/3/discover/movie?with_original_language=hi&release_date.gte=2023-05-16&with_origin_country=IN&page=1', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
          "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzcyOWZmZGE5M2IzOTM2ZGNmYjM1NzRiN2QwZThlOSIsInN1YiI6IjY1MTgxNzI3YTE5OWE2MDBmZTc2MDA0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vSch5IN-bBtXO_kX3tW5iluzXzbKhfncwcBQhmmPGL4"
    }
  })
  .then(data=>data.json())
  .then(result=>setInfo(result.results))
  .catch(error=>console.error(error))},[])
   
  const renderItem = ({ item }) => (
    <Link href={"/movieinfo/" + item.id} key={item.id} asChild><Pressable>
    <Image source={fix+item.poster_path} contentFit="cover"/>
    <ThemedText>{item.title}</ThemedText>
    </Pressable></Link>
  );
 const fix ='https://image.tmdb.org/t/p/w440_and_h660_face/'
  return (
    <ThemedView >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Latest Movies</ThemedText>
        <FlatList data={info} showsVerticalScrollIndicator={false}  keyExtractor={item=>item.id.toString()}
        renderItem={renderItem}/>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ThemedView>
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
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
