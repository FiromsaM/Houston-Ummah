module.exports = {
  getHome: (req, res) => {
      res.render('home.ejs')
  },
  getAbout: (req, res) => {
    res.render('about.ejs')
  }
}