import { Text, TouchableOpacity, View } from "react-native";
import Styles from "./styles/Styles";


export default function Buttonname({ text, onPress }) {
  return (

    <TouchableOpacity style={Styles.Buttonname1} onPress={onPress} >
      <Text style={Styles.botaonametext}>{text}</Text>
    </TouchableOpacity>


  );
}

