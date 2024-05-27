import { Form, message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {ShowLoading, HideLoading } from "../../redux/rootSlices";
import axios from "axios";

export default function AdminContact() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const Finish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-contact", {
        ...values,
        _id: portfolioData.contact._id
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
        initialValues={portfolioData?.contact}
      >
        <Form.Item name="name" label="Name">
          <input placeholder="Name" />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <input placeholder="Email" />
        </Form.Item>
        <Form.Item name="mobile" label="Mobile">
          <input placeholder="Mobile" />
        </Form.Item>
        <Form.Item name="address" label="Address">
          <input placeholder="Address" />
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
