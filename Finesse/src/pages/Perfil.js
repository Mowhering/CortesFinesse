import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Styles from '../components/styles/Styles';
import LogoHome from '../components/LogoHome';
import LogoPerfil from '../components/LogoPerfil';



export default function Perfil() {
  return (
    <SafeAreaView style={Styles.appDefault}>
      <ScrollView style={{ marginTop: 20 }} showsVerticalScrollIndicator={false}></ScrollView>
      <Text style={Styles.texthome} >Perfil </Text>
      <Text style={Styles.textInputConta}>Editar Conta</Text>
      <View style={Styles.containerPerfil}>
          <View style={{ width: "90%" }}>
            <Text style={Styles.tituloInput}>Login</Text>
          </View>
          <TextInput
            style={Styles.InputPerfil}
            onChangeText={(text) => editarConta('login', text)}
          />
          <View style={{ width: "90%" }}>
            <Text style={Styles.tituloInput}>Senha</Text>
          </View>
          <TextInput
            style={Styles.InputPerfil}
            secureTextEntry={true}
            onChangeText={(text) => editarConta('senha', text)}
          />
        </View>
        {/* BOTÃO DE SALVAR CONTA */}
        <View style={{ alignItems: "center" }}>
          <Pressable
            style={Styles.botaoSalvar}
          >
            <Text style={Styles.textBotaoSalvar}>Salvar</Text>
          </Pressable>
        </View>
        {/* EDITAR LOCALIZAÇÃO E CONTATO */}
        <Text style={Styles.textInputLocalizacao}>
          Editar localização e contato
        </Text>


        <View style={Styles.containerLocalizacao}>
          {/* ENDEREÇO */}
          <View style={{ width: "90%" }}>
            <Text style={Styles.tituloInput}>Endereço</Text>
          </View>
          <TextInput
            style={Styles.InputPerfil}
            onChangeText={(text) => editarContato('endereco', text)}
          />

          {/* TELEFONE */}
          <View style={{ width: "90%" }}>
            <Text style={Styles.tituloInput}>Telefone</Text>
          </View>
          <TextInput
            style={Styles.InputPerfil}
            onChangeText={(text) => editarContato('Telefone', text)}
          />
          <View style={{ width: "90%" }}>
            <Text style={Styles.tituloInput}>WhatsApp</Text>
          </View>
          <TextInput
            style={Styles.InputPerfil}
            onChangeText={(text) => editarContato('WhatsApp', text)}
          />
          
        </View>


        {/* BOTÃO DE SALVAR BARBEIRO */}
        <View style={{ alignItems: "center", marginBottom: 35 }}>
          <Pressable
            style={Styles.botaoSalvar}
          >
            <Text style={Styles.textBotaoSalvar}>Salvar</Text>
          </Pressable>
        </View>

    </SafeAreaView>
  
    
  );
}