const Modal = ({userData, userRepos}) => {
  if(userData.id) {
    return (
      <>
        <section>
          <div className="thumbnail">
            <img src={userData.avatar_url} alt={userData.name} />
          </div>
          <div className="user-content">
            <div className="user-name">{userData.name}</div>
            <div className="user-followers">Followers: {userData.followers}</div>
            <div className="user-repos">Repositories: {userData.public_repos}</div>
          </div>
          <div className="user-top-repo">
            <h4>Top Repositories</h4>
            <ul >
              {userRepos.map((repo, idx) => (idx < 4) ? <li key={idx}><a href={repo.html_url}>{repo.name}</a></li> : '')}
            </ul>
          </div>
        </section>
      </>
    );
  } else {
    return null
  }
}

export default Modal;