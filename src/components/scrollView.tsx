import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import pix from '../assets/pix.png';
import boleto from '../assets/boleto.png';
import dinheiro from '../assets/dinheiro.png';
import transferir from '../assets/transferir.png';

export default function Opcoes (){
    return (
    <>
    <ScrollView style={styles.footerContentScrollView} showsHorizontalScrollIndicator={false} horizontal={true}>
      <View style={styles.footerCard}>
        <Image source={pix} />
        <Text style={styles.footerCardText}>Fazer um pix</Text>
      </View>
      <View style={styles.footerCard}>
        <Image source={boleto} />
        <Text style={styles.footerCardText}>Pagar um boleto</Text>
      </View>
      <View style={styles.footerCard}>
        <Image source={dinheiro} />
        <Text style={styles.footerCardText}>Fazer um depósito</Text>
      </View>
      <View style={styles.footerCard}>
        <Image source={transferir} />
        <Text style={styles.footerCardText}>Transferir</Text>
      </View>
    </ScrollView>
    </>
    );
} 

const styles = StyleSheet.create({
    footerCard: {
      width: 100,
      height: 127,
      backgroundColor: '#9500F6',
      elevation: 5,
      borderRadius: 20,
      padding: 20,
      justifyContent: "space-around",
      marginLeft: 10,
    },
    footerCardText: {
      color: "#fff",
      fontSize: 10,
      fontWeight: "600",
      lineHeight: 15,
    },
    footerContentScrollView: {
      height: 400,
    },
  });