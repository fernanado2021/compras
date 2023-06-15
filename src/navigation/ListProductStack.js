import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screen} from "../utils/screenName";
import ListProductScreen from "../screens/ListProductScreen";
//Instanciar componente
const Stack=createNativeStackNavigator();

const ListProductStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name={screen.list.listproduct} 
                component={ListProductScreen} 
                options={{title: "Lista de Productos"}} 
            />
        </Stack.Navigator>
    )
};

export default ListProductStack;