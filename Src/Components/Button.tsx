import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextStyle,
  StyleProp,
} from 'react-native';
import React from 'react';
import {COLORS} from '../Utilities/Colors';
import {FONTSIZES} from '../Utilities/FontSizes';
import {FONTS} from '../Utilities/Fonts';

interface ButtonProps {
  title: String;
  onPress: () => void;
  customStyles: StyleProp<TextStyle>;
  customStylesText: StyleProp<TextStyle>;
}

const Button = ({
  title = '',
  onPress,
  customStyles,
  customStylesText,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.button, customStyles]}>
      <Text style={[styles.BtnTextColor, customStylesText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.buttonBgColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
    elevation: 1,
    marginVertical: 15,
  },

  BtnTextColor: {
    color: COLORS.white,
    fontSize: FONTSIZES.small,
    fontFamily: FONTS.Andika.bold,
    textTransform: 'uppercase',
  },
});
