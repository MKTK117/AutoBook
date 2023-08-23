import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SearchResults = ({data, input, setInput}) => {
    const navigation = useNavigation()

  return (
    <View style={styles.searchResultsViewBox}>
      <FlatList data={data} renderItem={({item}) => {
        if (item.place.toLowerCase().includes(input.toLowerCase())) {
            if (input === "") {
                return null;
            }
            return (
                <Pressable 
                onPress={() => {
                    setInput(item.place);
                    navigation.navigate("Home", {
                        input:item.place
                    })
                }}
                style={styles.searchResultsPressable}
                >
                    <View>
                        <Image 
                        style={styles.searchResultsImage}
                        source={{uri:item.placeImage}} />
                    </View>
                    <View>
                        <Text
                        style={styles.searchResultsPlaceName}
                        >{item.place}</Text>
                        <Text
                        style={{marginVertical:4}}
                        >{item.shortDescription}</Text>
                        <Text>{item.properties.length} Properties</Text>
                    </View>
                </Pressable>
            )
        }
      }}/>
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({
    searchResultsPressable: {
        flexDirection: 'row',
        alignItems:'center',
        gap: 10,
        marginVertical: 10,
    },
    searchResultsViewBox: {
        padding: 10,
    },
    searchResultsImage: {
        height:70,
        width:70,
    },
    searchResultsPlaceName: {
        fontSize:15,
        fontWeight:'500',
    },
})