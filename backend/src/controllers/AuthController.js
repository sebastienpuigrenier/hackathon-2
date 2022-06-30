const models = require("../models");
const { JWTTokenCreator } = require("../helpers/authHelper");
const auth = require("../helpers/authHelper");

class AuthController {
  static session = (req, res) => {
    models.users.findByEmail(req.body.email).then((user) => {
      const { firstname, lastname, email, fonction, site, password } =
        user[0][0];
      auth
        .verifyPassword(req.body.password, password)
        .then((isVerify) => {
          if (isVerify) {
            const token = JWTTokenCreator(
              firstname,
              lastname,
              email,
              fonction,
              site
            );
            res
              .status(201)
              .cookie("user_token", token, {
                httpOnly: true,
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
              })
              .json({
                message: "Le mot de passe est correct",
                cookie: token,
                firstname,
                lastname,
                email,
                fonction,
                site,
              });
          } else {
            res.status(401).send("Email ou mot de passe incorect");
          }
        })
        .catch(() => {
          res.status(401).send("Email ou mot de passe incorect");
        });
    });
  };

  static logout = (req, res) => {
    res.cookie("user_token", "").sendStatus(200);
  };
}

module.exports = AuthController;
