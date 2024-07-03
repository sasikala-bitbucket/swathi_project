import mongoose from "mongoose";

// Define the schema
const EmpDetailsSchema = new mongoose.Schema({
    id: { type: String },
    deletedDateTime: { type: Date, default: null },
    accountEnabled: { type: Boolean },
    ageGroup: { type: String, default: null },
    businessPhones: { type: [String], default: [] },
    city: { type: String, default: null },
    createdDateTime: { type: Date },
    creationType: { type: String, default: null },
    companyName: { type: String, default: null },
    consentProvidedForMinor: { type: String, default: null },
    country: { type: String, default: null },
    department: { type: String, default: null },
    displayName: { type: String },
    employeeId: { type: String },
    employeeHireDate: { type: Date, default: null },
    employeeLeaveDateTime: { type: Date },
    employeeType: { type: String, default: null },
    faxNumber: { type: String, default: null },
    givenName: { type: String },
    imAddresses: { type: [String], default: [] },
    infoCatalogs: { type: [String], default: [] },
    isLicenseReconciliationNeeded: { type: Boolean },
    isManagementRestricted: { type: Boolean, default: null },
    isResourceAccount: { type: Boolean, default: null },
    jobTitle: { type: String, default: null },
    legalAgeGroupClassification: { type: String, default: null },
    mail: { type: String, default: null },
    mailNickname: { type: String },
    mobilePhone: { type: String, default: null },
    onPremisesDistinguishedName: { type: String, default: null },
    officeLocation: { type: String, default: null },
    onPremisesDomainName: { type: String, default: null },
    onPremisesImmutableId: { type: String },
    onPremisesLastSyncDateTime: { type: Date, default: null },
    onPremisesObjectIdentifier: { type: String },
    onPremisesSecurityIdentifier: { type: String, default: null },
    onPremisesSamAccountName: { type: String, default: null },
    onPremisesSyncEnabled: { type: Boolean, default: null },
    onPremisesUserPrincipalName: { type: String, default: null },
    otherMails: { type: [String], default: [] },
    passwordPolicies: { type: String },
    postalCode: { type: String, default: null },
    preferredDataLocation: { type: String, default: null },
    preferredLanguage: { type: String, default: null },
    proxyAddresses: { type: [String], default: [] },
    refreshTokensValidFromDateTime: { type: Date },
    securityIdentifier: { type: String },
    showInAddressList: { type: Boolean, default: null },
    signInSessionsValidFromDateTime: { type: Date },
    state: { type: String, default: null },
    streetAddress: { type: String, default: null },
    surname: { type: String },
    usageLocation: { type: String, default: null },
    userPrincipalName: { type: String },
    externalUserConvertedOn: { type: Date, default: null },
    externalUserState: { type: String, default: null },
    externalUserStateChangeDateTime: { type: Date, default: null },
    userType: { type: String },
    employeeOrgData: { type: mongoose.Schema.Types.Mixed, default: null },
    assignedLicenses: { type: mongoose.Schema.Types.Mixed, default: [] },
    assignedPlans: { type: mongoose.Schema.Types.Mixed, default: [] },
    authorizationInfo: {
        certificateUserIds: { type: [String], default: [] }
    },
    cloudRealtimeCommunicationInfo: {
        isSipEnabled: { type: Boolean, default: null }
    },
    deviceKeys: { type: mongoose.Schema.Types.Mixed, default: [] },
    identities: {
        type: [{
            signInType: { type: String },
            issuer: { type: String },
            issuerAssignedId: { type: String }
        }],
        default: []
    },
    onPremisesExtensionAttributes: {
        extensionAttribute1: { type: String, default: null },
        extensionAttribute2: { type: String, default: null },
        extensionAttribute3: { type: String, default: null },
        extensionAttribute4: { type: String, default: null },
        extensionAttribute5: { type: String, default: null },
        extensionAttribute6: { type: String, default: null },
        extensionAttribute7: { type: String, default: null },
        extensionAttribute8: { type: String, default: null },
        extensionAttribute9: { type: String, default: null },
        extensionAttribute10: { type: Date, default: null },
        extensionAttribute11: { type: String, default: null },
        extensionAttribute12: { type: String, default: null },
        extensionAttribute13: { type: String, default: null },
        extensionAttribute14: { type: String, default: null },
        extensionAttribute15: { type: String, default: null }
    },
    onPremisesProvisioningErrors: { type: [String], default: [] },
    onPremisesSipInfo: {
        isSipEnabled: { type: Boolean, default: false },
        sipDeploymentLocation: { type: String, default: null },
        sipPrimaryAddress: { type: String, default: null }
    },
    passwordProfile: {
        password: { type: String, default: null },
        forceChangePasswordNextSignIn: { type: Boolean },
        forceChangePasswordNextSignInWithMfa: { type: Boolean }
    },
    provisionedPlans: { type: mongoose.Schema.Types.Mixed, default: [] },
    serviceProvisioningErrors: { type: [String], default: [] }
});

// Create a model from the schema
const EmpDetails = mongoose.model('EmpDetails', EmpDetailsSchema,'EmpDetails');

export default EmpDetails;
