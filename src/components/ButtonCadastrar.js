import { Text, TouchableOpacity, View } from "react-native";
import Styles from "./styles/Styles";


export default function ButtonCadastrar({ text, onPress }) {
  return (

    <TouchableOpacity style={Styles.ButtonCadastro} onPress={onPress} >
      <Text style={Styles.botaoCadastrartext}>{text}</Text>
    </TouchableOpacity>


  );
}

