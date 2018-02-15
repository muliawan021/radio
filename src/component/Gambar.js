import React,{Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export default class Gambar extends Component {
    render(){
        return(
            <View>
                <Image
                    source={require('../img/masjid.jpg')}
                    style={styles.image}
                />
            </View>
        );
    }
}
const styles=StyleSheet.create({
    image:{
        width: '100%',
        height: 200
    }
});