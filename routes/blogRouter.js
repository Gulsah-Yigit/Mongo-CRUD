import express from "express";

import {
  insert,
  readAll,
  findByID,
  deleteByID,
  updateByID,
} from "../utils/dbHelperMethods.js";

export const router = express.Router();

/*** C ***/
router.post("/add-blog", insert);

/*** R ***/
router.get("/single-blog/:_id", findByID);
router.get("/all-blogs", readAll);

/** U */
router.put("/update-blog/:_id", updateByID);

/*** D ***/
router.delete("/delete-blog/:_id", deleteByID);
