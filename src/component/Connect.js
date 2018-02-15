import React,{Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity,image} from 'react-native';

export default class Connect extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.connect} >
                        Connect
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    button:{
        backgroundColor: '#4cd137',
        alignItems:'center',
        width:'50%',
        marginHorizontal:'25%',
        marginTop:20,
        height:50,
        justifyContent:'center'
    },
    connect:{
        fontSize:28,
        color:'white',
        fontWeight:'bold'
    }
});