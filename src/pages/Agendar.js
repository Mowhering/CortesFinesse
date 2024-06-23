import { Text, TextInput, View } from "react-native";
import ButtonLogin from "../components/ButtonLogin";
import Styles from "../components/styles/Styles";
import Titulos from "../components/Titulo"; 
import Inputs from "../components/Inputs";



export default function Agendar({navigation}) {
    return (
        <View style={Styles.appDefault}>
            <Titulos>Agendar</Titulos>          
            <Inputs text={"Nome"}/> 
            <Inputs text={"Data"}/> 
            <Inputs text={"Horario"}/> 
            <Inputs text={"Servico"}/> 
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        </View>
            <ButtonLogin text={"Enviar"} onPress={() => {navigation.navigate('Home')}} />             
            </View>
    );
}