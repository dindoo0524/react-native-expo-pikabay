import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';
import pikachu from './assets/pikachu.png'
import axios from 'axios';
import ImageItem from './components/ImageItem'

export default function App() {
  const [text, onChangeText] = React.useState('')
  const [list, setList] = React.useState([])
  const url = 'https://pixabay.com/api/'
  const appkey = '23346849-993c9066c5f39eeb117dd1eb2'

  const onPressButton = () => {
    // alert(text)
    try {
      axios.get(`${url}?key=${appkey}&q=${text}&per_page=20`).then((res) => {
        // console.log(res.data.hits)
        setList(res.data.hits)
      })
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={pikachu}
          style={styles.image}
        />
        <View style={styles.logoTextContainer}>
          <Text style={styles.logoText}>pikabay</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={onChangeText}
            value={text}
            placeholder="검색어를 입력해 주세요"
            style={styles.input}
            multiline={false}
            onSubmitEditing={onPressButton}
          />
          <Button
            title="검색"
            onPress={onPressButton}
            color="#FE3310"
          />
        </View>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.imageItemContainer}
        >
          {
            list.length == 0 ? <Text style={styles.noImageText}>이미지가 없습니다.</Text> : list.map((item, idx) => <ImageItem props={item} key={idx} />)
          }
        </ScrollView>

      </View>
      <View>
        <Text>
          무료 이미지 출처 pixabay.com
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    marginTop: 100,
  },
  logoTextContainer: {
    textAlign: 'center'
  },
  logoText: {
    fontSize: 30
  },
  image: {
    width: 100,
    height: 100,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#ccc',
    marginRight: 5,
    width:'50%'
  },
  inputButton: {
    // alignItems: 'center',
    // textAlignVertical: 'center',
    // backgroundColor: 'yellow'
  },
  test: {
    backgroundColor: 'red'
  },
  imageItemContainer: {
    // justifyContent: 'center',
    // flex: 2
  },
  topContainer: {
    // flex: 1,
    marginBottom: 30
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
    flex: 2
  }

});
