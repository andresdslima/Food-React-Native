import {
  StyleSheet,
  Text,
  Button,
  Image,
  View,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>iFoome</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Image
          source={require("../assets/black-food-icon.png")}
          style={styles.image}
        />
        <Text style={styles.button}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 75,
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "black",
    color: "white",
    padding: 10,
    width: 100,
    marginHorizontal: 50,
  },
});
