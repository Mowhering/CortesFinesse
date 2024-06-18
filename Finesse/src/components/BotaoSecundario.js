import { TouchableOpacity, Text } from 'react-native';
import Styles from './styles/Styles';

export default function BotaoSecundario({ text }) {
    return (
        <TouchableOpacity style={Styles.button}>
            <Text style={Styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

