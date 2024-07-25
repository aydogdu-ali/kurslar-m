import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CoursesSummary({ periodName, course }) {
  const coursesSum = course.reduce((sum, course) => {
    return sum + course.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{periodName}</Text>
      <Text style={styles.cost}>{coursesSum + " TL"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    backgroundColor: "blue",
    padding: 8,
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 12,
  },
  cost: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
