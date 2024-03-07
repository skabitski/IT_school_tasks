

function checkSpam(str) {
    return str.replace(/viagra|XXX/gi, '***');
  }
  
  function addComment() {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();
  
    if (commentText !== '') {
      const commentsContainer = document.getElementById('comments-container');
      const newComment = document.createElement('div');
      newComment.classList.add('comment');
      newComment.textContent = checkSpam(commentText);
      commentsContainer.append(newComment);
      commentInput.value = '';
    } else {
      alert('Please enter a valid comment.');
    }
  }