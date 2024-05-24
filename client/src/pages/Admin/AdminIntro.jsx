import { Form, message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {ShowLoading, HideLoading } from "../../redux/rootSlices";
import axios from "axios";

export default function AdminIntro() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const Finish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-intro", {
        ...values,
        _id: portfolioData.intro._id
      });
      dispatch(HideLoading())
      if(response.data.success){
        message.success(response.data.message)
      }else{
        message.error(response.data.message)
      }
    } catch (error) {
        message.error(error.message)
        dispatch(HideLoading())
    }
  };

  return (
    <div>
      <Form
        onFinish={Finish}
        layout="vertical"
        initialValues={portfolioData?.intro}
      >
        <Form.Item name="welcomeText" label="Welcome Text">
          <input placeholder="Welcome Text" />
        </Form.Item>
        <Form.Item name="firstname" label="First Name">
          <input placeholder="First Name" />
        </Form.Item>
        <Form.Item name="lastname" label="Last Name">
          <input placeholder="Last Name" />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <input placeholder="Caption" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <textarea placeholder="Description" />
        </Form.Item>

        <div className="flex justify-end">
          <button type="submit" className="px-8 py-2 bg-primary text-white" >
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
}
