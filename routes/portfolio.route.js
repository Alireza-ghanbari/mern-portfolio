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

export default router;
