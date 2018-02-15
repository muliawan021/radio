import React,{Component} from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default class Info extends Component{
    render(){
        return(
            <View style={styles.container} >
                <Text style={styles.nama} >
                    Anda Sedang Mendengarkan
                </Text>
                <Text style={styles.nama} >
                    Nama Radio
                </Text>
                <Text style={styles.nama}>
                    Frequency Radio
                </Text>
            </View>
        );
    }
}
const styles= StyleSheet.create({
    nama:{
        fontSize:16,
        fontWeight:'bold',
        color:'#487eb0'
    },
    container:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:5,
        height:'25%'
    }
});