import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet,TouchableWithoutFeedback } from 'react-native'
import HeaderBack from '../components/headerBack'
import Icon from 'react-native-vector-icons/dist/AntDesign'
import Entypo from 'react-native-vector-icons/dist/Entypo'
const data = [
    {
        'key': '1',
        'name': 'name',
        'image': 'https://store.primagraphia.co.id/wp-content/uploads/2014/08/konsep-kaos.jpg',
        'harga': 'RP.130,0000',
        'deskripsi': 'baju murah'
    },
    {
        'key': '2',
        'name': 'nama 2',
        'image': 'https://static1.fashionbeans.com/wp-content/uploads/2018/09/streetwear-best-top-3.jpg',
        'harga': '134,0000',
        'deskripsi': 'baju murah'
    },
    {
        'key': '3',
        'name': 'shirt',
        'image': 'https://image.dhgate.com/0x0p/f2/albu/g6/M00/B5/E1/rBVaSFskoLWAHYl4AAGDVvLEn1c837.jpg',
        'harga': 'RP.130,450',
        'deskripsi': 'baju murah'
    },
    {
        'key': '4',
        'name': 'namedd',
        'image': 'https://traxonsky.com/wp-content/uploads/2017/04/Jordan.jpg',
        'harga': 'RP.130,6700',
        'deskripsi': 'baju murah dahstya'
    },
    {
        'key': '5',
        'name': 'namedd',
        'image': 'https://store.primagraphia.co.id/wp-content/uploads/2014/08/konsep-kaos.jpg',
        'harga': 'RP.130,6700',
        'deskripsi': 'baju murah dahstya'
    },
    {
        'key': '6',
        'name': 'namedd',
        'image': 'https://store.primagraphia.co.id/wp-content/uploads/2014/08/konsep-kaos.jpg',
        'harga': 'RP.130,6700',
        'deskripsi': 'baju murah dahstya'
    },
    {
        'key': '7',
        'name': 'namedd',
        'image': 'https://store.primagraphia.co.id/wp-content/uploads/2014/08/konsep-kaos.jpg',
        'harga': 'RP.130,6700',
        'deskripsi': 'baju murah dahstya'
    },
    {
        'key': '8',
        'name': 'namedd',
        'image': 'https://store.primagraphia.co.id/wp-content/uploads/2014/08/konsep-kaos.jpg',
        'harga': 'RP.130,6700',
        'deskripsi': 'baju murah dahstya'
    },
]

class FlatListItem extends Component {
    render() {
        return (
            <View style={{flex :1, margin: 10, borderRadius: 7, borderWidth: 2, borderColor: '#f5f5f5'}}>
                <View
                    style={{width: '100%', height: 200, borderRadius: 8}}
                >
                    <Image
                        style={{height: 200, borderRadius: 8}}
                        resizeMode="cover"
                        source={{ uri: this.props.item.image }}
                    />

                </View>
                <Text style={{marginHorizontal: 5, marginTop: 5, color: 'black'}}>Sandal</Text>
                <Text style={{marginHorizontal: 5, color: 'black'}}>Rp. 100.890</Text>
                <View style={{flexDirection: 'row', margin: 5}}>
                    <Image
                        style={styles.profilePicture}
                        source={{uri: 'https://cdn.dribbble.com/users/1044993/screenshots/5848337/penguin_dribbble.png'}} 
                    />
                    <View>
                        <Text style={{fontWeight: 'bold', color: 'grey', fontSize: 12}}>PixellPie</Text>
                        <Text style={{color: 'grey', fontSize: 10}}>3 menit lalu</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', borderTopWidth: 1, borderColor: 'rgba(0,0,0,0.2)', paddingVertical: 10}}>
                    <View style={{flex: 1, alignItems: 'center', borderRightWidth: 1, borderColor: 'rgba(0,0,0,0.2)'}}>
                        <TouchableOpacity onPress={() => {console.warn('berhasil')}}>
                            <Icon name='heart' size={15} color={'red'} /> 
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => {console.warn('berhasil')}}>
                            <Entypo name='dots-three-vertical' size={15} color={'grey'} /> 
                        </TouchableOpacity>
                    </View>

                </View>
                
            </View>
           
        )
    }
}

const styles = StyleSheet.create({
    profilePicture: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 7,
    },
})


export default class Card extends Component {
    render() {
        return (
            <View>
              <HeaderBack title="Wishlist" navigation={this.props.navigation}/>
                <FlatList
                    data={data}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem navigation={this.props.navigation} item={item} index={index} />
                        )
                    }}
                />
            </View>
        )
    }
}

