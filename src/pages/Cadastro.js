import { Text, TextInput, View } from "react-native";
import ButtonLogin from "../components/ButtonLogin";
import Styles from "../components/styles/Styles";
import Titulos from "../components/Titulo"; 
import Inputs from "../components/Inputs";



export default function Cadastro({navigation}) {
    return (
        <View style={Styles.appDefault}>
            <Titulos>Criar Conta</Titulos>          
            <Inputs text={"E-mail"}/> 
            <Inputs text={"Nome"}/> 
            <Inputs text={"Celular"}/> 
            <Text style={Styles.textInputSenha}>Senha</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
            secureTextEntry={true} style={Styles.input}
            />
        </View>
            <ButtonLogin text={"Enviar"} onPress={() => {navigation.navigate('Home')}} />             
            </View>
    );
}