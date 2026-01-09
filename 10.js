async function getUserDataFlow(userId) {
  try {
   
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = await userResponse.json();


    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
    const posts = await postsResponse.json();

    
    const commentsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`
    );
    const comments = await commentsResponse.json();

    return {
      user: user,
      firstPost: posts[0],
      comments: comments
    };

  } catch (error) {
    console.log("Xatolik:", error);
  }
}

getUserDataFlow(1)
  .then(data => {
    console.log("Foydalanuvchi:", data.user);
    console.log("Birinchi post:", data.firstPost);
    console.log("Commentlar:", data.comments);
  });
