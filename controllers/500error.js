exports.get500 = (req, res, next) => {
  res.status(500).render("500", {
    pagTitle: "error page",
    path: "/500",
  });
};
