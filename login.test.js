const checkLogin = require('./login');

test('Đăng nhập thành công với tài khoản admin / 123', () => {
  expect(checkLogin('admin', '123')).toBe(true);
});

test('Đăng nhập thất bại khi sai mật khẩu', () => {
  expect(checkLogin('admin', '1234')).toBe(false);
});
