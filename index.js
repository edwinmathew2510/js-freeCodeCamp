function maskedEmail(email) {
  const atIndex = email.indexOf("@");
  const userName = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const firstChar = userName[0];
  const lastChar = userName[userName.length - 1];

  const masked = firstChar + "*".repeat(userName.length - 2) + lastChar;
  return masked + domain;
}

function maskedPassword(pass) {
  const passLength = pass.length;
  const maskedPass = "*".repeat(passLength);
  return maskedPass;
}
console.log(maskedEmail("edwintmw2510@gmail.com"));
console.log(maskedPassword("edwin123"));
