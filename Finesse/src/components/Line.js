import { Image, View } from 'react-native';
import Styles from './styles/Styles';
import line from '../assets/imgs/line.png';


export default function Line() {
    return (
        <View>
            <Image source={line} style={Styles.TESTELINE} />
        </View>
    )

}