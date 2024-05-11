import { Image, StyleSheet, Platform, Pressable, FlatList } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect,useState } from 'react';
import { Link } from 'expo-router';
export default function HomeScreen() {
  const [info,setInfo] = useState([]);
  fetch('https://api.themoviedb.org/3/discover/movie?with_original_language=hi&release_date.gte=2023-05-16&with_origin_country=IN&page=1', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
          "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzcyOWZmZGE5M2IzOTM2ZGNmYjM1NzRiN2QwZThlOSIsInN1YiI6IjY1MTgxNzI3YTE5OWE2MDBmZTc2MDA0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vSch5IN-bBtXO_kX3tW5iluzXzbKhfncwcBQhmmPGL4"
    }
  })
  .then(data=>data.json())
  .then(result=>setInfo(result.results))
 const fix ='https://image.tmdb.org/t/p/w440_and_h660_face/'
  return (
    <ParallaxScrollView
     >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Latest Movies</ThemedText>
        <FlatList data={info} showsVerticalScrollIndicator={false}  
        renderItem={({element})=>{
<Link href={"/movieinfo/" + element.id} key={element.id} asChild><Pressable>
                <Image source={fix+element.poster_path} contentFit="cover"/>
                <ThemedText>{element.title}</ThemedText>
                </Pressable></Link>
        }} />
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
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
