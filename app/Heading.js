// @flow
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
export const Heading = (props: Props) => {
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
