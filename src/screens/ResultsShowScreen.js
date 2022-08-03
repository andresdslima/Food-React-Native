import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text } from "react-native";
import yelp from "../api/yelp";

export default function ResultsShowScreen({ navigation }) {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResultById = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResultById(id);
  }, []);

  if (!result) {
    return <Text style={{ textAlign: "center" }}>Loading...</Text>;
  }

  return (
    <>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.text}>
        {result.location.address1}, {result.location.city}
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    // ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  text: {
    textAlign: "center",
    marginBottom: 5,
    fontSize: 16,
  },
});
