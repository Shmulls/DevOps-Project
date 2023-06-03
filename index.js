const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://shmul123:shmul123@cluster0.z756y1v.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

app.set("view engine", "ejs");

// Set up middleware
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.render("register", { error: null });
});

app.get("/register", (req, res) => {
  res.render("register", { error: null });
});

app.post("/register", (req, res) => {
  const { name, grade1, grade2, grade3 } = req.body;

  // Create a new user
  const newUser = new User({
    name,
    grade1,
    grade2,
    grade3,
  });

  // Save the user to the database
  newUser
    .save()
    .then(() => {
      res.redirect(`/welcome?name=${name}`);
    })
    .catch((error) => {
      console.log("Error saving user:", error);
      res.redirect("/register");
    });
});

app.get("/welcome", (req, res) => {
  const { name } = req.query;

  // Find the user by name
  User.findOne({ name })
    .then((user) => {
      if (!user) {
        res.redirect("/");
      } else {
        res.render("welcome", { user, error: null });
      }
    })
    .catch((error) => {
      console.log("Error finding user:", error);
      res.redirect("/");
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
