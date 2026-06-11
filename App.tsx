
import React from 'react';
import { View, Text, Image, Button, TouchableHighlight } from 'react-native';

function App() {
  return (

    <View>
      <Text>Hello bro</Text>

      <Image
        style={{
          height: 300,
          width: 500,
        }}
        source={{
          uri: 'https://reactnative.dev/assets/images/debugging-dev-menu-083-70616da2986550a977feb0158f218bdd.jpg',
        }}
      ></Image>

      <Button title="yoyo"></Button>
      <TouchableHighlight>
        <Text
          style={{
            backgroundColor: 'green',
            color: 'white',
          }}
        >
          yooy
        </Text>
      </TouchableHighlight>
    </View>
  );
}

export default App;
