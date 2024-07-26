import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Courses from "../components/Courses";
import { useContext } from "react";
import { CoursesContext } from "../store/coursesContext";

export default function AllCourses() {
  const coursesContext = useContext(CoursesContext);

  return <Courses courses={coursesContext.courses} coursesPeriod="Hepsi" />;
}

const styles = StyleSheet.create({});
