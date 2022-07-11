import { Button, Text } from "@mantine/core";

export default function DragField() {
  return (
    <div className=" bg-white p-3">
      <div className="bg-white mb-3">
        <div className="border border-dashed p-10">
          <Text className="text-center text-gray-300 text-xs">
            Drag Field Name
          </Text>
        </div>
      </div>
      <div className="flex justify-end">
        <Button className="bg-[#4766EB]">Customize</Button>
      </div>
    </div>
  );
}
