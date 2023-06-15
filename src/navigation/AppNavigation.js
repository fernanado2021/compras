import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import ListProductScreen from "../screens/ListProductScreen";
import CarshoppingScreen from "../screens/CarshoppingScreen";
import {screen} from "../utils/screenName";
import FavoriteStack from "./FavoriteStack";
import ListProductStack from "./ListProductStack";
import CarshoppingStack from "./CarshoppingStack";
import AccountStack from "./AccountStack";

//Crear una instancia para la gestion de la navegacion
const Tab = createBottomTabNavigator();

export const AppNavigation = () =>{
    return(
        <Tab.Navigator screenOptions={({route})=>({
            headerShown: false,
            tabBarActiveTintColor: "#00a680",
            tabBarInactiveTintColor: "#646464",
            tabBarIcon:({color, size})=>screenOptions(route, color, size),
        })}>
            <Tab.Screen 
                name={screen.favorite.tab} 
                component={FavoriteStack} 
                options={{title: "Lista de Favoritos"}} 
            />
            
            <Tab.Screen 
                name={screen.list.tab} 
                component={ListProductStack}  
                options={{title: "Lista de Productos"}} 
            />
            
            {/* <Tab.Screen 
                name={screen.shoping.tab} 
                component={CarshoppingStack} 
                options={{title: "Carrito de Compras"}}  
            /> */}
            
            <Tab.Screen 
                name={screen.account.tab} 
                component={AccountStack}  
                options={{title: "Cuenta"}} 
            />
        </Tab.Navigator>
    );
};

const screenOptions =(route,color,size)=>{
    let icoName;

    if (route.name == screen.favorite.tab) {
        icoName = "star-check";
    }

    if (route.name == screen.list.tab) {
        icoName = "clipboard-list";
    }

    if (route.name == screen.shoping.tab) {
        icoName = "cart"
    }

    if (route.name == screen.account.tab) {
        icoName = "home-account"
    }

    return(
        <Icon type="material-community"  name={icoName} color={color} size={size} />
    )
}