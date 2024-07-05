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
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);
router.get("/zoho",getZohoAppRoleDetails);
router.get("/zomato",getZomatoAppRoleDetails);
router.get("/swiggy",getSwiggyAppRoleDetails);
router.get("/meta",getMetaAppRoleDetails);
router.get("/empdetails",getEmpDetails);

export default router;
