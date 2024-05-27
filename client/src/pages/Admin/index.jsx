import React, { useEffect } from "react";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
import Experiences from "./Experiences";
import AdminProjects from "./AdminProjects";
import AdminContact from "./AdminContact";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

export default function Admin() {
  const { portfolioData } = useSelector((state) => state.root);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/admin-login");
    }
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl p-5 text-primary">Portfolio AdminPanel</h1>
        <h3 className="mr-5 underline cursor-pointer text-md" 
        onClick={()=>{
          localStorage.removeItem("token")
          navigate("/admin-login")
        }}
        >logout</h3>
      </div>

      {portfolioData && (
        <div className="mt-5 p-5 pb-10">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Intro" key="1">
              <AdminIntro />
            </TabPane>
            <TabPane tab="About" key="2">
              <AdminAbout />
            </TabPane>
            <TabPane tab="Experiences" key="3">
              <Experiences />
            </TabPane>
            <TabPane tab="Projects" key="4">
              <AdminProjects />
            </TabPane>
            <TabPane tab="Contact" key="5">
              <AdminContact />
            </TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
}
