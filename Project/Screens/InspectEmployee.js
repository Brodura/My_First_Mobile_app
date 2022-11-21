import * as React from "react";
import { Text, Button, View, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

export function InspectEmployee({ navigation }) {
  const route = useRoute();
  const employeeDetails = route.params.array;
  console.log(employeeDetails)
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titleText}>ROI Details</Text>
      <Text style={styles.normalText}>
        Change and modify staff details here
      </Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.normalText}>Name: {employeeDetails["Name"]}</Text>
        <Text style={styles.normalText}>
          Department: {employeeDetails["Department"]}
        </Text>
        <Text style={styles.normalText}>
          Phone Number: {employeeDetails["Phone"]}
        </Text>
        <Text style={styles.normalText}>
          Street Address: {employeeDetails["Street"]}
        </Text>
        <Text style={styles.normalText}>City: {employeeDetails["City"]}</Text>
        <Text style={styles.normalText}>State: {employeeDetails["State"]}</Text>
        <Text style={styles.normalText}>
          Postcode: {employeeDetails["Postcode"]}
        </Text>
        <Text style={styles.normalText}>
          Country: {employeeDetails["Country"]}
        </Text>
        <Button
          onPress={(e) =>
            navigation.navigate("Modify", { array: employeeDetails })
          }
          color={"#7e698b"}
          title={"Change"}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a8b2b3",
    alignItems: "center",
    justifyContent: "center",
  },

  detailsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  titleText: {
    color: "#008ae6",
    fontSize: 30,
    fontWeight: "bold",
  },

  normalText: {
    color: "#008ae6",
    fontSize: 16,
  },
});
