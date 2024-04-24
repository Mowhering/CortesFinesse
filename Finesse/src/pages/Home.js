import { Text, View } from 'react-native';
import LogoHome from '../components/LogoHome';
import BotaoSecundario from '../components/BotaoSecundario';
import Styles from '../components/styles/Styles';
import ButtonPerfil from '../components/ButtonPerfil';



export default function Home({navigation}) {
  return (
    <View style={Styles.appDefault}>
      <LogoHome />
      <Text style={Styles.texthome} >Gerencie {'\n'} sua Barbearia</Text>
      <BotaoSecundario text={'Agendamentos'}/>
      <BotaoSecundario text={'Serviços'}/>
      <BotaoSecundario text={'Clientes'}/>
      <ButtonPerfil text={'Perfil'} onPress={() => {navigation.navigate('Perfil')}} />
    </View>
  );
}