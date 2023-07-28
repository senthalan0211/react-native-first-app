import {StyleSheet, Text, View, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {COLORS} from '../Utilities/Colors';
import {FONTSIZES} from '../Utilities/FontSizes';
import {FONTS} from '../Utilities/Fonts';

interface TextcontentProps {
  content: string;
  customTextStyles: StyleProp<TextStyle>;
  isTouchable: boolean;
  onPress: () => void;
}

const TextContent = ({
  content = '',
  customTextStyles,
  isTouchable = false,
  onPress,
}: TextcontentProps) => {
  return (
    <View>
      {isTouchable ? (
        <Text style={[styles.textContent, customTextStyles]} onPress={onPress}>
          {content}
        </Text>
      ) : (
        <Text style={[styles.textContent, customTextStyles]}>{content}</Text>
      )}
    </View>
  );
};

export default TextContent;

const styles = StyleSheet.create({
  textContent: {
    fontSize: FONTSIZES.medium,
    color: COLORS.black,
    fontFamily: FONTS.Andika.bold,
    textAlign: 'center',
  },
});
