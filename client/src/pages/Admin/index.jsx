import React from "react";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
const { TabPane } = Tabs;

export default function Admin() {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      {portfolioData && (
        <div className="mt-10 p-5">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Intro" key="1">
              <AdminIntro />
            </TabPane>
            <TabPane tab="About" key="2">
              <AdminAbout />
            </TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
}
