import {useState} from 'react';
import {addComment, toggleLikePost} from '../services/postInteraction';

export default function usePostInteractions() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [commentText, setCommentText] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const openCommentsModal = (postId: string) => {
    setSelectedPostId(postId);
    setModalVisible(true);
  };

  const closeCommentsModal = () => {
    setModalVisible(false);
    setSelectedPostId(null);
    setCommentText('');
  };

  const handleAddComment = async () => {
    if (!selectedPostId || !commentText.trim()) {
      return;
    }

    try {
      setSubmitting(true);
      await addComment(selectedPostId, commentText);
      setCommentText('');
    } catch (err) {
      console.error('Failed to add comment:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleLike = async (postId: string) => {
    try {
      await toggleLikePost(postId);
    } catch (error) {
      console.error('Failed to like post:', error);
    }
  };

  return {
    modalVisible,
    selectedPostId,
    commentText,
    submitting,
    openCommentsModal,
    closeCommentsModal,
    handleAddComment,
    handleLike,
    setCommentText,
  };
}
