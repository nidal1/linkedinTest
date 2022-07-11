import { Input, InputWrapper, Menu, Text } from "@mantine/core";
import { Pencil } from "tabler-icons-react";

export default function CustomInput({ label }: { label: string }) {
  return (
    <InputWrapper
      id="input-demo"
      classNames={{
        label: "w-full",
      }}
      label={
        <div className="flex items-center w-full">
          <Text className="flex-1">{label}</Text>
          <Pencil size={14} strokeWidth={2} color={"black"} />
          <Menu>
            <Menu.Item>Edit Field</Menu.Item>
            <Menu.Item>Duplicate Field</Menu.Item>
            <Menu.Item color="red">Delete Field</Menu.Item>
          </Menu>
        </div>
      }
    >
      <Input
        styles={{
          defaultVariant: { backgroundColor: "#EEF2F8" },
        }}
        id="input-demo"
      />
    </InputWrapper>
  );
}
