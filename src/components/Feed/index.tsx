import React, {useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/navigation.types';
import useAllPosts from '../../hooks/useAllPosts';
import {styles} from './feed.styles';
import {PostWithLikeStatus} from '../Profile/profile.types';
import Icons from 'react-native-vector-icons/MaterialIcons';
import usePostInteractions from '../../hooks/usePostInteraction';

export default function Feeds() {
  const {posts, loading} = useAllPosts();

  const {
    modalVisible,
    selectedPostId,
    commentText,
    submitting,
    openCommentsModal,
    closeCommentsModal,
    handleAddComment,
    handleLike,
    setCommentText,
  } = usePostInteractions();

  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const renderItem = useCallback(
    (props: {item: PostWithLikeStatus}) => {
      const item = props.item;
      return (
        <View style={styles.postContainer}>
          <Text
            style={styles.title}
            onPress={() => navigation.navigate('PostDetails', {post: item})}>
            {item.title}
          </Text>
          <Text style={styles.content}>{item.content}</Text>
          <View style={styles.actionsRow}>
            <TouchableOpacity
              onPress={() => handleLike(item.id)}
              style={styles.iconContainer}>
              <Icons
                name={item.likedByCurrentUser ? 'favorite' : 'favorite-border'}
                size={20}
                style={[styles.icon, item.likedByCurrentUser && {color: 'red'}]}
              />
              <Text style={styles.countText}>{item.likeCount ?? 0}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openCommentsModal(item.id)}>
              <Icons name="comment" size={20} style={styles.icon} />
              <Text style={styles.countText}>{item.commentCount ?? 0}</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    },
    [handleLike, navigation, openCommentsModal],
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
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
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

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeCommentsModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Comments</Text>

          <FlatList
            data={posts.find(p => p.id === selectedPostId)?.comments ?? []}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.commentItem}>
                <Text style={styles.commentUser}>{item.userEmail}</Text>
                <Text style={styles.commentText}>{item.text}</Text>
              </View>
            )}
          />

          <TextInput
            value={commentText}
            onChangeText={setCommentText}
            placeholder="Write a comment..."
            style={styles.input}
          />
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.closeButton]}
              onPress={closeCommentsModal}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.postButton]}
              onPress={handleAddComment}
              disabled={submitting}>
              <Text style={styles.buttonText}>
                {submitting ? 'Posting...' : 'Post'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
