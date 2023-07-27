import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../Utilities/Colors';
import {FONTSIZES} from '../Utilities/FontSizes';
import {FONTS} from '../Utilities/Fonts';

const TextContent = ({
  content = '',
  customTextStyles,
  isTouchable = false,
  onPress,
}) => {
  return (
    <View>
      {isTouchable ? (
        <Text
          style={[styles.textContent, {...customTextStyles}]}
          onPress={onPress}>
          {content}
        </Text>
      ) : (
        <Text style={[styles.textContent, {...customTextStyles}]}>
          {content}
        </Text>
      )}
    </View>
  );
};

export default TextContent;

const styles = StyleSheet.create({
  textContent: {
    fontSize: FONTSIZES.medium,
    color: COLORS.black,
    fontFamily: FONTS.Andika.regular,
    textAlign: 'center',
  },
});
