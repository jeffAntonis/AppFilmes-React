import React from 'React';
import { Text } from "react-native";
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";

import Main from '~/pages/Main';
import Details from '~/pages/Details';

const BottomTab = createMaterialBottomTabNavigator({ 
  Main: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 10 }}>Início</Text>,
      tabBarIcon: ({  tintColor }) => (<Icon style={{ color: tintColor }} name="home" size={22} />)
    }
  },
  Search: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 10 }}>Buscas</Text>,
      tabBarIcon: ({  tintColor }) => (<Icon style={{ color: tintColor }} name="search1" size={22} />)
    }
  },
  Preview: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 10 }}>Em breve</Text>,
      tabBarIcon: ({  tintColor }) => (<Icon style={{ color: tintColor }} name="playcircleo" size={22} />)
    }
  },
  Downloads: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 10 }}>Downloads</Text>,
      tabBarIcon: ({  tintColor }) => (<Icon style={{ color: tintColor }} name="download" size={22} />)
    }
  },
  More: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 10 }}>Mais</Text>,
      tabBarIcon: ({  tintColor }) => (<Icon style={{ color: tintColor }} name="bars" size={22} />)
    }
  }
}, {
  initialRouteName: 'Main',
  shifting: false,
  activeColor: '#FFF',
  inactiveColor: '#828792',
  barStyle: {
    backgroundColor: '#000',
  }
});

const Routes = createStackNavigator({
  BottomTab,
  Details
}, {
  initialRouteName: 'BottomTab',
  headerMode: 'none'
});

export default createAppContainer(Routes);
