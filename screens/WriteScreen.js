import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';

export default class WriteScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#6200EE'}
          centerComponent={{
            text: 'Bed Time Stories',
            style: { color: 'white', fontSize: 20 },
          }}
        />
        <TextInput placeholder="Story Title" style={styles.title} />
        <TextInput placeholder="Author" style={styles.author} />
        <TextInput placeholder="Write your story" style={styles.storyText} />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    height: 40,
    borderWidth: 2,
    marginTop: 40,
    margin: 10,
  },
  author: {
    height: 40,
    borderWidth: 2,
    margin: 10,
  },
  storyText: {
    height: 250,
    borderWidth: 2,
    margin: 10,
  },
  submitButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#6200EE',
    width: 80,
    height: 40,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
