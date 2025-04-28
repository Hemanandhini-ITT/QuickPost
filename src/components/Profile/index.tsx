import React from 'react';
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
import auth from '@react-native-firebase/auth';

export default function Profile() {
  const {
    posts,
    loading,
    modalVisible,
    handleDeletePress,
    handleConfirmDelete,
    handleCancelDelete,
  } = useUserPosts();
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const {handleLogout} = useLogout();
  const user = auth().currentUser;

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
      <View style={styles.userInfoContainer}>
        {user && (
          <>
            <Text style={styles.userName}>Welcome, {user.email}</Text>
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
        contentContainerStyle={styles.listContainer}
        renderItem={({item}) => (
          <View style={styles.postContainer}>
            <Text
              style={styles.title}
              onPress={() => navigation.navigate('PostDetails', {post: item})}>
              {item.title}
            </Text>
            <Text style={styles.content}>{item.content}</Text>
            <TouchableOpacity
              style={styles.deleteButtonContainer}
              onPress={() => handleDeletePress(item.id)}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
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
                onPress={handleConfirmDelete}
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
