import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";

export default function CourseForm() {
  const [inputs, setInputs] = useState({
    amount: "",
    date: "",
    description: "",
  });

  function inputChange(inputIdentifier, enteredValue) {
    setInputs((currenInput) => {
      return {
        ...currenInput,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Kurs Bilgileri</Text>
      <View style={styles.priceAndDate}>
        <Input
          style={styles.flexAll}
          label="Tutar"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChange.bind(this, "amount"),
            value: inputs.amount,
          }}
        />
        <Input
          style={styles.flexAll}
          label="Tarih"
          textInputConfig={{
            placeHolder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChange.bind(this, "date"),
            value: inputs.date,
          }}
        />
      </View>

      <Input
        label="Başlık"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChange.bind(this, "description"),
          value: inputs.description,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "blue",
    marginVertical: 20,
  },
  priceAndDate: {
    flexDirection: "row",
  },
  flexAll: {
    flex: 1,
  },
});
