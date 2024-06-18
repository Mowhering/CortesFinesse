import { Text, TouchableOpacity, View } from "react-native";
import Styles from "./styles/Styles";


export default function ButtonAgendar({ text, onPress }) {
  return (

    <TouchableOpacity style={Styles.ButtonAgendamento} onPress={onPress} >
      <Text style={Styles.botaoAgendarText}>{text}</Text>
    </TouchableOpacity>


  );
}

