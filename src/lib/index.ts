export function isUserNameValid(username: string) {
  const usernameRegex = /^[a-z0-9_.]+$/;
  return usernameRegex.test(username);
}
