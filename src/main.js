import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
const image1 = require('./images/image1.jpg');
const image2 = require('./images/image2.jpg');
const image3 = require('./images/image3.jpg');
var { height, width } = Dimensions.get('window');
import AntIcon from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false,
            fullscreen: false,
        };
    }
    scrollVerticalPosition(event) {
        console.log("##Scrollposition", event.nativeEvent.contentOffset.y);
        var scroll_pos = event.nativeEvent.contentOffset.y;
        this.setState({ fullscreen: true });
    }
    render() {
        return (
            <View>
                <ScrollView style={{ height: 600 }}>
                    <View style={{ alignItems: "center", marginBottom: 5 }}>
                        <Image source={image1} style={{ width: "100%", height: 300 }} />
                    </View>
                    <View style={{ alignItems: "center", marginBottom: 5 }}>
                        <Image source={image2} style={{ width: "100%", height: 300 }} />
                    </View>
                    <View style={{ alignItems: "center", marginBottom: 5 }}>
                        <Image source={image3} style={{ width: "100%", height: 300 }} />
                    </View>

                </ScrollView>
                <TouchableOpacity onPress={() => this.setState({ showDetails: true })} style={{ alignSelf: 'center', position: "absolute", zIndex: 100000, bottom: 70 }}>
                    <AntIcon name="closecircle" size={40} color="#3C42F4" style={{ margin: 8 }} />
                </TouchableOpacity>
                {this.state.showDetails == true &&

                    <Animatable.View animation={"fadeInUpBig"} delay={1} duration={500} style={[{
                        zIndex: 10000000, position: "absolute", top: (this.state.fullscreen == true) ?
                            "0%" : "50%",
                        backgroundColor: "#fff", width: '100%', alignSelf: "center", padding: "5%"
                    }]}>

                        <View style={{ flexDirection: "row", flex: 1, marginBottom: 10, backgroundColor: "#fff" }}>
                            <View style={{ width: "25%", borderBottomWidth: 3, borderBottomColor: "#3C42F4" }}>
                                <Text style={{ color: "#3C42F4", fontWeight: "bold", padding: 8 }}>General</Text>
                            </View>
                            <View style={{ width: "25%", borderBottomWidth: 3, borderBottomColor: "#D4D4D4" }}>
                                <Text style={{ padding: 8 }}>Pricing</Text>
                            </View>
                            <View style={{ width: "25%", borderBottomWidth: 3, borderBottomColor: "#D4D4D4" }}>
                                <Text style={{ padding: 8 }}>Parts</Text>
                            </View>
                            <View style={{ width: "25%", borderBottomWidth: 3, borderBottomColor: "#D4D4D4" }}>
                                <Text style={{ padding: 8 }}>Damages</Text>
                            </View>
                        </View>
                        <ScrollView onScroll={(event) => this.scrollVerticalPosition(event)} style={{
                            height:
                                (this.state.fullscreen == true) ? height : 200, paddingBottom: 30
                        }}>
                            <View style={{ flexDirection: "column" }}>
                                <View style={{ marginBottom: 8 }}>
                                    <Text style={{ fontWeight: "bold" }}>2016 Infiniti QSQ</Text>
                                    <Text>Space Grey</Text>
                                </View>
                                <View style={{ marginBottom: 8 }}>
                                    <Text>Stock Number</Text>
                                    <Text style={{ fontWeight: "bold" }}>T3968</Text>
                                </View>
                                <View style={{ marginBottom: 8 }}>
                                    <Text> VN </Text>
                                    <Text style={{ fontWeight: "bold" }}>JNEVADMJFJF8034</Text>
                                </View>

                                <View style={{ marginBottom: 8 }}>
                                    <Text> Recieved on </Text>
                                    <Text style={{ fontWeight: "bold" }}>Aug 24,2018</Text>
                                </View>

                                <View style={{ marginBottom: 8 }}>
                                    <Text> Vehicle Type </Text>
                                    <Text style={{ fontWeight: "bold" }}>  New </Text>
                                </View>

                                <View style={{ marginBottom: 8 }}>
                                    <Text> Age </Text>
                                    <Text style={{ fontWeight: "bold" }}> 32 Days </Text>
                                </View>
                                <View style={{
                                    flex: 1,
                                    marginBottom: 8, backgroundColor: "#3C42F4",
                                    justifyContent: "center", alignItems: "center"
                                }}>
                                    <Text style={{ padding: 8, textAlign: "center", color: "#fff" }}>Create Ro</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </Animatable.View>
                }
            </View>
        );
    }
}    