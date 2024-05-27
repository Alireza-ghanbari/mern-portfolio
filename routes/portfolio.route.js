import express from "express";
import {
  Intro,
  About,
  Experience,
  Project,
  Contact,
} from "../models/portfolio.model.js";

const router = express.Router();

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const experiences = await Experience.find();
    const contacts = await Contact.find();
    const projects = await Project.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      projects,
      experiences,
      contact: contacts[0],
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro update successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "Abouts update successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/add-experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).send({
      data: experience,
      success: true,
      message: "Exprience added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/update-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience update successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/delete-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience delete successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/add-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).send({
      data: project,
      success: true,
      message: "Project added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/update-project", async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: project,
      success: true,
      message: "Project update successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/delete-project", async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: project,
      success: true,
      message: "Project delete successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
