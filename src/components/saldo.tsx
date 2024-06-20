import { Image, StyleSheet, Text, View } from "react-native";
import wallet from '../assets/Wallet.png';

export default function Saldo () {
    return (
        <>
    <View style={styles.cardDetails}>
        <View style={styles.cardDetailsHeader}>
            <Text style={styles.cardDetailsHeaderText}>Saldo disponível</Text>
            <Image source={wallet}/>
        </View>
        <Text style={styles.cardDetailsText}>R$ 300,00</Text>
    </View>
        </>
    );
}

const styles = StyleSheet.create({
    cardDetails: {
      width: "100%",
      height: 120,
      backgroundColor: '#9500F6',
      borderRadius: 20,
      elevation: 5,
      padding: 20,
      justifyContent: "space-between",
    },
    cardDetailsHeader: {
      justifyContent: "space-between",
      flexDirection: "row",
    },
    cardDetailsText: {
      color: "#fff",
      fontSize: 34,
      fontWeight: "600",
    },
    cardDetailsHeaderText: {
      color: "#fff",
    },
  });
  