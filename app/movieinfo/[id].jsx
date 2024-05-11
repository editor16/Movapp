import React,{useEffect,useState} from 'react'
import { Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router'
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
function id() {
  const { id } = useLocalSearchParams();
  const [info,setInfo] = useState(null);
   const fix ='https://image.tmdb.org/t/p/w440_and_h660_face/'
  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/'+id+'?language=en-US', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzcyOWZmZGE5M2IzOTM2ZGNmYjM1NzRiN2QwZThlOSIsInN1YiI6IjY1MTgxNzI3YTE5OWE2MDBmZTc2MDA0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vSch5IN-bBtXO_kX3tW5iluzXzbKhfncwcBQhmmPGL4"
        }
      })
      .then(data=>data.json())
      .then(result=>setInfo(result))
    },[])
  return (
    <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">{id}</ThemedText>

 {info&&<ThemedView><ThemedText type="title">{info.title}</ThemedText>
 <Image source={fix+info.poster_path} contentFit="cover"/></ThemedView>}
    </ThemedView>
  )
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

export default id
