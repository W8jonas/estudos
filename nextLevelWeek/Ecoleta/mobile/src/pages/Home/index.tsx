import React, {useState} from 'react'
import { View, Image, Platform, KeyboardAvoidingView, TextInput, Text, ImageBackground } from 'react-native'
import { RectButton } from "react-native-gesture-handler"
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from "@react-navigation/native"
import styles from './styles'


const Home = () => {
  const navigation = useNavigation()
  
  const [uf, setUf] = useState('')
  const [city, setCity] = useState('')

  function handleNavigateToPoints() {
    navigation.navigate('Points', {
		uf, city
	})
  }

  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
      <ImageBackground 
          source={require('../../assets/home-background.png')}
          style={styles.container}
          imageStyle={{ width: 274, height: 368}}
      >

          <View style={styles.main}>
              <Image source={require('../../assets/logo.png')}/>
			  <View>
				<Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
				<Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleda de forma eficiente</Text>
			  </View>
          </View>

          <View style={styles.footer}>
            
            <TextInput
              style={styles.input}
              placeholder="digite a UF"
			  onChangeText={(item)=>setUf(item)}
			  value={uf}
			  maxLength={2}
			  autoCapitalize={"characters"}
			  autoCorrect={false}
            />

            <TextInput
              style={styles.input}
              placeholder="digite a cidade"
			  onChangeText={(item)=>setCity(item)}
			  autoCorrect={false}
			  value={city}
            />

              <RectButton style={styles.button} onPress={handleNavigateToPoints}>
                  <View style={styles.buttonIcon}>
                      <Icon name="arrow-right" color="#FFF" size={24}/>
                  </View>
                  <Text style={styles.buttonText}>Entrar</Text>
              </RectButton>
          </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}


export default Home