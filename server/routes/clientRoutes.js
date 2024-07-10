import express from "express";
import {
  getCustomers,
  getGeography,
  getProducts,
  getTransactions,
  getZohoAppRoleDetails,
  getMetaAppRoleDetails,
  getSwiggyAppRoleDetails,
  getZomatoAppRoleDetails,
  getEmpDetails,
  getAccessReview,
  getAccessCertification,
  getLifecycleData,
  getEntitlementData,
  getUserProvisioningData
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);
router.get("/zohobigin",getZohoAppRoleDetails);
router.get("/sharepoint",getZomatoAppRoleDetails);
router.get("/swiggy",getSwiggyAppRoleDetails);
router.get("/meta",getMetaAppRoleDetails);
router.get("/empdetails",getEmpDetails);

router.get("/userprovisioning",getUserProvisioningData);
router.get("/lifecyclemanagement",getLifecycleData);
router.get("/entitlementmanagement",getEntitlementData);
router.get("/accessreview",getAccessReview);
router.get("/accesscertification",getAccessCertification);


export default router;
