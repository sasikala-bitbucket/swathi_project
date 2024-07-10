import mongoose from "mongoose";

const provisioningStepSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  provisioningStepType: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  details: {
    type: Map,
    of: String
  }
});

const modifiedPropertySchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true
  },
  oldValue: {
    type: String
  },
  newValue: {
    type: String
  }
});

const identitySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  identityType: {
    type: String
  },
  details: {
    type: Map,
    of: String
  }
});

const systemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  details: {
    type: Map,
    of: String
  }
});

const errorInformationSchema = new mongoose.Schema({
  errorCode: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  additionalDetails: {
    type: String
  },
  errorCategory: {
    type: String,
    required: true
  },
  recommendedAction: {
    type: String
  }
});

const provisioningStatusInfoSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true
  },
  errorInformation: errorInformationSchema
});

const UserProvisioningSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  activityDateTime: {
    type: Date,
    required: true
  },
  tenantId: {
    type: String,
    required: true
  },
  jobId: {
    type: String,
    required: true
  },
  cycleId: {
    type: String,
    required: true
  },
  changeId: {
    type: String,
    required: true
  },
  provisioningAction: {
    type: String,
    required: true
  },
  durationInMilliseconds: {
    type: Number,
    required: true
  },
  servicePrincipal: identitySchema,
  sourceSystem: systemSchema,
  targetSystem: systemSchema,
  initiatedBy: identitySchema,
  sourceIdentity: identitySchema,
  targetIdentity: identitySchema,
  provisioningStatusInfo: provisioningStatusInfoSchema,
  provisioningSteps: [provisioningStepSchema],
  modifiedProperties: [modifiedPropertySchema]
});

const UserProvisioningData = mongoose.model('UserProvisioningData', UserProvisioningSchema,'UserProvisioningData');

export default UserProvisioningData;
