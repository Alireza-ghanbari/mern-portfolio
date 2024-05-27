import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Modal, message } from "antd";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlices";
import axios from "axios";

export default function AdminProjects() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  const [showAddEditModel, setShowAddEditModel] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = useState("add");

  const onFinish = async (values) => {
    const tempTechnologies = values?.technologies?.split(",") || [];
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-project", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-project", values);
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
      const response = await axios.post("/api/portfolio/delete-project", {
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
    <div className="mb-10">
      <div className="flex justify-end mb-5">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModel(true);
            setType("add");
          }}
        >
          Add Project
        </button>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-1 gap-5">
        {projects.map((project) => (
          <div className="shadow border p-5" key={project.title}>
            <h2 className="text-2xl mb-1 textpri">{project.title}</h2>
            <hr />
            <img src={project.image} alt="" className="h-60 w-80 my-2 py-2" />
            <a
              target="_blankkk"
              href={project.link}
              className="underline text-gray-500 hover:text-black hover:underline transition-all duration-100"
            >
              click to see
            </a>
            <p className="my-2 font-semibold tracking-wider">
              {project.technologies}
            </p>
            <h2 className="mt-1 text-md text-gray-600">
              {project.description}
            </h2>
            <div className="flex justify-end gap-3 mt-5">
              <a
                className="text-black underline hover:text-black hover:underline transition-all duration-75"
                onClick={() => {
                  setSelectedItemForEdit(project);
                  setShowAddEditModel(true);
                  setType("edit");
                }}
              >
                Edit
              </a>
              <a
                className=" underline hover:text-red-600 hover:underline transition-all duration-75"
                onClick={() => {
                  onDelete(project);
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
          title={selectedItemForEdit ? "Edit Project" : "Add Project"}
          footer={null}
          onCancel={() => {
            setShowAddEditModel(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={
              {
                ...selectedItemForEdit,
                technologies: selectedItemForEdit?.technologies.join(", "),
              } || {}
            }
          >
            <Form.Item name="title" label="Title">
              <input placeholder="Title" />
            </Form.Item>

            <Form.Item name="image" label="Image Url">
              <input placeholder="Image" />
            </Form.Item>

            <Form.Item name="description" label="Description">
              <textarea placeholder="Description" />
            </Form.Item>

            <Form.Item name="link" label="Link">
              <input placeholder="Link" />
            </Form.Item>

            <Form.Item name="technologies" label="Technologies">
              <input placeholder="Technologies" />
            </Form.Item>

            <div className="flex justify-end gap-3">
              <button
              type="button"
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
