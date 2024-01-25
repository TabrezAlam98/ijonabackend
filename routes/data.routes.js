const { Router } = require("express");
require("dotenv").config();

const { DataModel } = require("../models/Note.model");

const dataController = Router();

dataController.get("/", async (req, res) => {
 
  const data = await DataModel.find();
  res.send(data);
});

dataController.post("/create", async (req, res) => {
  const { Name,Address} = req.body;
  const data = new DataModel({
    Name,
    Address,
  
  });
  try {
    await data.save();
    res.send("data created");
  } catch (err) {
    res.send("something went wrong");
  }
});

dataController.delete("/delete/:noteId", async (req, res) => {
  const { noteId } = req.params;
  const deletedData = await DataModel.findOneAndDelete({
    _id: noteId
  });
  if (deletedData) {
    res.status(200).send("Deleted");
  } else {
    res.send("couldn't delete");
  }
});

dataController.patch("/edit/:dataId", async (req, res) => {
  const { dataId } = req.params;
  const deletedData = await DataModel.findOneAndUpdate(
    { _id: dataId,},
    req.body
  );
  if (deletedData) {
    res.send("edited");
  } else {
    res.send("couldn't edit");
  }
});

module.exports = {
  dataController,
};
