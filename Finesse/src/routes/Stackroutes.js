import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { useState } from "react";
import Perfil from "../pages/Perfil";
import Inicio from "../pages/Inicio";

export default function StackRoutes() {
  const [signed,setSigned] = useState(false);
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false}}
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
    </Stack.Navigator>
  );
}
