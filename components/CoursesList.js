import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import CourseItem from './CourseItem';



const renderCourseItem = (itemData)=>{
 return (
  <CourseItem {...itemData.item}/>
 )
}
export default function CoursesList({ course }) {
  return (
    <View>
      <FlatList data={course} 
      keyExtractor={(item)=>item.id}
      renderItem ={renderCourseItem}/>
    </View>
  );
}

const styles = StyleSheet.create({})