import mongoose from "mongoose";

// Define the schema
const ZohoAppRoleDetailsSchema = new mongoose.Schema({
    application: { type: String },
    country: { type: String },
    language: { type: String },
    microsoft: { type: Boolean },
    $shift_effective_from: { type: Date },
    id: { type: String },
    state: { type: String },
    fax: { type: String },
    country_locale: { type: String },
    sandboxDeveloper: { type: Boolean },
    zip: { type: String },
    decimal_separator: { type: String },
    created_time: { type: Date },
    time_format: { type: String },
    offset: { type: Number },
    profile: {
        name: { type: String },
        id: { type: String }
    },
    created_by: {
        name: { type: String },
        id: { type: String }
    },
    zuid: { type: String },
    full_name: { type: String },
    phone: { type: String },
    dob: { type: Date },
    status: { type: String },
    role: {
        name: { type: String },
        id: { type: String }
    },
    customize_info: {
        notes_desc: { type: String },
        show_right_panel: { type: Boolean },
        bc_view: { type: String },
        show_home: { type: Boolean },
        show_detail_view: { type: Boolean },
        unpin_recent_item: { type: String }
    },
    city: { type: String },
    signature: { type: String },
    sort_order_preference: { type: String },
    name_format: { type: String },
    locale: { type: String },
    personal_account: { type: Boolean },
    Isonline: { type: Boolean },
    default_tab_group: { type: String },
    Modified_By: {
        name: { type: String },
        id: { type: String }
    },
    street: { type: String },
    $current_shift: { type: Date },
    alias: { type: String },
    theme: {
        normal_tab: {
            font_color: { type: String },
            background: { type: String }
        },
        selected_tab: {
            font_color: { type: String },
            background: { type: String }
        },
        new_background: { type: String },
        background: { type: String },
        screen: { type: String },
        type: { type: String }
    },
    first_name: { type: String },
    email: { type: String },
    status_reason__s: { type: String },
    Modified_Time: { type: Date },
    website: { type: String },
    $next_shift: { type: Date },
    mobile: { type: String },
    last_name: { type: String },
    time_zone: { type: String },
    number_separator: { type: String },
    confirm: { type: Boolean },
    date_format: { type: String },
    category: { type: String }
});

const ZohoAppRoleDetails = mongoose.model('ZohoAppRoleDetails', ZohoAppRoleDetailsSchema,'ZohoAppRoleDetails');

export default ZohoAppRoleDetails;
