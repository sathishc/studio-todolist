/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import InputComponent from "./InputComponent";
import DisplayComponent from "./DisplayComponent";
import { Flex } from "@aws-amplify/ui-react";
export default function MainComponent(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="10px"
      direction="column"
      height="334px"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <InputComponent
        display="flex"
        shrink="0"
        width="740px"
        {...getOverrideProps(overrides, "Flex.InputComponent[0]")}
      ></InputComponent>
      <DisplayComponent
        display="flex"
        shrink="0"
        alignSelf="stretch"
        {...getOverrideProps(overrides, "Flex.DisplayComponent[0]")}
      ></DisplayComponent>
    </Flex>
  );
}
