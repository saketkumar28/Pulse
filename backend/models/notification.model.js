import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      req: true,
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      req: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["follow", "like"],
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamp: true }
);

const Notification = mongoose.model("Notification", notificationSchema);
export default Notification;
