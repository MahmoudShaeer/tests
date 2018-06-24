import React, { Component } from "react"
import { View, Text, StatusBar, TouchableOpacity, Platform, StyleSheet } from "react-native";
import { Icon, Button } from "native-base";

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

class AppHeader extends Component {

    render() {

        const { title, leftComponent, rightComponent, showBurger, showBack, } = this.props;

        return (
            <View style={{ ...styles.header, elevation: this.props.elevation ? 4 : 0 }}>
                <StatusBar backgroundColor="#61f982" />

                <View style={styles.centerContainer}>
                    <Text style={{textAlign:'center',fontSize:20,marginHorizontal:20}} >{title}</Text>

                </View>
            </View>
        );
    }

}

const styles = {
    header: {
        paddingTop: STATUSBAR_HEIGHT,
        backgroundColor: '#61f982',
        height: STATUSBAR_HEIGHT + APPBAR_HEIGHT,
        flexDirection: "row",
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: StyleSheet.hairlineWidth,
        shadowOffset: {
            height: StyleSheet.hairlineWidth,
        },
        elevation: 4,
    },
    leftContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    rightContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    centerContainer: {
        flex: 3,
        flexDirection: "row",
        justifyContent: Platform.OS == "android" ? "flex-end" : "center",
        alignItems: "center",
    },
    button: {
        marginRight: 15
    },
    icon: {
        color: "#fff",
        fontSize: 30
    }
}

export default AppHeader;