import { View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions
} from 'react-native'
import React,{useState,useMemo}from 'react';

const sh = Dimensions.get('window').height;
const sw = Dimensions.get('window').width;

export const DropdownText = ({
  data,
  textStyle,
  placeHolderText,
  value,
  placeholderTextColor,
  dropdownStyle,
}) => {

  const [visiblity, setVisibility] = useState(false);
  const [listData, setData] = useState(data)

  console.log(data,visiblity);

  const handleTextChange = (text) => {
    var t1,t2;
    var list = data.filter((item) => {
        t1 = item.toLowerCase();
        t2 = text.toLowerCase();
        if(t1.includes(t2)){
          return item;
        }
    })

    setData(list)
    console.log(list)
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={(val) => {handleTextChange(val)}}
        placeholder={placeHolderText}
        placeholderTextColor={placeholderTextColor}
        style={[styles.textStyle,{...textStyle}]}
        onFocus={() => {setVisibility(true)}}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        />
        {
          visiblity && 
              <View style={[styles.dropdownView,{...dropdownStyle}]}>
                  <FlatList
                    scrollEnabled={true}
                    data={listData}
                    extraData={listData}
                    style={{height:sh*0.2,width:'100%'}}
                    ItemSeparatorComponent={() => {
                      return(
                        <View style={{width:'100%',borderTopWidth:1}}/>
                      )
                    }}
                    renderItem={({item}) => {
                        return(
                          <Text style={{padding:4}}>{item}</Text>
                        )
                    }}/>
              </View>
        }
    </View>
  )
}

const styles = new StyleSheet.create({
    textStyle : {
      fontSize:14
    },

    container : {
      height : 48,
      width:'100%',
      borderWidth:1,
      borderRadius:4,
      marginVertical:8,
      zIndex:0,
      zIndex:2
    },

    dropdownView : {
      width:'100%',
      borderColor:'#000',
      borderBottomWidth:1,
      borderRightWidth:1,
      borderLeftWidth:1,
      zIndex:2,
      backgroundColor:'#fff'
    }
})