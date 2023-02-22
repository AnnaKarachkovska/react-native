import { 
  View,
  Text, 
  TextInput,
  TouchableOpacity,
  StyleSheet 
} from "react-native";

export default function CreatePostsScreen() {
  return (
    <>
      <View>
        <TouchableOpacity>
          {/* <Image/> */}
        </TouchableOpacity>
        {/* <Image/> */}
        <Text>Upload/Edit photo</Text>
      </View>
      <View>
        <TextInput
          value={name}
          placeholder="Name..."
          style={styles.input}
        />
        <TextInput
          value={location}
          placeholder="Location..."
          style={styles.input}
        />
        {/* <Image /> */}
      </View>
      <View>
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.btnText}>Publish</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteBtn}>
          {/* <Image/> */}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 16,

    height: 50,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  submitBtn: {
    height: 50,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,

    marginBottom: 16,
  },
  btnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  deleteBtn: {},
});