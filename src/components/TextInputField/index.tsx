import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import {Controller, FieldValues} from 'react-hook-form';
import {styles} from './textInputField.styles';
import {TextInputFieldProps} from './textInputField.types';

const TextInputField = <T extends FieldValues>({
  name,
  label,
  control,
  errors,
  multiline = false,
  style,
  ...textInputProps
}: TextInputFieldProps<T>) => {
  const [charCount, setCharCount] = useState(0);
  const maxLength = textInputProps.maxLength;
  return (
    <Controller
      name={name}
      control={control}
      render={({field}) => (
        <View style={styles.container}>
          <Text style={styles.label}>
            {label}
            <Text style={styles.errorText}>*</Text>
          </Text>
          <TextInput
            value={field.value?.toString() ?? ''}
            // onChangeText={field.onChange}
            onChangeText={text => {
              field.onChange(text);
              if (maxLength) {setCharCount(text.length);}
            }}
            onBlur={field.onBlur}
            style={[
              styles.input,
              style,
              errors[name] ? styles.inputError : styles.inputDefault,
              textInputProps.numberOfLines && textInputProps.numberOfLines > 1
                ? styles.textArea
                : null,
            ]}
            multiline={multiline}
            {...textInputProps}
          />
                    {maxLength && (
            <Text style={styles.charCount}>
              ({charCount}/{maxLength})
            </Text>
          )}
          {errors[name] && (
            <Text style={styles.errorText}>
              {errors[name]?.message?.toString()}
            </Text>
          )}
        </View>
      )}
    />
  );
};

export default TextInputField;
