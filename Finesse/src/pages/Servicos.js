import { Text, View } from "react-native";
import Styles from "../components/styles/Styles";
import Titulos from "../components/Titulo";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Servicos() {
  return (
    <><SafeAreaView style={Styles.appDefault2}>

      <Titulos>Serviços</Titulos>
      <View style={{ ...Styles.containerLocalizacao2 }}>
        <View style={{ width: "50%" }}>
          <Text style={Styles.tituloInput2}> Barba {'\n'} R$35,00 {'\n'} </Text>
          <Text style={Styles.tituloInput3}> Duração: 30 min </Text>

        </View>
      </View>
      <View style={{ ...Styles.containerLocalizacao2 }}>
        <View style={{ width: "50%" }}>
          <Text style={Styles.tituloInput2}> Cortes {'\n'} R$50,00 {'\n'} </Text>
          <Text style={Styles.tituloInput3}> Duração: 45 min </Text>
        </View>
      </View>


      <View style={{ ...Styles.containerLocalizacao2 }}>
        <View style={{ width: "50%" }}>
          <Text style={Styles.tituloInput2}> Sobrancelha {'\n'} R$20,00 {'\n'} </Text>
          <Text style={Styles.tituloInput3}> Duração: 30 min </Text>
        </View>
      </View>
      <View style={{ ...Styles.containerLocalizacao2 }}>
        <View style={{ width: "50%" }}>
          <Text style={Styles.tituloInput2}> Pintura {'\n'} R$50,00 {'\n'} </Text>
          <Text style={Styles.tituloInput3}> Duração: 45 min </Text>
        </View>


      </View>


    </SafeAreaView></>
  );
}

