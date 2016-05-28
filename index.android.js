import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View} from "react-native";
import VideoPlayer from "./components/VideoPlayer";

class ReactNativeVideoPlayer extends Component {
    render() {
        return (
            <VideoPlayer video={{uri: "broadchurch"}}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('ReactNativeVideoPlayer', () => ReactNativeVideoPlayer);
