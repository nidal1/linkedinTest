import { Text } from "@mantine/core";

export default function SeparatorCustomize() {
  return (
    <div className="flex items-center my-3">
      <div className="flex items-center justify-center relative flex-1">
        <div className="border border-dashed flex-1 w-full h-[1px] absolute "></div>
        <Text className="text-gray-400 text-xs z-10 bg-[#FAFAFA]">
          + Add New Page Here
        </Text>
      </div>
      <Text className="text-gray-400 text-xs text-right p-3">Page 2</Text>
    </div>
  );
}
