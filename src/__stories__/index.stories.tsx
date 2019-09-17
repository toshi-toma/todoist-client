import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../index";

export default {
  title: "Button"
};

export const text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);
