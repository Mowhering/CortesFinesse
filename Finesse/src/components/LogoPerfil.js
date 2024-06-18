import { Image, Text, View } from 'react-native';
import Styles from './styles/Styles';
import logoperfil from '../assets/imgs/logoperfil.png';


export default function LogoPerfil() {
    return (
        <View style={Styles.containerLogoPerfil}>
            <Image source={logoperfil} style={Styles.logoperfil} />
        </View>
    )

}