import React, {useCallback} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/navigation.types';
import useAllPosts from '../../hooks/useAllPosts';
import {styles} from './feed.styles';
import {PostDataWithId} from '../Profile/profile.types';

export default function Feeds() {
  const {posts, loading} = useAllPosts();
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const renderItem = useCallback(
    (props: {item: PostDataWithId}) => {
      const item = props.item;
      return (
        <View style={styles.postContainer}>
          <Text
            style={styles.title}
            onPress={() => navigation.navigate('PostDetails', {post: item})}>
            {item.title}
          </Text>
          <Text style={styles.content}>{item.content}</Text>
        </View>
      );
    },
    [navigation],
  );

  const renderEmptyComponent = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Text>No posts found!</Text>
      </View>
    ),
    [],
  );

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        contentContainerStyle={
          posts.length === 0 ? styles.emptyContainer : styles.listContainer
        }
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyComponent}
      />
    </View>
  );
}
