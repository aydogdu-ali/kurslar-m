import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//bottom navigaor için import ediyoruz
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentCourses from "./screen/RecentCourses";
import AllCourses from "./screen/AllCourses";
import ManageCourse from "./screen/ManageCourse";

//iconlar için import ettik.
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

//bottom navigaor için import ediyoruz
const Tab = createBottomTabNavigator();
export default function App() {
  //fonksiyon olarak tanımlıyoruz
  function CourseOverview() {

    // tab navigatorün içindeyken başka bir sayfaya yönlendirme için navigation kullanılır.
    //Daha sonra onu tıklama ile yönlerdirme işlemi yaparız. Bunu da Pressable içinde aşağıdaki şekilde kullanabilirz.)
    return (
      <Tab.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: "pink",
          },
          headerTintColor: "white",
          tabBarStyle: {
            backgroundColor: "pink",
          },
          tabBarActiveTintColor: "darkblue",
          headerRight: () => (
            <Pressable
              style={({ pressed }) => pressed && styles.pressed}
              onPress={() => {
                navigation.navigate("ManageCourse");
              }}
            >
              <View style={styles.iconContainer}>
                <AntDesign name="plus" size={24} color="green" />
              </View>
            </Pressable>
          ),
        })}
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


  // Ana Ekranda ManageCourse sayfasından önce CourseOverview sayfasının içeriği gözükür. 
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

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },

  iconContainer: {
    marginHorizontal: 10,
    marginVertical: 2,
  },
});
