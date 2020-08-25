import React, { useState } from 'react';
import { globalStyles } from '../globalStyle'
import axios from 'axios'
import { View, Text, TextInput, Picker, Button } from 'react-native'

export default function AddProduct({ navigation }) {
    const [image, setImage] = useState()
    const [name, setName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('')
    const [stock, setStock] = useState(0)
    const [description, SetDescription] = useState('')
    const addProduct = () => {
        var reqAddProduct = {
            "id": Math.random() * 10,
            "image":image,
            "name": name,
            "companyName": companyName,
            "price": price,
            "category": category,
            "stock": stock,
            "description": description
        }
        axios.post('http://localhost:3000/products', reqAddProduct)
            .then(response => {
                console.log('Product Added Successfully')
                navigation.navigate('Product')
            }, error => {
                console.error(error)
            })

    }
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.card}>
                <View style={globalStyles.cardDisplay}>
                    <Text >Product Name</Text>
                    <TextInput style={globalStyles.input} onChangeText={(value)=>setName(value)} placeholder='Product Name'></TextInput>
                    <Text >Company Name</Text>
                    <TextInput style={globalStyles.input} onChangeText={(value)=>setCompanyName(value)} placeholder='Product Company'></TextInput>
                    <Text>Price</Text>
                    <TextInput keyboardType='numeric' style={globalStyles.input} onChangeText={(value)=>setPrice(value)}  placeholder='Price'></TextInput>
                    <Text>Category</Text>
                    <Picker
                        style={globalStyles.input}
                        onValueChange={(value) => setCategory(value)}
                        mode="dialog"
                    >
                        <Picker.Item label=" " value="" />
                        <Picker.Item label="Seed/Sapling" value="Seed/sapling" />
                        <Picker.Item label="Machinery" value="Machinery" />
                        <Picker.Item label="Tools" value="Tools" />
                    </Picker>
                    <Text>Image Url</Text>
                    <TextInput style={globalStyles.input} onChangeText={(value)=>setImage(value)} placeholder='Image Url'></TextInput>
                    <Text>Stock</Text>
                    <TextInput keyboardType='numeric' onChangeText={(value)=>setStock(value)} style={globalStyles.input} placeholder='Stock'></TextInput>
                    <Text>Description</Text>
                    <TextInput style={globalStyles.input} onChangeText={(value)=>SetDescription(value)} multiline placeholder='Description'></TextInput>
                    <Button onPress={addProduct} title='Save Product'></Button>
                </View>
            </View>
        </View>
    )

}

