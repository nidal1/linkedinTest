import { Button, Grid, Tabs, Text } from "@mantine/core";

import "./App.css";
import Aside from "./Aside";
import CustomInput from "./CustomInput";
import DragField from "./DragField";
import MainForm from "./MainForm";
import SeparatorCustomize from "./SeparatorCustomize";
import SeparatorSimple from "./SeparatorSimple";
function App() {
  return (
    <div className="App">
      <Tabs className="bg-white">
        <Tabs.Tab label="Design Form">
          <main className="flex bg-[#FAFAFA] overflow-hidden">
            <Aside />
            <div className="flex-1 m-3">
              <SeparatorSimple />

              {/* Drag field area */}
              <DragField />

              <SeparatorCustomize />

              {/* Form */}
              <MainForm />
            </div>
          </main>
        </Tabs.Tab>
        <Tabs.Tab label="Form Settings">
          <Text className="text-3xl font-bold underline">
            Second tab content
          </Text>
        </Tabs.Tab>
        <Tabs.Tab label="Data Model">Third tab content</Tabs.Tab>
      </Tabs>
    </div>
  );
}

export default App;
