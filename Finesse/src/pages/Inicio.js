import { Text, View } from "react-native";
import LogoHome from "../components/LogoHome";
import Styles from "../components/styles/Styles";
import ButtonLogin from "../components/ButtonLogin";
import Titulos from "../components/Titulo";

export default function Inicio({ navigation }) {
  return (
    <View style={Styles.appDefault}>
      <LogoHome />
      <Titulos>Bem Vindo  </Titulos>
      <ButtonLogin onPress={() => { navigation.navigate('Login') }} text={'Entrar'} />

    </View>
  );
}

