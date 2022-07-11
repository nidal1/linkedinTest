import { Button, Grid } from "@mantine/core";
import CustomInput from "./CustomInput";

export default function MainForm() {
  return (
    <Grid className="bg-white p-3">
      <Grid.Col span={6}>
        <CustomInput label="User ID" />
      </Grid.Col>
      <Grid.Col span={6}>
        <CustomInput label="Host" />
      </Grid.Col>
      <Grid.Col span={6}>
        <CustomInput label="First Name" />
      </Grid.Col>
      <Grid.Col span={6}>
        <CustomInput label="Last Name" />
      </Grid.Col>
      <Grid.Col span={6}>
        <CustomInput label="Email" />
      </Grid.Col>
      <Grid.Col span={6}>
        <CustomInput label="Password" />
      </Grid.Col>
      <Grid.Col span={12}>
        <CustomInput label="Company Name" />
      </Grid.Col>
      <Grid.Col span={6}>
        <CustomInput label="Account type" />
      </Grid.Col>
      <Grid.Col span={12}>
        <div className="flex justify-end gap-3">
          <Button className="bg-[#979797]">Back</Button>
          <Button className="bg-[#4766EB]">Submit</Button>
        </div>
      </Grid.Col>
    </Grid>
  );
}
