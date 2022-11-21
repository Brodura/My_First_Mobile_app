import * as React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useEffect, useState } from "react";

export function EmployeeDirectory({ navigation }) {
  const [bank, setBank] = useState([]);

  const ip = "http://localhost:3000";

  useEffect(() => {
   fetch(ip + "/get_all_people").then(async (res) => {
      setBank(await res.json());
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      // ADD THIS THROW error
      throw error;
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>All Staff Contact Directory</Text>
        <Text style={styles.normalText}>
          Select a Staff Member below 
        </Text>
      </View>
      <View style={styles.staffContainer}>
        {bank.map((x, i) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Employee", { array: x })}
              style={styles.staffItem}
              key={i}
            >
              <Text style={styles.normalText}>{x["Name"]}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5bfa3",
    alignItems: "center",
    justifyContent: "center",
    scrollEnabled: true,
  },

  titleText: {
    color: "#e0ee79",
    fontSize: 50,
    fontWeight: "bold",
  },

  normalText: {
    color: "#e0ee79",
    fontSize: 16,
  },

  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    bottomPadding: 10,
  },

  staffContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  staffItem: {
    height: 150,
    width: 250,
    borderStyle: "solid",
    borderWidth: 5,
    borderRadius: 10,
    borderColor: "97a843",
    alignItems: "center",
    justifyContent: "center",
  },
});
