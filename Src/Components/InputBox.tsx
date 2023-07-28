import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardTypeOptions,
  TextStyle,
  StyleProp,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../Utilities/Colors';
import {FONTSIZES} from '../Utilities/FontSizes';
import {FONTS} from '../Utilities/Fonts';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  errorText?: string;
  customInputStyles?: StyleProp<TextStyle>;
  customLabelStyles?: StyleProp<TextStyle>;
  isShownLabel?: boolean;
  keyboardType?: KeyboardTypeOptions;
  errors?: boolean;
  placeholderTextColor?: string;
  maxLength?: number;
  editable?: boolean;
  isPassword?: boolean;
}

const InputBox = ({
  label = '',
  placeholder = '',
  value,
  onChangeText,
  customInputStyles,
  customLabelStyles,
  errorText = '',
  isShownLabel = true,
  errors,
  keyboardType,
  placeholderTextColor,
  maxLength,
  editable,
  isPassword,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View>
      {isShownLabel && label ? (
        <Text style={[styles.label, customLabelStyles]}>{label}</Text>
      ) : null}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        value={value}
        onChangeText={onChangeText}
        style={[styles.InputBox, customInputStyles]}
        keyboardType={keyboardType}
        maxLength={maxLength}
        editable={editable}
        secureTextEntry={isPassword ? !showPassword : false}
      />

      {isPassword ? (
        <TouchableOpacity
          onPress={handlePassword}
          style={styles.eyeButton}
          activeOpacity={0.8}>
          <Image
            style={styles.eyeImage}
            source={
              showPassword
                ? require('../Assets/Png/eyeOpen.png')
                : require('../Assets/Png/eyeClose.png')
            }
          />
        </TouchableOpacity>
      ) : null}

      {errors ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  InputBox: {
    fontSize: FONTSIZES.small,
    backgroundColor: COLORS.white,
    borderColor: COLORS.borderColor,
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 6,
    elevation: 2,
    paddingLeft: 15,
    position: 'relative',
  },
  placeholder: {
    color: COLORS.placeHolderColor,
  },
  label: {
    fontSize: FONTSIZES.medium,
    color: COLORS.black,
    fontFamily: FONTS.Andika.bold,
    alignItems: 'flex-start',
  },
  error: {
    fontSize: FONTSIZES.tiny,
    color: COLORS.red,
    fontFamily: FONTS.Andika.regular,
    opacity: 0.7,
    marginVertical: 1,
  },
  eyeImage: {
    width: 25,
    height: 16,
  },
  eyeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
});
