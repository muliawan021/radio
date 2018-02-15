import React,{Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class Record extends Component {
    render(){
        return(
            <View>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.connect} >
                        Stop Record
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    button:{
        backgroundColor: '#EA2027',
        alignItems:'center',
        width:'40%',
        marginHorizontal:'30%',
        marginTop:20,
        height:50,
        justifyContent:'center'
    },
    connect:{
        fontSize:26,
        color:'white',
        fontWeight:'bold'
    }
});