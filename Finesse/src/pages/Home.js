import { Text, View } from 'react-native';
import LogoHome from '../components/LogoHome';
import Styles from '../components/styles/Styles';
import ButtonPerfil from '../components/ButtonPerfil';
import ButtonServicos from '../components/ButtonServicos';



export default function Home({ navigation }) {
  return (
    <View style={Styles.appDefault}>
      <LogoHome />
      <Text style={Styles.texthome} >Barbearia {'\n'} Finesse</Text>
      <ButtonPerfil text={'Agendamentos'} onPress={() => { navigation.navigate('Agendamentos') }} />
      <ButtonServicos text={'Serviços'} onPress={() => { navigation.navigate('Servicos') }} />
      <ButtonPerfil text={'Perfil'} onPress={() => { navigation.navigate('Perfil') }} />
    </View>
  );
}