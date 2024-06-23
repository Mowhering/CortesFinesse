import { Text } from "react-native";
import Styles from "./styles/Styles";


export default function TextoDoTituloAgen(props) {
    return (
        <Text style={Styles.textoDoTituloAg}>{props.children}</Text>

    )
}