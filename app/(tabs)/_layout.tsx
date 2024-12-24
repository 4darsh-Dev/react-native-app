import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#25292e',
        },
        headerShown : false
      }}
    >
      <Tabs.Screen 
        name="home" 
        options={{ 
          title: "Home", 
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ), 
          headerShown: false // Disable top bar for this screen
        }} 
      />
      <Tabs.Screen 
        name="about" 
        options={{ 
          title: "About", 
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'hardware-chip-sharp' : 'hardware-chip-outline'} color={color} size={24}/>
          ), 
          headerShown: false // Disable top bar for this screen
        }} 
      />
      <Tabs.Screen 
        name="features" 
        options={{ 
          title: "Features", 
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'construct-sharp' : 'construct-outline'} color={color} size={24}/>
          ), 
          headerShown: false // Disable top bar for this screen
        }} 
      />
      {/* <Tabs.Screen 
        name="wakeup" 
        options={{ 
          title: "Wakeup", 
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'mic-sharp' : 'mic-outline'} color={color} size={24} />
          ),
          headerShown: false // Disable top bar for this screen
        }} 
      /> */}
      <Tabs.Screen 
        name="settings" 
        options={{ 
          title: "Settings", 
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cog-sharp' : 'cog-outline'} color={color} size={24}/>
          ), 
          headerShown: false // Disable top bar for this screen
        }} 
      />
    </Tabs>
  );
}