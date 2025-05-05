import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/navigation.types';
import useUserPosts from '../../hooks/useUserPosts';
import {styles} from './profile.styles';
import {useLogout} from '../../hooks/useLogout';
import Icons from 'react-native-vector-icons/MaterialIcons';
import useAuthUser from '../../hooks/useAuthUser';
import {PostDataWithId} from './profile.types';

export default function Profile() {
  const {
    posts,
    loading,
    modalVisible,
    handleDeletePress,
    handleConfirmDelete,
    handleCancelDelete,
  } = useUserPosts();

  const {user} = useAuthUser();

  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const {handleLogout} = useLogout();
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const renderItem = useCallback(
    ({item}: {item: PostDataWithId}) => {
      return (
        <View style={styles.postContainer}>
          <View style={styles.titleRow}>
            <Text
              style={styles.title}
              onPress={() => navigation.navigate('PostDetails', {post: item})}>
              {item.title}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setSelectedPostId(item.id);
                handleDeletePress();
              }}>
              <Icons name="delete-outline" style={styles.deleteIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.content}>{item.content}</Text>
        </View>
      );
    },
    [navigation, handleDeletePress],
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
      <View style={styles.userInfoContainer}>
        {user && (
          <>
            <Text style={styles.userName}>
              Welcome, {user.email?.split('@')[0]}
            </Text>
            <TouchableOpacity
              style={styles.logoutbuttonContainer}
              onPress={handleLogout}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
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
        transparent={true}
        onRequestClose={handleCancelDelete}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to delete this post?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={handleCancelDelete}
                style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (selectedPostId) {
                    handleConfirmDelete(selectedPostId);
                    setSelectedPostId(null);
                  }
                }}
                style={styles.deleteButton}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
