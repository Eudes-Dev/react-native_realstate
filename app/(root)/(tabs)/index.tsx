import { Text, View } from "react-native";
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text className={'text-3xl font-rubik my-10'}>Welcom to RealState</Text>
        <Link href={'/sign-in'}>Sign In</Link>
        <Link href={'/explore'}>Explore</Link>
        <Link href={'/profile'}>Profile</Link>
        <Link href={"/properties/1"}>Profile</Link>
    </View>
  );
}
