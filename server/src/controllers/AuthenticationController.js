module.exports = {
  enroll (req, res) {
    res.send({
      message: `Hello ${req.body.email}! You are now enrolled!`
    })
  }
}
