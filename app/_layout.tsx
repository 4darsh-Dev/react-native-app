import { Stack } from "expo-router";

const RootLayout = ()=>{
  return(
    <Stack screenOptions={
      { headerShown : false}
    }>
      <Stack.Screen name="tabs" options={{headerShown : false}}/>
      <Stack.Screen name="+not-found" />

      {/* // old */}
      {/* <Stack.Screen name="about" options={{title : 'about'}} /> */}
      
    </Stack>
  );
}

export default RootLayout;