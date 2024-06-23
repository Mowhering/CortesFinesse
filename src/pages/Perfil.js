import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import Styles from '../components/styles/Styles';
import LogoHome from '../components/LogoHome';
import ButtonSalvar from '../components/ButtonSalvar';



export default function Perfil({ navigation }) {
  return (
    <SafeAreaView style={Styles.appDefault}>
      <LogoHome />
      <ScrollView style={{ marginTop: 30, }} showsVerticalScrollIndicator={false}></ScrollView>
      <Text style={Styles.texthome} >Editar Informações de Contato </Text>
      {/* EDITAR LOCALIZAÇÃO E CONTATO */}

      <View style={Styles.containerLocalizacao}>
        {/* ENDEREÇO */}
        <View style={{ width: "90%" }}>
          <Text style={Styles.tituloInput}>Endereço</Text>


        </View>
        <TextInput
          style={Styles.InputPerfil}

        />
        {/* TELEFONE */}
        <View style={{ width: "90%" }}>
          <Text style={Styles.tituloInput}>Telefone</Text>
        </View>
        <TextInput
          style={Styles.InputPerfil}

        />
        {/* WHATSAPP */}
        <View style={{ width: "90%" }}>
          <Text style={Styles.tituloInput}>WhatsApp</Text>
        </View>
        <TextInput
          style={Styles.InputPerfil}
        />

      </View>


      {/* BOTÃO DE SALVAR BARBEIRO */}
      <View>
        <ButtonSalvar text={"Salvar"} onPress={() => { navigation.navigate('Home') }} />
      </View>

    </SafeAreaView>


  );
}