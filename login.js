function checkLogin(username, password) {
  if (username === 'admin' && password === '') {
    return true;
  }
  return false;
}

module.exports = checkLogin;
