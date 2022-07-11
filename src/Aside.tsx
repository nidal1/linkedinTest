import { Scrollbars } from "react-custom-scrollbars";
import { ChevronLeft, ChevronRight, Phone } from "tabler-icons-react";
import { Tabs, Text, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

export default function Aside() {
  const [closed, setClosed] = useState(false);
  const matches = useMediaQuery("(max-width: 900px)");
  useEffect(() => {
    console.log(matches);
    if (matches) {
      setClosed(true);
    }
  }, [matches]);

  const CloseSidebar = () => {
    setClosed(!closed);
  };

  const RenderArrows = () => {
    if (!closed) {
      return (
        <ChevronLeft
          size={24}
          strokeWidth={2}
          color={"white"}
          onClick={CloseSidebar}
        />
      );
    }
    return (
      <ChevronRight
        size={24}
        strokeWidth={2}
        color={"white"}
        onClick={CloseSidebar}
      />
    );
  };
  return (
    <aside
      className={`flex-initial ${
        closed ? "-ml-[12rem]" : "ml-[0px]"
      } w-64 bg-white`}
    >
      <div className="flex items-center justify-around bg-[#313E4F] h-8">
        <Text className="text-white">Avallable Fields</Text>
        {RenderArrows()}
      </div>

      <div>
        <Scrollbars
          // This will activate auto-height
          autoHeight
          autoHeightMin={100}
          autoHeightMax={"80vh"}
        >
          <Tabs>
            <Tabs.Tab
              className={`w-1/4 ${matches ? "text-[10px]" : "text-sm"}`}
              label="Account"
            >
              <div className=" m-3">
                <TextInput
                  styles={{
                    defaultVariant: { backgroundColor: "#E9F1FF" },
                  }}
                  placeholder="First Name"
                  className="mb-2"
                  icon={<Phone size={14} strokeWidth={2} color={"black"} />}
                />
                <TextInput
                  styles={{
                    defaultVariant: {
                      backgroundColor: "#E9F1FF",
                      color: "#9886A8",
                    },
                  }}
                  placeholder="First Name"
                  className="mb-2"
                  icon={<Phone size={14} strokeWidth={2} color={"black"} />}
                />
                <TextInput
                  styles={{
                    defaultVariant: { backgroundColor: "#E9F1FF" },
                  }}
                  placeholder="First Name"
                  className="mb-2"
                  icon={<Phone size={14} strokeWidth={2} color={"black"} />}
                />
                <TextInput
                  styles={{
                    defaultVariant: { backgroundColor: "#E9F1FF" },
                  }}
                  placeholder="First Name"
                  className="mb-2"
                  icon={<Phone size={14} strokeWidth={2} color={"black"} />}
                />
                <TextInput
                  styles={{
                    defaultVariant: { backgroundColor: "#E9F1FF" },
                  }}
                  placeholder="First Name"
                  className="mb-2"
                  icon={<Phone size={14} strokeWidth={2} color={"black"} />}
                />
                <TextInput
                  styles={{
                    defaultVariant: {
                      backgroundColor: "#E9F1FF",
                      color: "#9886A8",
                    },
                  }}
                  placeholder="First Name"
                  className="mb-2"
                  icon={<Phone size={14} strokeWidth={2} color={"black"} />}
                />
                <TextInput
                  styles={{
                    defaultVariant: { backgroundColor: "#E9F1FF" },
                  }}
                  placeholder="First Name"
                  className="mb-2"
                  icon={<Phone size={14} strokeWidth={2} color={"black"} />}
                />
                <TextInput
                  styles={{
                    defaultVariant: { backgroundColor: "#E9F1FF" },
                  }}
                  placeholder="First Name"
                  className="mb-2"
                  icon={<Phone size={14} strokeWidth={2} color={"black"} />}
                />
                <TextInput
                  styles={{
                    defaultVariant: { backgroundColor: "#E9F1FF" },
                  }}
                  placeholder="First Name"
                  className="mb-2"
                  icon={<Phone size={14} strokeWidth={2} color={"black"} />}
                />
                <TextInput
                  styles={{
                    defaultVariant: {
                      backgroundColor: "#E9F1FF",
                      color: "#9886A8",
                    },
                  }}
                  placeholder="First Name"
                  className="mb-2"
                  icon={<Phone size={14} strokeWidth={2} color={"black"} />}
                />
                <TextInput
                  styles={{
                    defaultVariant: { backgroundColor: "#E9F1FF" },
                  }}
                  placeholder="First Name"
                  className="mb-2"
                  icon={<Phone size={14} strokeWidth={2} color={"black"} />}
                />
                <TextInput
                  styles={{
                    defaultVariant: { backgroundColor: "#E9F1FF" },
                  }}
                  placeholder="First Name"
                  className="mb-2"
                  icon={<Phone size={14} strokeWidth={2} color={"black"} />}
                />
              </div>
            </Tabs.Tab>
            <Tabs.Tab
              className={`w-1/4 ${matches ? "text-[10px]" : "text-sm"}`}
              label="Company"
            >
              Second tab content
            </Tabs.Tab>
            <Tabs.Tab
              className={`w-1/4 ${matches ? "text-[10px]" : "text-sm"}`}
              label="Deal"
            >
              Third tab content
            </Tabs.Tab>
            <Tabs.Tab
              className={`w-1/4 ${matches ? "text-[10px]" : "text-sm"}`}
              label="Other"
            >
              Third tab content
            </Tabs.Tab>
          </Tabs>
        </Scrollbars>
      </div>
    </aside>
  );
}
