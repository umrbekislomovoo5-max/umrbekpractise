
async function getUsers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(["User1", "User2", "User3"]);
    }, 1000);
  });
}


async function getPosts() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(["Post1", "Post2", "Post3"]);
    }, 2000);
  });
}


async function getComments() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(["Comment1", "Comment2", "Comment3"]);
    }, 3000);
  });
}



async function getAllData() {

  const [users, posts, comments] = await Promise.all([
    getUsers(),
    getPosts(),
    getComments()
  ]);

  return { users, posts, comments };
}

getAllData().then(data => console.log(data));



