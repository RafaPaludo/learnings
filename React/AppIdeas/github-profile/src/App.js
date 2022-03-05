import React from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import Modal from './components/Modal';

function App() {
  const [userName, setUserName] = React.useState('');
  const [userData, setUserData] = React.useState({});
  const [userRepos, setUserRepos] = React.useState([]);
  const [warning, setWarning] = React.useState('');
  const [error, setError] = React.useState(false);

  React.useEffect( () => {
    if(warning === 'error') {
      errorAnimation()
    }
  }, [warning])

  function errorAnimation () {
    setError(true)
    setTimeout( () => {
      setError(false)
      setWarning('')
    }, 700)
  }

  return (
    <>
      <label className={error ? 'error' : ''}>
        <Input
          type="text" 
          placeholder={error ? 'Usuário inválido!' : "Digite um usuário Github"}
          value={userName}
          setUserName={setUserName}
        />
        <Button 
          nameButton="Search"
          userName={userName}
          setUserData={setUserData}
          setUserRepos={setUserRepos}
          warning={warning}
          setWarning={setWarning}
        />
      </label>
      <Modal 
        userData={userData}
        userRepos={userRepos}
      />
    </>
  );
}

export default App;
