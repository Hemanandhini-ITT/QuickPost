import React from 'react';
import { View, Button } from 'react-native';
import TextInputField from '../TextInputField';
import { styles } from './createPost.styles';
import usePostForm from '../../hooks/usePostForm';

export default function PostForm() {
  const { control, handleSubmit, errors, onSubmit } = usePostForm();

  return (
    <View style={styles.container}>
      <TextInputField
        name="title"
        label="Title"
        control={control}
        errors={errors}
        numberOfLines={1}
        style={styles.inputField}
      />

      <TextInputField
        name="content"
        label="Content"
        control={control}
        errors={errors}
        numberOfLines={6}
        maxLength={250}
        style={styles.inputField}
      />

      <View style={styles.buttonContainer}>
        <Button title="Create Post" onPress={handleSubmit(onSubmit)}
         color={styles.button.backgroundColor}
          />
      </View>
    </View>
  );
}
