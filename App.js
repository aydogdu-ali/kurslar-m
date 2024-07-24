import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//bottom navigaor için import ediyoruz
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentCourses from "./screen/RecentCourses";
import AllCourses from "./screen/AllCourses";
import ManageCourse from "./screen/ManageCourse";

//icon için import ettik.
import { AntDesign } from "@expo/vector-icons";

import { Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

//bottom navigaor için import ediyoruz
const Tab = createBottomTabNavigator();
export default function App() {
  //fonksiyon olarak tanımlıyoruz
  function CourseOverview() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "pink",
          },
          headerTintColor: "white",
          tabBarStyle: {
            backgroundColor: "pink",
          },
          tabBarActiveTintColor: "darkblue",
        }}
      >
        <Tab.Screen
          name="RecentCourses"
          component={RecentCourses}
          options={{
            title: "Yakın Zamanda Kaydolunanlar",
            tabBarLabel: "Yakındakiler",
            tabBarIcon: ({ color, size }) => {
              return <AntDesign name="hourglass" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="AllCourses"
          component={AllCourses}
          options={{
            title: "Tüm Kurslar",
            tabBarLabel: "Hepsi",
            tabBarIcon: ({ color, size }) => {
              return <Feather name="list" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CourseOverview"
          component={CourseOverview}
          //Bunu yaparak ekranada CourseOverview yazısını göstermeyiz.
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ManageCourse" component={ManageCourse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
