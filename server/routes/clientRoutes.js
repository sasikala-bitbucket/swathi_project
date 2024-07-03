import express from "express";
import {
  getCustomers,
  getGeography,
  getProducts,
  getTransactions,
  getZohoAppRoleDetails,
  getEmpDetails,
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);
router.get("/zohoapproledetails",getZohoAppRoleDetails);
router.get("/empdetails",getEmpDetails);

export default router;
