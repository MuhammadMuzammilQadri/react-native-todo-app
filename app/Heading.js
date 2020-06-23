// @flow
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Heading = () => {
  return (
    <View style={styles.header}>
      <Text stylgite={styles.headerText}>todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 80,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 72,
    color: 'rgba(175, 47, 47, 0.25)',
    fontWeight: '100',
  },
});

export default Heading;
