import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../Utilities/Colors';

const Button = ({title = '', onPress, customStyles, customStylesText}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.button, {...customStyles}]}>
      <Text style={[styles.BtnTextColor, {...customStylesText}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.buttonBgColor,
    height: 50,
    borderRadius: 10,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },

  BtnTextColor: {
    color: COLORS.white,
    textTransform: 'uppercase',
    fontSize: 14,
  },
});
