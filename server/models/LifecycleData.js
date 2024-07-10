import mongoose from "mongoose";

// Define the schema
const LifecycleDataSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  isEnabled: {
    type: Boolean,
    required: true
  },
  isSchedulingEnabled: {
    type: Boolean,
    required: true
  },
  lastModifiedDateTime: {
    type: Date,
    required: true
  },
  createdDateTime: {
    type: Date,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  version: {
    type: Number,
    required: true
  }
});

// Create the model
const LifecycleData = mongoose.model('LifecycleData', LifecycleDataSchema,'LifecycleData');

export default LifecycleData;
