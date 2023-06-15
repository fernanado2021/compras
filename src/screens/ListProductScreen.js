import React, { useState } from 'react';
import { View, Text, FlatList, Image , StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Button } from '@rneui/base'
import {screen} from "../utils/screenName"
import { Icon } from '@rneui/base'

const ListProductScreen = (props) => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Cola Pepsi de  1 L ' , precio: 0.50, imagen: require('../../assets/img/pepsi.png') },
    { id: 2, nombre: 'Fideo-Chinito 400 G ' , precio: 1.89, imagen: require('../../assets/img/fideo.png') },
    { id: 3, nombre: 'Aceite La Favorita 1L' , precio: 2.79 , imagen: require('../../assets/img/aceite.png') },
    { id: 4, nombre: 'Ron Pon Pon 750 Ml' , precio: 4.59 , imagen: require('../../assets/img/ron1.png') },
    { id: 5, nombre: 'Cafe Don Cafe 50 G' , precio: 1.57 , imagen: require('../../assets/img/cafe.png') },
  ]);
  
  const [carrito, setCarrito] = useState([]);
  
  const [precioTotal, setPrecioTotal] = useState(0);
  const [iva, setIVA] = useState(0);
  const [descuento, setDescuento] = useState(0);
  const [precioFinal, setPrecioFinal] = useState(0);

  const agregarAlCarrito = (producto) => {
    const nuevoCarrito = [...carrito];
    const productoEnCarrito = nuevoCarrito.find((item) => item.id === producto.id);
  
    if (productoEnCarrito) {
      productoEnCarrito.cantidad += 1;
    } else {
      nuevoCarrito.push({ ...producto, cantidad: 1 });
    }
  
    setCarrito(nuevoCarrito);
  };
  
  const quitarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
  };
  
  const aumentarCantidad = (id) => {
    const nuevoCarrito = [...carrito];
    const productoEnCarrito = nuevoCarrito.find((item) => item.id === id);
  
    if (productoEnCarrito) {
      productoEnCarrito.cantidad += 1;
    }
  
    setCarrito(nuevoCarrito);
  };
  
  const disminuirCantidad = (id) => {
    const nuevoCarrito = [...carrito];
    const productoEnCarrito = nuevoCarrito.find((item) => item.id === id);
  
    if (productoEnCarrito && productoEnCarrito.cantidad > 1) {
      productoEnCarrito.cantidad -= 1;
    }
  
    setCarrito(nuevoCarrito);
  };

  const calcularPrecios = () => {
    const precioTotalCalculado = carrito.reduce((total, item) => {
      return total + item.precio * item.cantidad;
    }, 0);
    
    setPrecioTotal(precioTotalCalculado);
    
    const ivaCalculado = precioTotalCalculado * 0.12;
    setIVA(ivaCalculado);
    
    const descuentoCalculado = precioTotalCalculado * 0.05;
    setDescuento(descuentoCalculado);
    
    const precioFinalCalculado = precioTotalCalculado+(ivaCalculado - descuentoCalculado);
    setPrecioFinal(precioFinalCalculado);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={item.imagen} style={{ width: 40, height: 40, marginRight: 10 }} />
            <Text>{item.nombre}</Text>
            <Text>$ {item.precio}</Text>
            <Button size="xs" onPress={() => agregarAlCarrito(item)} color="red" ><Icon name="shopping-cart" color="white" /></Button>
          </View>
        )}
      />

      <Text style={styles.title}>Carrito de compras</Text>
      <FlatList
        data={carrito}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.carrito} >
            <View style={styles.productItem}>
              <Image source={item.imagen} style={{ width:40, height: 40, marginRight: 7 }} />
              <Text>{item.nombre}</Text>
              <Button size="xs" onPress={() => quitarDelCarrito(item.id)} color="#ccd1d1"><Icon name="delete-forever" color="white" /></Button>
            </View>
            <View style={styles.productItem}>
              <Button size="xs" onPress={() => disminuirCantidad(item.id)} ><Icon name="remove" color="white" /></Button>
              <Text>Cantidad Productos: {item.cantidad}</Text>
              <Button size="xs" onPress={() => aumentarCantidad(item.id)} ><Icon name="add" color="white" /></Button>
              <Text style={styles.precioc}>$: {item.precio * item.cantidad}</Text>
            </View>
          </View>
          
        )}
      />

      <Text style={styles.title}>Facturación</Text>
      <View style={styles.productItem}>
        <Text>Sub Total: $ {precioTotal.toFixed(2)}</Text>
        <Text>IVA: $ {iva.toFixed(2)}</Text>
      </View>
      <View style={styles.productItem}>
        <Text>Descuento: $ {descuento.toFixed(2)}</Text>
        <Text>Precio final:$ {precioFinal.toFixed(2)}</Text>
      </View>
        <Button size="xs" title="Calcular precios" onPress={calcularPrecios} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carrito:{
    marginTop: '4%',
  },
  precioc:{
    color: "#f02323"
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
});

export default ListProductScreen;