const Button = ({nameButton, userName, setUserData, setUserRepos, warning, setWarning }) => {
  function handleClick () {
    getUserData(userName)
  }

  function getUserData(userName) {
    fetch(`https://api.github.com/users/${userName}`)
    .then( r => r.json() )
    .then( json => {
      if (json.message === "Not Found") {
        setWarning('error')
      } else {
        setUserData(json);
        getUserTopRepos(json.repos_url);
      }      
    })
    .catch( err => console.error(err) )
  }

  function getUserTopRepos(repos) {
    fetch(repos)
    .then( r => r.json() )
    .then( json => {
      setUserRepos(json);
    })
    .catch( err => console.error(err) )
  }
  
  return (
    <>
      <button onClick={handleClick} >{nameButton}</button>
    </>
  );
}

export default Button;