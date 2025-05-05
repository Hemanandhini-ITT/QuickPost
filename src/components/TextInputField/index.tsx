import React from 'react';
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
            onChangeText={field.onChange}
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
