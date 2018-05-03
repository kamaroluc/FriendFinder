// Basic route that sends the user first to the AJAX Page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
  
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });