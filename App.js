import * as React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components'

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: red;
`;
const Title = styled.Text`
    font-size: 20px;
    text-align: center;
    margin: 10px;
`;
const Description = styled.Text`
    text-align: center;
    color: red;
    margin-bottom: 5px;
`;

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  return (
    <Container>
      <Title>Welcome to React Native!</Title>
      <Description>To get started, edit App.js</Description>
      <Description>{instructions}</Description>
    </Container>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
