import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screen} from "../utils/screenName";
import FavoriteScreen from "../screens/Favorites/FavoriteScreen";
import AddFavoriteScreen from "../screens/Favorites/AddFavoriteScreen";

//Instanciar componente
const Stack=createNativeStackNavigator();

const FavoriteStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name={screen.favorite.favorite} 
                component={FavoriteScreen} 
                options={{title: "Lista de Productos Favoritos"}} 
            />

            <Stack.Screen 
                name={screen.favorite.addFavorite} 
                component={AddFavoriteScreen} 
                options={{title: "Nuevo Producto Favorito"}} 
            />
        </Stack.Navigator>
    )
};

export default FavoriteStack;