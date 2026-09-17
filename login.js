function checkLogin(username, password) {
  if (username === 'admin' && password === '123') {
    return true;
  }
  return false;
}

module.exports = checkLogin;
