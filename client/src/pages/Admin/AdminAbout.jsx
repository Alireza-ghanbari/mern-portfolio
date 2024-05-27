import { Form, message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlices";
import axios from "axios";

export default function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const Finish = async (values) => {
    try {
      const tempSkills = values.skills.split(",");
      values.skills = tempSkills;

      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: portfolioData.about._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };

  return (
    <div>
      <Form
        onFinish={Finish}
        layout="vertical"
        initialValues={{
          ...portfolioData.about,
          skills: portfolioData.about.skills.join(", "),
        }}
      >
        <Form.Item name="imgUrl" label="Image Url">
          <input placeholder="Image Url" />
        </Form.Item>

        <Form.Item name="description1" label="Description One">
          <textarea placeholder="Description One" />
        </Form.Item>

        <Form.Item name="description2" label="Description Two">
          <textarea placeholder="Description Two" />
        </Form.Item>

        <Form.Item name="skills" label="Skills">
          <textarea placeholder="Skills" />
        </Form.Item>

        <div className="flex justify-end">
          <button type="submit" className="px-8 py-2 bg-primary text-white">
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
}
