import React, { useState } from 'react';
import { globalStyles } from '../globalStyle'
import axios from 'axios'
import { View, Text, TextInput, Picker, Button } from 'react-native'

export default function EditProduct(props) {
    const product = props.route.params.product
    const[id,setId]=useState(product.id)
    const [image, setImage] = useState(product.image)
    const [name, setName] = useState(product.name)
    const [companyName, setCompanyName] = useState(product.companyName)
    const [price, setPrice] = useState(product.price)
    const [category, setCategory] = useState(product.category)
    const [stock, setStock] = useState(product.stock)
    const [description, SetDescription] = useState(product.description)
    const editProduct = () => {
        var reqEditProduct = {
            "image":image,
            "name": name,
            "companyName": companyName,
            "price": price,
            "category": category,
            "stock": stock,
            "description": description
        }
        axios.put('http://localhost:3000/products/'+id, reqEditProduct)
            .then(response => {
                console.log('Product Added Successfully')
                props.navigation.navigate('Product')
            }, error => {
                console.error(error)
            })

    }
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.card}>
                <View style={globalStyles.cardDisplay}>
                    <Text >Product Name</Text>
                    <TextInput style={globalStyles.input} value={name} onChangeText={(value)=>setName(value)} placeholder='Product Name'></TextInput>
                    <Text >Company Name</Text>
                    <TextInput style={globalStyles.input} value={companyName} onChangeText={(value)=>setCompanyName(value)} placeholder='Product Company'></TextInput>
                    <Text>Price</Text>
                    <TextInput keyboardType='numeric' value={price} style={globalStyles.input} onChangeText={(value)=>setPrice(value)}  placeholder='Price'></TextInput>
                    <Text>Category</Text>
                    <Picker
                        style={globalStyles.input}
                        selectedValue={category}
                        onValueChange={(value) => setCategory(value)}
                        mode="dialog"
                    >
                        <Picker.Item label=" " value="" />
                        <Picker.Item label="Seed/Sapling" value="Seed/sapling" />
                        <Picker.Item label="Machinery" value="Machinery" />
                        <Picker.Item label="Tools" value="Tools" />
                    </Picker>
                    <Text>Image Url</Text>
                    <TextInput value={image} style={globalStyles.input} onChangeText={(value)=>setImage(value)} placeholder='Image Url'></TextInput>
                    <Text>Stock</Text>
                    <TextInput keyboardType='numeric' value={stock} onChangeText={(value)=>setStock(value)} style={globalStyles.input} placeholder='Stock'></TextInput>
                    <Text>Description</Text>
                    <TextInput style={globalStyles.input} value={description} onChangeText={(value)=>SetDescription(value)} multiline placeholder='Description'></TextInput>
                    <Button onPress={editProduct} title='Save Product'></Button>
                </View>
            </View>
        </View>
    )

}

