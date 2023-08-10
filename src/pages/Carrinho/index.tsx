import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import { Text, View, StyleSheet, Image } from "react-native";
import topo from '../../../assets/topo.png';

export default function Carrinho() {
  return(
      <View style={styles.container}>
         <Image source={topo} style={styles.topo}/>
      </View>
       );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeee',
      },
    topo:{
        width: '100%',  
    }
  });