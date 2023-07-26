import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../Utilities/Colors';

const TextContent = ({content = '', customTextStyles}) => {
  return (
    <Text style={[styles.textContent, {...customTextStyles}]}>{content}</Text>
  );
};

export default TextContent;

const styles = StyleSheet.create({
  textContent: {
    fontSize: 16,
    color: COLORS.black,
    textAlign: 'center',
    fontWeight: 'normal',
  },
});
