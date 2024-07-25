import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Courses from "../components/Courses";

export default function RecentCourses() {
  return (
    <View>
      <View>
        <Courses coursesPeriod="Son 7 Gün Eklenen" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
