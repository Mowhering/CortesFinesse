import { Image, View } from 'react-native';
import Styles from './styles/Styles';
import logohome from '../assets/imgs/logohome.png';


export default function LogoHome() {
    return (
        <View>
            <Image source={logohome} style={Styles.logohome}/>  
        </View>
    )
          
}