import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import {getAuth, onAuthStateChanged} from "firebase/auth"
import UserGuestScreen from './UserGuestScreen/UserGuestScreen'
import UserLoggedScreen from './UserLoggedScreen'
import LoadingModal from '../../components/Shared/LoadingModal/LoadingModal'

const AccountScreen = () => {
  //useState
  const[hasLogged, setHasLogged]=useState(null);

  //useEffect
  useEffect(()=>{
    const auth=getAuth(); //si el usuario ha sido logeado
    onAuthStateChanged(auth,(user)=>{ //Si la autentificacion ha cambiado
      // console.log(user);
      setHasLogged(user != null ? true : false);
    }) 
  },[]);

  if (hasLogged == null) {
    return <LoadingModal show={true} text="Cargando" />;
  }

  return hasLogged == true ? <UserLoggedScreen /> : <UserGuestScreen />;
}

export default AccountScreen;