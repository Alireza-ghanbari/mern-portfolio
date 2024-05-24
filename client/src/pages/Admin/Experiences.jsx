import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Modal, message } from "antd";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlices";
import axios from "axios";

export default function Experiences() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  const [showAddEditModel, setShowAddEditModel] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-experience", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-experience", values);
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModel(false);
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-experience", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end mb-5">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModel(true);
            setType("add")
          }}
        >
          Add Experience
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {experiences.map((experience) => (
          <div className="shadow border p-5" key={experience.title}>
            <h2 className="text-2xl mb-1 textpri">{experience.period}</h2>
            <hr />
            <h2 className="mt-2 text-lg">{experience.company}</h2>
            <h2 className="mt-1 text-[17px]">{experience.title}</h2>
            <h2 className="mt-1 text-md text-gray-600">
              {experience.description}
            </h2>
            <div className="flex justify-end gap-3 mt-5">
              <a
                className="text-black underline hover:text-black hover:underline transition-all duration-75"
                onClick={() => {
                  setSelectedItemForEdit(experience);
                  setShowAddEditModel(true);
                  setType("edit");
                }}
              >
                Edit
              </a>
              <a
                className=" underline hover:text-red-600 hover:underline transition-all duration-75"
                onClick={() => {
                  onDelete(experience);
                }}
              >
                Delete
              </a>
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          className="z-10"
          open={showAddEditModel}
          title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
          footer={null}
          onCancel={() => {
            setShowAddEditModel(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={selectedItemForEdit}
          >
            <Form.Item name="period" label="Period">
              <input placeholder="Period" />
            </Form.Item>

            <Form.Item name="company" label="Company">
              <input placeholder="Company" />
            </Form.Item>

            <Form.Item name="title" label="Role">
              <input placeholder="Role" />
            </Form.Item>

            <Form.Item name="description" label="Description">
              <input placeholder="Description" />
            </Form.Item>

            <div className="flex justify-end gap-3">
              <button
                className="border border-primary text-primary px-5 py-2"
                onClick={() => {
                  setShowAddEditModel(false);
                  setSelectedItemForEdit(null);
                }}
              >
                Cancel
              </button>
              <button className="bg-primary text-white px-5 py-2">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}
