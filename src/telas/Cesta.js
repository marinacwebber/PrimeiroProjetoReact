import { Image, StyleSheet, Dimensions, Text } from 'react-native'; 
import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
  return <>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhes da cesta</Text>
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
  }
});