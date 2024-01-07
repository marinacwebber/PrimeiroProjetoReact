import { Image, StyleSheet, Dimensions, View } from 'react-native'; 

import Texto from '../../componentes/Texto';

import topo from '../../../assets/topo.png';
import logo from '../../../assets/logo.png';


const width = Dimensions.get('screen').width;

export default function Cesta() {
  return <>
    <Image source={topo} style={estilos.topo}/>
    <Texto style={estilos.titulo}>Detalhes da cesta</Texto>
    
    <View style={estilos.cesta}>
      <Texto style={estilos.nome}>Cesta de Verduras</Texto>
        <View style={estilos.fazenda}>
          <Image style={estilos.imagemFazenda} source={logo} />
          <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>        
      <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da 
            fazenda direto para sua cozinha</Texto>
      <Texto style={estilos.preco}>R$ 40,00</Texto>
    </View>  
  </>
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%", //ocupa 100% da tela mas manteve a mesma altura
    height: 578 / 768 * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    color: "white",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
    padding: 16
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 26,
  },
  nome: {
    fontSize: 24,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,    
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 42
  }
});