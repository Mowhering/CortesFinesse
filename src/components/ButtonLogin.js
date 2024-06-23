import { Text, TouchableOpacity, View } from "react-native";
import Styles from "./styles/Styles";


export default function ButtonLogin({ text, onPress }) {
  return (

    <TouchableOpacity style={Styles.button} onPress={onPress} >
      <Text style={Styles.textbuttonentrar}>{text}</Text>
    </TouchableOpacity>


  );
}

