import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import topo from '../../../assets/topo.png';
import logo from '../../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Carrinho() {
  return(
    <>
         <Image source={topo} style={styles.topo}/>
         <Text style={styles.titulo}>Detalhes do Carrinho</Text>
         <View style={styles.carrinho}>
           <Text  style={styles.nome}>Carrinho de Compras</Text>

           <View style={styles.fazenda}>
             <Image source={logo} style={styles.imagemfazenda}/>
           <Text style={styles.nomefazenda}>Fazenda Etec Cidade do Livro</Text>
           </View>

           <Text style={styles.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a sua cozinha.</Text>
           <Text  style={styles.preco}>R$ 40,00</Text>
         </View>
      </>
       );
}

const styles = StyleSheet.create({
    topo:{
        width: '100%',  
        height: 578 / 786 * width,
    },
    titulo:{
      width: '100%',
      position: 'absolute',
      color: 'white',
      textAlign: 'center',
      fontSize: 24,
      lineHeight: 26,
      padding: 16,
      fontFamily: 'MontserratBold'
    },
    carrinho:{
      paddingVertical: 8,
      paddingHorizontal: 16
    },
    nome:{
      fontSize: 26,
      lineHeight: 42,
      color:"#464646",
      fontFamily: 'MontserratBold'
    },
    fazenda:{
      flexDirection: "row",
      paddingVertical: 12
    },
    imagemfazenda:{
      width: 32,
      height: 32
    },
    nomefazenda:{
      fontSize: 16,
      fontFamily: "MontserratBold",
      lineHeight: 26,
      marginLeft: 12
    },
    descricao:{
      color: "#a3a3a3",
      fontFamily: "MontserratItalic",
    },
    preco:{
      fontSize:26,
      fontFamily: 'MontserratRegular',
      color:"#2a9f85",
      marginTop: 8,
    }
  });