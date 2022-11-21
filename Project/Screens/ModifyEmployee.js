import * as React from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

export function ModifyEmployee({ navigation }) {
  const route = useRoute();
  const employeeDetails = route.params.array;

  console.log(employeeDetails);

  const [peopleID, onChangePersonID] = useState(typeof employeeDetails.PeopleID !== 'undefined' ? employeeDetails.PeopleID : "1");
  const [name, onChangeName] = useState(employeeDetails["Name"]);
  const [phone, onChangePhone] = useState(employeeDetails["Phone"]);
  const [department, onChangeDepartment] = useState(employeeDetails["Department"]);
  const [street, onChangeStreet] = useState(typeof employeeDetails.street !== 'undefined' ? employeeDetails.street : "Street");
  const [city, onChangeCity] = useState(typeof employeeDetails.city !== 'undefined' ? employeeDetails.city : "City");
  const [state, onChangeState] = useState(typeof employeeDetails.state !== 'undefined' ? employeeDetails.state : "State");
  const [postcode, onChangePostcode] = useState(employeeDetails["Postcode"]);
  const [country, onChangeCountry] = useState(employeeDetails["Country"]);

  const ip = "http://localhost:3000";

  const modifyPerson = async (employeeDetails) => {
    const response = await fetch(ip + "/modify_person", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeDetails),
    });
    return response
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}> Modify {employeeDetails["Name"]}</Text>
      <View>
        <TextInput onChangeText={onChangeName} value={name}></TextInput>
        <TextInput onChangeText={onChangePhone} value={phone}></TextInput>
        <TextInput
          onChangeText={onChangeDepartment}
          value={department}
        ></TextInput>
        <TextInput onChangeText={onChangeStreet} value={street}></TextInput>
        <TextInput onChangeText={onChangeCity} value={city}></TextInput>
        <TextInput onChangeText={onChangeState} value={state}></TextInput>
        <TextInput onChangeText={onChangePostcode} value={postcode}></TextInput>
        <TextInput onChangeText={onChangeCountry} value={country}></TextInput>
      </View>
      <Button
        onPress={async () => {
          if (
            employeeDetails["PeopleID"] == peopleID &&
            employeeDetails["Name"] == name &&
            employeeDetails["Phone"] == phone &&
            employeeDetails["Department"] == department &&
            employeeDetails["Street"] == street &&
            employeeDetails["City"] == city &&
            employeeDetails["State"] == state &&
            employeeDetails["Postcode"] == postcode &&
            employeeDetails["Country"] == country
          ) {
            //put in an alert here
            console.log("No change");
          } else {
            employeeDetails["PeopleID"] = peopleID;
            employeeDetails["Name"] = name;
            employeeDetails["Phone"] = phone;
            employeeDetails["Department"] = department;
            employeeDetails["Street"] = street;
            employeeDetails["City"] = city;
            employeeDetails["State"] = state;
            employeeDetails["Postcode"] = postcode;
            employeeDetails["Country"] = country;
            await modifyPerson(employeeDetails);
          }
        }}
        color={"#f17010"}
        title={"Save"}
      />
      <Button
        onPress={() => navigation.navigate("Directory")}
        color={"#f17010"}
        title={"Return to Staff Directory"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#97a843",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "#a8b2b3",
    fontSize: 30,
    fontWeight: "bold",
  },
});

// const response = await fetch("https://reqbin.com/echo/post/json", {
// method: 'POST',
// headers: {
//   'Accept': 'application/json',
//   'Content-Type': 'application/json'
// },
// body: `{
//    "Id": 78912,
//    "Customer": "Jason Sweet",
//    "Quantity": 1,
//    "Price": 18.00
//   }`,
// });

// response.json().then(data => {
//   console.log(data);
// });
