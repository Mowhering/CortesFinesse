import { View, Text, StyleSheet } from 'react-native';
import Styles from '../components/styles/Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import TitulosAg from "../components/TituloAg";
import ButtonAgendar from '../components/ButtonAgendar';
import React from 'react';




export default function Agendamentos() {
  const items = [
    {
      name: "dennis",
      service: "corte",
      time: "111111",
    },
    {
      name: "colossal",
      service: "corte",
      time: "222222",
    }
  ]

  return (

    <SafeAreaView style={Styles.appDefault}>
      <TitulosAg> Agendamentos </TitulosAg>
      <View style={{ flexDirection: 'row', marginTop: 40, marginBottom: 40 }}>
        <ButtonAgendar text={"+ Agendar"} />
      </View>

      <View style={{ flexDirection: 'column', width: '100%' }}>
        <View style={{ flexDirection: 'column', width: '100%' }}>
          {items.map(item => (
            <TableRow
              key={item.id}
              title={item.name}
              description={item.service}
            />
          ))}
        </View>
      </View>


    </SafeAreaView>

  );

}
const TableRow = ({ title, description }) => (
  <View style={{ flexDirection: 'row' }}>
    <View style={{ width: 'auto', alignItems: 'flex-start' }}>
      <Text>{title}</Text>
    </View>
    <View style={{ flex: 3, alignItems: 'flex-start' }}>
      <Text>{description}</Text>
    </View>

    <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />

  </View>
);
