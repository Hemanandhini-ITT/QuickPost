import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {HomeStackParamList} from '../../navigation/navigation.types';
import {styles} from './postDetails.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type PostDetailsRouteProp = RouteProp<HomeStackParamList, 'PostDetails'>;

export default function PostDetails() {
  const {params} = useRoute<PostDetailsRouteProp>();
  const {post} = params;
  const createdAt = post.createdAt.toDate().toLocaleString();
    const navigation =
      useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  return (
    <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton} >
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.content}>{post.content}</Text>
        <Text style={styles.metaValue}>{post.userEmail}</Text>
        <Text style={styles.metaValue}>{createdAt}</Text>
      </View>
    </View>
  );
}
