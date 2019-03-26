import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
export default class Header extends Component {
    render() {
        return (
            <View style={{flexDirection:"column",backgroundColor: "#D4D4D4", height: 60 }}>
                <View style={{flex:1,
                    flexDirection: "row",
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{flex:1}}>
                    </View>      
                    <View style={{ flex: 2,justifyContent:"center",alignItems:"flex-end"}}> 
                        <Text style={{fontSize:18}}>Assignment </Text>
                    </View>
                    <View style={{ flex: 2,justifyContent:"center",alignItems:"flex-end" ,flexDirection: "row"}}>
                        <Icon name="ios-search" size={30} color="#040935" style={{margin:8}} />
                        <FeatherIcon name="bell" size={30} color="#040935" style={{margin:8}} />
                        <FeatherIcon name="message-square" size={30} color="#040935" style={{margin:8}} />
                    </View>
                </View>
            </View>
        );
    }
}    