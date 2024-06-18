import { Image, View } from 'react-native';
import Styles from './styles/Styles';
import logoapp from '../assets/imgs/logoapp.png';


export default function Logo() {
    return (
        <View>
            <Image source={logoapp} style={Styles.logoBarbearia} />
        </View>
    )

}