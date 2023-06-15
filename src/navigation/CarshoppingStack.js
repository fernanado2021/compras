import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screen} from "../utils/screenName";
import CarshoppingScreen from "../screens/CarshoppingScreen";

//Instanciar componente
const Stack=createNativeStackNavigator();

const CarshoppingStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name={screen.shoping.carshopping} 
                component={CarshoppingScreen} 
                options={{title: "Carrito de Compras"}} 
            />
        </Stack.Navigator>
    )
};

export default CarshoppingStack;