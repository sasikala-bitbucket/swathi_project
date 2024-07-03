import mongoose from "mongoose";

const AppRoleDetailsSchema = new mongoose.Schema(
    {
    EmployeeName: { type: String },
    AppName: { type: String },
    RoleName: { type: String, default: null }
}
);

// Create a model from the schema
const AppRoleDetails = mongoose.model('AppRoleDetails', AppRoleDetailsSchema,'AppRoleDetails');

export default AppRoleDetails;