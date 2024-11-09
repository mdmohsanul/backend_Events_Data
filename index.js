const { initializeDb } = require("./db.connection");
const Events = require("./models/eventCard.model");
const express = require("express");
const cors = require("cors");
const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(express.json());
app.use(cors(corsOptions));
initializeDb();

// read the profile.json data , the second parameter is of file type
// const fs = require("fs");
// const jsonData = fs.readFileSync("events.json", "utf-8");

// const eventsData = JSON.parse(jsonData);
//console.log(jsonData);
async function seedAllData(data) {
  try {
    await data.forEach((item) => {
      const newData = new Events(item);
      newData.save();
    });
  } catch (error) {
    console.log("Error seeding the data ", error);
  }
}
//seedAllData(eventsData);
async function seedData(data) {
  try {
    const event = new Events(data);
    return event.save();
  } catch (error) {
    console.log("Error seeding the data ", error);
  }
}
app.post("/events", async (req, res) => {
  try {
    const event = await seedData(req.body);
    if (event) {
      res.status(200).json({ message: "Event added successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update data ", error });
  }
});

async function getEvents() {
  try {
    const events = await Events.find();
    return events;
  } catch (error) {
    throw error;
  }
}
app.get("/events", async (req, res) => {
  try {
    const events = await getEvents();
    if (events.length != 0) {
      res.json(events);
    } else {
      res.status(404).json({ error: "No events found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching event list" });
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server connected");
});
