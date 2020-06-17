// @flow
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
export const Test = (props: Props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>todos</Text>
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
