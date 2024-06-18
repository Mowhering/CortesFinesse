import { Text, TouchableOpacity, View } from "react-native";
import Styles from "./styles/Styles";


export default function ButtonSalvar({ text, onPress }) {
  return (

    <TouchableOpacity style={Styles.ButtonSalvar} onPress={onPress} >
      <Text style={Styles.botaoSalvartext}>{text}</Text>
    </TouchableOpacity>


  );
}

