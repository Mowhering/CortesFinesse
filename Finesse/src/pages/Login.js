import { Text, TextInput, View } from "react-native";
import ButtonLogin from "../components/ButtonLogin";
import Styles from "../components/styles/Styles";
import Titulos from "../components/Titulo";
import Logo from "../components/Logo";
import Inputs from "../components/Inputs";
import ButtonCadastrar from "../components/ButtonCadastrar";


export default function Login({ navigation }) {
    return (
        <View style={Styles.appDefault}>
            <Logo />
            <Titulos>Login</Titulos>
            <Inputs text={"E-mail"} />
            <Text style={Styles.textInputSenha}>Senha</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                    secureTextEntry={true} style={Styles.input}
                />
            </View>
            <ButtonCadastrar text={"Não tem uma conta? Cadastre-se"} onPress={() => { navigation.navigate('Cadastro') }} />
            <View>

            </View>
            <ButtonLogin text={"Entrar"} onPress={() => { navigation.navigate('Home') }} />
                
        </View>
    );
}