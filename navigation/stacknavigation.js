import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Product from '../component/product'
import Detail from '../component/detail'
import AddProduct from '../component/addProduct'
import EditProduct from '../component/editProduct'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Product'
                screenOptions={{
                    gestureEnabled: true,
                    headerStyle: {
                        backgroundColor: 'lightgrey',
                        height: 100
                    }
                }}
                headerMode='float'>
                    <Stack.Screen name='Product' component={Product}></Stack.Screen>
                    <Stack.Screen name='Display' component={Detail}></Stack.Screen>
                    <Stack.Screen name='AddProduct' component={AddProduct}></Stack.Screen>
                    <Stack.Screen name='EditProduct' component={EditProduct}></Stack.Screen>
                </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigator