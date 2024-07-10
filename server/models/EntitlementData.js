import mongoose from "mongoose";

const EntitlementDataSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  displayName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  isHidden: {
    type: Boolean,
    required: true
  },
  createdDateTime: {
    type: Date,
    required: true
  },
  modifiedDateTime: {
    type: Date,
    required: true
  }
});

const EntitlementData = mongoose.model('EntitlementData', EntitlementDataSchema,'EntitlementData');

export default EntitlementData;
