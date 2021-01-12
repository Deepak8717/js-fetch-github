fetch("https://api.github.com/users/deepak8717/repos")
  .then(
    (resp) => resp.json() // this return a promise
  )
  .then((repos) => {
    for (const repo of repos) {
      console.log(repo.name);
    }
  })
  .catch((ex) => {
    console.error(ex);
  });
