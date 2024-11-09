const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  hostName: {
    type: String,
  },
  time: {
    from: {
      type: String,
    },
    to: {
      type: String,
    },
  },
  location: {
    type: String,
  },
  eventMode: {
    type: String,
  },
  eventCost: {
    type: Number,
  },
  description: {
    type: String,
  },
  dressCode: {
    type: String,
  },
  ageRestriction: {
    type: String,
  },
  eventTags: [
    {
      type: String,
    },
  ],
  eventSpeakers: [
    {
      name: String,
      speakerImg: String,
      designation: String,
    },
  ],
  eventImage: {
    type: String,
  },
});
const Events = mongoose.model("Events", EventSchema);
module.exports = Events;
