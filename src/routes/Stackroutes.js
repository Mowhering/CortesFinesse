import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { useState } from "react";
import Perfil from "../pages/Perfil";
import Inicio from "../pages/Inicio";
import Servicos from "../pages/Servicos";
import Cadastro from "../pages/Cadastro";
import Agendar from "../pages/Agendar";
import Agendamentos from "../pages/Agendamentos";


export default function StackRoutes() {
  const [signed, setSigned] = useState(false);
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      {
        /** 
      {!signed ?
        (
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        ) :
        (
          <>
            <Stack.Screen name="Home" component={Home} />         
          </>
        )
      }
      */
      }
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Servicos" component={Servicos} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Agendamentos" component={Agendamentos} />
      <Stack.Screen name="Agendar" component={Agendar} />
    </Stack.Navigator>
  );
}
