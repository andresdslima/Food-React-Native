import { useState } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

export default function SearchScreen() {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text style={styles.errorStyle}>{errorMessage}</Text>
      ) : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective ($)"
          results={filterResultsByPrice("$")}
        />
        <ResultsList
          title="Bit Pricier ($$)"
          results={filterResultsByPrice("$$")}
        />
        <ResultsList
          title="Big Spender ($$$)"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  errorStyle: {
    color: "red",
    textAlign: "center",
    marginHorizontal: 15,
  },
});
