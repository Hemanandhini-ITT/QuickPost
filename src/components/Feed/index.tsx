import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/navigation.types';
import useAllPosts from '../../hooks/useAllPosts';
import {styles} from './feed.styles';

export default function Feeds() {
  const {posts, loading} = useAllPosts();
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (posts.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text>No posts found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({item}) => (
          <View style={styles.postContainer}>
            <Text
              style={styles.title}
              onPress={() => navigation.navigate('PostDetails', {post: item})}>
              {item.title}
            </Text>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
}
