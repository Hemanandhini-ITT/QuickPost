import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeStackParamList} from '../../navigation/navigation.types';
import {styles} from './postDetails.styles';

type PostDetailsRouteProp = RouteProp<HomeStackParamList, 'PostDetails'>;

export default function PostDetails() {
  const {params} = useRoute<PostDetailsRouteProp>();
  const {post} = params;
  const createdAt = post.createdAt.toDate().toLocaleString();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.content}>{post.content}</Text>
        <Text style={styles.metaValue}>{post.userEmail}</Text>
        <Text style={styles.metaValue}>{createdAt}</Text>
      </View>
    </View>
  );
}
