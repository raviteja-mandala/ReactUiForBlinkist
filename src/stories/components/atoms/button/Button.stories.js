import { MyButton } from "./Button";
import React from "react";
import { Button } from "../../../Button";

export default {
  title: "atoms/MyButton",
  component: MyButton,
};

// export const MyGreenButton = () => <MyButton color='green' >greenButton</MyButton>

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

const Template1 = (args) => <MyButton {...args} />;

export const Myonebutton = Template1.bind({});

Myonebutton.args={
};
