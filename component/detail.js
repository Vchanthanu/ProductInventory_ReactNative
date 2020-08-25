import React from 'react';
import { View, Text,Image } from 'react-native'
import { globalStyles } from '../globalStyle'

export default function Detail(props) {
    const product = props.route.params.product
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.card}>
                <View style={globalStyles.cardDisplay}>
                    <Image
                        source={product.image}
                        style={{ width: "200px", height: "200px" }}
                    />
                    <Text style={globalStyles.titleText}>{product.name}</Text>
                    <Text ><b>Company: </b>{product.companyName}</Text>
                    <Text><b>Price: </b>{product.price}</Text>
                    <Text><b>Category: </b>{product.category}</Text>
                    <Text><b>Stock: </b>{product.stock}</Text>
                    <Text><b>Description: </b>{product.description}</Text>
                </View>
            </View>
        </View>
    )
}