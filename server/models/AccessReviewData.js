import mongoose from "mongoose";

// Define the schema
const AccessReviewSchema = new mongoose.Schema({
  accessReviewId: {
    type: String,
    required: true,
    unique: true
  },
  reviewType: {
    type: String,
    required: true
  },
  resourceDisplayName: {
    type: String,
    required: true
  },
  resourceId: {
    type: String,
    required: true
  },
  reviewName: {
    type: String,
    required: true
  },
  createdDateTime: {
    type: Date,
    required: true
  },
  reviewStartDate: {
    type: Date,
    required: true
  },
  reviewEndDate: {
    type: Date,
    required: true
  },
  reviewStatus: {
    type: String,
    required: true
  },
  ownerId: {
    type: String,
    required: true
  },
  ownerName: {
    type: String,
    required: true
  },
  ownerUpn: {
    type: String,
    required: true
  },
  principalId: {
    type: String,
    required: true
  },
  principalName: {
    type: String,
    required: true
  },
  principalUpn: {
    type: String,
    required: true
  },
  reviewDate: {
    type: Date,
    required: true
  },
  reviewResult: {
    type: String,
    required: true
  },
  justification: {
    type: String,
    default: ''
  },
  reviewerId: {
    type: String,
    required: true
  },
  reviewerName: {
    type: String,
    required: true
  },
  reviewerUpn: {
    type: String,
    default: ''
  },
  reviewerEmailAddress: {
    type: String,
    default: ''
  },
  appliedByName: {
    type: String,
    default: ''
  },
  appliedByUpn: {
    type: String,
    default: ''
  },
  appliedByEmailAddress: {
    type: String,
    default: ''
  },
  appliedDate: {
    type: String,
    default: ''
  },
  accessRecommendation: {
    type: String,
    required: true
  },
  submissionResult: {
    type: String,
    required: true
  },
  principalType: {
    type: String,
    required: true
  },
  accessReviewSeriesId: {
    type: String,
    required: true
  },
  stage: {
    type: String,
    default: ''
  },
  totalStages: {
    type: String,
    default: ''
  },
  lastMultiStageDecision: {
    type: String,
    default: ''
  },
  lastSignInDate: {
    type: String,
    default: ''
  }
});

// Create the model
const AccessReview = mongoose.model('AccessReview', AccessReviewSchema,'AccessReview');

export default AccessReview;
