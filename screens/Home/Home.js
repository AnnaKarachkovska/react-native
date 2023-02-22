// import { Text } from "react-native";

// export default function Home() {
//   return (
//     <>
//       <Text>Home screen</Text>
//     </>
//   )
// };

import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Tabs = createBottomTabNavigator();

export default function Home() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "PostsScreen") {
            iconName = "grid";
          } else if (route.name === "CreatePostsScreen") {
            iconName = "plus";
          } else if (route.name === "ProfileScreen") {
            iconName = "user";
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#FFFFFF",
        inactiveTintColor: "rgba(33, 33, 33, 0.8)",
        activeBackgroundColor: "#FF6C00",
        showLabel: false,
      }}
    >
      <Tabs.Screen name="PostsScreen" component={PostsScreen} />
      <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  // tabBar: {
  //   marginHorizontal: 80,
  // },
});