const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOptions);
};

const verifyPassword = (password, hashedPassword) => {
  return argon2.verify(hashedPassword, password);
};

const JWTTokenCreator = (firstname, lastname, email, fonction, site) => {
  return jwt.sign(
    { firstname, lastname, email, fonction, site },
    process.env.PRIVATE_KEY
  );
};
module.exports = {
  JWTTokenCreator,
  hashPassword,
  verifyPassword,
};
