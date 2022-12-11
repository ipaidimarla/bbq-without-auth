const mongoose = require("mongoose");
const ReservationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    unit: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    timeFrom: {
      type: String,
      required: true,
    },
    timeTo: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Reservation", ReservationSchema);
