import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    content:{
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    image: {
        resizeMode: "contain",
        height: 150,
        width: "100%",
        marginTop: 20,
    },
    text1:{
        marginTop:15,
        fontSize:30,
        textAlign:'center',
        fontWeight: 'bold',
    },
    text2:{
        fontSize:20,
        textAlign:'center',
        fontWeight: 'bold',
    }
});
