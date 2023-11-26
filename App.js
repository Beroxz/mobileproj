// รายชื่อสมาชิก
// นางสาวอรสา คิดนุนาม 6321600237 
// นางสาวดุสิตา จิตรสมบุญ 6321602591 
// นายธีรเทพ สกีแพทย์ 6321602621 
// นายรัชพล กิตติธรรม 6321602680 
// นางสาวพิชชาพร โชติธรรมสุข 6321610101

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScheduleScreens from './src/screens/ScheduleScreens';
import ManageSchedule from './src/screens/ManageSchedule';

import IconButton from './src/components/UI/IconBotton';

import MovmentsContextProvider from './src/course/movements-context';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const MovementsOverview = ({navigation}) => {
  return(
    <BottomTabs.Navigator
      screenOptions={() => ({
        headerStyle: {backgroundColor:"#18288D"},
        headerTintColor:"#fff",
        tabBarStyle:{backgroundColor:"#18288D"},
        tabBarActiveTintColor:"#18288D",
        headerRight:({tintColor}) => (
        <IconButton 
        name="plus" 
        size={26} 
        color={tintColor} 
        onPress={() => {navigation.navigate("Manage")}}
        />
        ),
      })}
    >
      <BottomTabs.Screen name="Schedule" component={ScheduleScreens} 
        options ={{tabBarShowLabel: false}}/>
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <MovmentsContextProvider>
    <NavigationContainer> 
      <Stack.Navigator
      screenOptions={{
        headerStyle:{backgroundColor:"#18288D"},
        headerTintColor:"#ECA39D",
      }}>
       <Stack.Screen name="Overview" component={MovementsOverview} 
        options ={{headerShown: false}}/>
      <Stack.Screen name="Manage" component={ManageSchedule} />
      </Stack.Navigator>
    </NavigationContainer>
    </MovmentsContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
