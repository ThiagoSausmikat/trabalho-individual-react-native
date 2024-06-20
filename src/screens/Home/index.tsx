import { Image, StyleSheet, Text, View } from 'react-native';
import logo from '../../assets/logo.png';
import setting from '../../assets/setting.png';
import mastercard from '../../assets/mastercard.png';
import Opcoes from '../../components/scrollView';
import Saldo from '../../components/saldo';

export function Home() {
  return (
    <View style={styles.container}>
     
      <View style={styles.content}>
      
      <View style={styles.header}>
        <Image source={logo}/>
        <Image source={setting}/>
    </View>

    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View />
        <Image source={mastercard}/>
      </View>
      <Text style={styles.cardText}>Thiago Moura</Text>
    </View>

    <Saldo />
  </View>
    
    <View style={styles.footer}>
      <Text style={styles.footerText}>Do que você precisa?</Text>
      <Opcoes />
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#820AD1',
  
  },
  content: {
    paddingHorizontal: 30,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 30,
  },
  card: {
    width: "100%",
    height: 130,
    marginTop: 10,
    backgroundColor: '#9500F6',
    borderRadius: 20,
    elevation: 5,
    marginBottom: 20,
    padding: 20,
    justifyContent: "space-between",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardText: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 36,
    fontWeight: "600",
  },
  footer: {
    paddingTop: 15,
    paddingLeft: 20,
  },
  footerText: {
    marginHorizontal: 20,
    paddingBottom: 20,
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
