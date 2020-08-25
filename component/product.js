import React, { useState, useEffect } from 'react'
import { globalStyles } from '../globalStyle'
import axios from 'axios'
import { useIsFocused } from '@react-navigation/native'
import { View, FlatList, Text, TouchableOpacity, Button, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

export default function Product({ navigation }) {
    const [tempproduct, setTempProduct] = useState([])
    const [product, setProduct] = useState([])
    const isFocused = useIsFocused()
    const getAllProducts=()=>{
        axios.get('http://localhost:3000/products')
            .then(response => {
                var productList = response.data
                setTempProduct(productList)
                setProduct(productList)
            }, error => { console.error(error) })
    }
    useEffect(() => {
        getAllProducts()
    }, [isFocused])


    const search = (word) => {
        if (word === '') {
            setProduct(tempproduct)
        } else {
            var searchproductList = tempproduct.filter(product => product.name.toLowerCase().startsWith(word.toLowerCase()))
            setProduct(searchproductList)
        }
    }
    return (
        <View style={globalStyles.container}>
            <Button onPress={() => navigation.navigate('AddProduct')} title='Add Product' />
            <TextInput style={globalStyles.input} onChangeText={(value)=>search(value)} placeholder='Search..'></TextInput>
            <FlatList
                data={product}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={globalStyles.card}>
                        <View style={globalStyles.cardContent}>
                            <TouchableOpacity onPress={() => navigation.navigate('Display', { product: item })}>
                                <Image
                                    source={item.image}
                                    style={{ width: "200px", height: "200px" }}
                                />
                                <Text style={globalStyles.titleText}>{item.name}</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('EditProduct', { product: item })}><MaterialIcons name='edit' style={globalStyles.editIcon} /></TouchableOpacity>
                            <TouchableOpacity onPress={() => {axios.delete('http://localhost:3000/products/' + item.id).then(response =>{getAllProducts()},error=>console.error(error))}}><MaterialIcons name='delete' style={globalStyles.deleteIcon} /></TouchableOpacity>
                        </View>
                    </View>
                )} />
        </View>
    )
}