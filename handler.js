const config = require("./knexfile");
const knex = require("knex");
const dbClient = knex(config);

const register = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  dbClient("users")
    .insert({ username, password })
    .then(() =>
      res.json({ status: true, message: "User created successfully." })
    )
    .catch(err => res.json({ status: false, message: err.message }));
};

const login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  dbClient("users")
    .select()
    .where({ username, password })
    .then(data => {
      if (data.length > 0) {
        res.json({ status: true, message: "Logged In." });
      } else {
        res.json({ status: false, message: "Username or password Incorrect." });
      }
    })
    .catch(err => res.json({ status: false, message: err.message }));
};

module.exports = {
  register,
  login
};
