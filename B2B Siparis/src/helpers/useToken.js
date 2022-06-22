    
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    if(userToken !== null){
        return userToken
    }
  };

  const saveToken = (userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken));
    return userToken;
  };


  const removeToken = () => {
    localStorage.removeItem('token');
  };

  export {
    getToken,
    saveToken,
    removeToken
  }