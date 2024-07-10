//const mongoose = require('../db/mongoose');
import getCountryISO3 from "country-iso-2-to-3";

import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import Transaction from "../models/Transaction.js";
import User from "../models/User.js";
import AppRoleDetails from "../models/AppRoleDetails.js";
import EmpDetails from "../models/EmpDetails.js";
import ZohoAppRoleDetails from "../models/ZohoAppRoleDetails.js";
import AccessReviewData from "../models/AccessReviewData.js";
import EntitlementData from "../models/EntitlementData.js";
import LifecycleData from "../models/LifecycleData.js";
import UserProvisioningData from "../models/UserProvisioningData.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );

    res.status(200).json(productsWithStats);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getEmpDetails = async (req, res) => {
  try {
    const empdetails = await EmpDetails.find({});
    console.log('Number of documents fetched:', empdetails.length);
    
    const empdetailswithApprole = await Promise.all(
      empdetails.map(async (emp) => {
        const details = await AppRoleDetails.find({
          EmployeeName: emp.displayName,
        });
        const apps = details.map(detail => detail.AppName).join(', ');
        const appName = apps || 'Unassigned';
        const roles = details
                      .map(detail => detail.RoleName)
                      .filter((value, index, self) => value !== null && self.indexOf(value) === index)
                      .join(', ');
        const role = roles || 'User';
        return {
          ...emp._doc,
          appnames:appName,
          roles:role
        };
      })
    );

    res.status(200).json(empdetailswithApprole);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "user" }).select("-password");

    res.status(200).json(customers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getZohoAppRoleDetails = async (req, res) => {
  try {
    const zprDetails = await ZohoAppRoleDetails.find({ application: "Zoho" });
    
    res.status(200).json(zprDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getZomatoAppRoleDetails = async (req, res) => {
  try {
    const zprDetails = await ZohoAppRoleDetails.find({ application: "Zomato" });
    
    res.status(200).json(zprDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getSwiggyAppRoleDetails = async (req, res) => {
  try {
    const zprDetails = await ZohoAppRoleDetails.find({ application:"Swiggy" });
        res.status(200).json(zprDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getMetaAppRoleDetails = async (req, res) => {
  try {
    const zprDetails = await ZohoAppRoleDetails.find({ application: "Meta" });
   
    res.status(200).json(zprDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: sortParsed.sort === "asc" ? 1 : -1,
      };

      return sortFormatted;
    };

    const sortFormatted = Boolean(sort) ? generateSort() : {};

    const transactions = await Transaction.find({
      $or: [
        { cost: { $regex: new RegExp(search, "i") } },
        { userId: { $regex: new RegExp(search, "i") } },
      ],
    })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

    const total = await Transaction.countDocuments({
      cost: { $regex: search, $options: "i" },
    });

    res.status(200).json({ transactions, total });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getGeography = async (req, res) => {
  try {
    const users = await User.find();

    const mappedLocations = users.reduce((acc, { country }) => {
      const countryISO3 = getCountryISO3(country);
      if (!acc[countryISO3]) {
        acc[countryISO3] = 0;
      }
      acc[countryISO3] += 1;
      return acc;
    }, {});

    const formattedLocations = Object.entries(mappedLocations).map(
      ([country, count]) => {
        return {
          id: country,
          value: count,
        };
      }
    );

    res.status(200).json(formattedLocations);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getUserProvisioningData = async (req, res) => {
  try {
    
    const zprDetails = await UserProvisioningData.find({ });
    
    res.status(200).json(zprDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getLifecycleData = async (req, res) => {
  try {
    const zprDetails = await LifecycleData.find({ });
    res.status(200).json(zprDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getEntitlementData = async (req, res) => {

  try {

    const zprDetails = await EntitlementData.find({ });
   
    res.status(200).json(zprDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getAccessCertification = async (req, res) => {
  try {
    const zprDetails = await ZohoAppRoleDetails.find({ application: "Meta" });
   
    res.status(200).json(zprDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getAccessReview = async (req, res) => {
  try {

    //console.log("hi entered");
    const zprDetails = await AccessReviewData.find({ });
   // console.log(zprDetails);
    res.status(200).json(zprDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
