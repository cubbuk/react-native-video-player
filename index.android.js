import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import VideoPlayer from "./components/VideoPlayer";

class ReactNativeVideoPlayer extends Component {

    constructor(props, context, ...args) {
        super(props, context, ...args);
        this.state = {showVideoPlayer: true};
    }

    onClosePressed() {
        this.setState({showVideoPlayer: false});
    }

    render() {
        let {showVideoPlayer} = this.state;
        if (showVideoPlayer) {
            return (
                <VideoPlayer video={{uri: "broadchurch"}} volume={0.5} onClosePressed={this.onClosePressed.bind(this)}/>
            );
        } else {
            return <TouchableOpacity style={styles.container} onPress={() => this.setState({showVideoPlayer: true})}>
                <Text>
                    Open Video Player
                </Text>
            </TouchableOpacity>;
        }
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
