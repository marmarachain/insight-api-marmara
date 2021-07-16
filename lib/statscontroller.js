const Amountstat = require("./stats.js");

// Retrieve all marmaraamounstat data from the database.
exports.findAll = (req, res) => {
  Amountstat.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving stats."
      });
    else res.send(data);
  });
};
// Retrieve last marmaraamounstat data from the database.
exports.findLast = (req, res) => {
  Amountstat.getLast((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the last stat record."
      });
    else res.send(data);
  });
};

