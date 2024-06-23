import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Styles from "./styles/Styles";


export default function Inputs({ text }) {
  return (
    <KeyboardAvoidingView>
      <Text style={Styles.textInputNome}>{text}</Text>
      <TextInput style={Styles.input} ></TextInput>
    </KeyboardAvoidingView>
  );
}

