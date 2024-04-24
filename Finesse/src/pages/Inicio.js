import { Text, View } from "react-native";
import BotaoSecundario from "../components/BotaoSecundario";
import LogoHome from "../components/LogoHome";
import Styles from "../components/styles/Styles";
import ButtonLogin from "../components/ButtonLogin";
import Titulos from "../components/Titulo"; 

export default function Inicio({ navigation }) {
    return (
      <View style={Styles.appDefault}>
        <LogoHome/>
        <Titulos>Bem Vindo</Titulos>          
        <ButtonLogin onPress={() => {navigation.navigate('Login')}} text={'Sou Cliente'}/>
        <BotaoSecundario onPress={() => {navigation.navigate('LoginB')}} text={'Sou Administrador'} />
      </View>
    );
  }
  
  