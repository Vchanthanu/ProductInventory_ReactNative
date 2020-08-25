import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        flex:1
    },
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
        flexDirection:'row',
        justifyContent: 'center',
    },
    cardDisplay: {
        marginHorizontal: 18,
        marginVertical: 20,
    },
    deleteIcon: {
        fontSize: 20,
        // fontWeight: 'bold',
        color: 'red',
    },
    editIcon: {
        fontSize: 20,
        // fontWeight: 'bold',
        color: 'black',
    },
    input:{
        borderWidth:1,
        borderColor:'black',
        padding:8,
        margin:8,
      }
})