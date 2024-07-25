import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Courses from "../components/Courses";

export default function AllCourses() {
  return (
    <View>
      <Courses coursesPeriod ="Hepsi" />
    </View>
  );
}

const styles = StyleSheet.create({});
