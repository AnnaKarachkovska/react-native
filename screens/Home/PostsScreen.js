import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PostsScreen() {
  return (
    <>
     <View style={styles.profilePhoto}>
      <Image />
      <View style={styles.profileInfo}>
        <Text>Login</Text>
        <Text>E-mail</Text>
      </View>
     </View>
     <View>
      <Text>Post</Text>
     </View>
     <View>
      <Text>Post</Text>
     </View>
    </>
  );
};

const styles = StyleSheet.create({});