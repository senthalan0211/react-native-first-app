import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

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
}) => {
  return (
    <View>
      {isShownLabel && label ? (
        <Text style={[styles.label, {...customLabelStyles}]}>{label}</Text>
      ) : null}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={[styles.placeholder, {...placeholderTextColor}]}
        value={value}
        onChangeText={onChangeText}
        style={[styles.InputBox, {...customInputStyles}]}
        keyboardType={keyboardType}
        maxLength={maxLength}
        editable={editable}
      />

      {errors ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  InputBox: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 6,
    elevation: 2,
    paddingLeft: 20,
    fontSize: 14,
    backgroundColor: 'white',
    borderColor: 'gray',
  },
  placeholder: {
    color: 'rgba(0,0,0,1)',
  },
  label: {
    fontSize: 15,
    alignItems: 'flex-start',
    paddingBottom: 3,
    paddingTop: 5,
    fontWeight: 600,
    color: 'black',
  },
  error: {
    fontSize: 13,
    opacity: 0.7,
    color: 'red',
  },
});
