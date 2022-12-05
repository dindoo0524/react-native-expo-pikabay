import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function ImageItem(props) {
  const [tags, setTags] = React.useState([])

  // console.log(props)
  // const largeImageURL = props.props.largeImageURL
  // const tags = props.props.tags
  
  useEffect(() => {
    setTags(props.props.tags)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        {
          props.props.userImageURL ? <Image source={{ uri: props.props.userImageURL }} alt="image" style={styles.userImage} /> : <View style={styles.userImage}></View>
        }
        {/* <Image source={{ uri: props.props.userImageURL }} alt="image" style={styles.userImage} /> */}
        <Text style={styles.userText}>{props.props.user}</Text>
      </View>
      <Image source={{ uri: props.props.largeImageURL }} alt="image" style={styles.image}/>
      {/* <Text>{props.props.largeImageURL}</Text> */}
      <View>
      {/* {
        tags.length == 0 ? <Text>없어요</Text> : tags.map((tag) => {
          <View>
            <Text>{tag}</Text>
          </View>
        })
      } */}
        <Text style={styles.tag}>#{tags}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
    borderColor: '#fff',
    borderWidth: 3,
    margin: 10,
    borderRadius: 5,
    height: 250,
    backgroundColor: '#FFD924',
    // width: SCREEN_WIDTH,
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  image: {
    width: 150,
    height: 150,
    backgroundColor: '#fff'
  },
  tag: {
    marginTop: 10,
    fontSize: 11
    // color: '#fff'
  },
  userContainer: {
    marginBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 150,
    backgroundColor: '#fff',
    padding: 5

  },
  userImage: {
    width: 20,
    height: 20,
    alignSelf: 'stretch',
    borderRadius: 20,
    backgroundColor: '#FE3310'
  },
  userText: {
    fontSize: 10,
    alignSelf: 'center'
  }
});
