/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Card, Flex, TextField } from "@aws-amplify/ui-react";
export default function InputComponent(props) {
  const { itemName, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="10px"
      direction="row"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="545px"
        height="69px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Card
          position="absolute"
          display="flex"
          top="0px"
          left="0px"
          height="69px"
          variation="default"
          {...getOverrideProps(overrides, "Flex.Flex[0].Card[0]")}
        >
          <TextField
            width="323px"
            display="flex"
            height="37px"
            justifyContent="center"
            alignItems="center"
            grow="1"
            basis="37px"
            size="default"
            variation="default"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[0].Card[0].TextField[0]"
            )}
          ></TextField>
        </Card>
        <Card
          position="absolute"
          display="flex"
          top="0px"
          left="355px"
          variation="default"
          {...getOverrideProps(overrides, "Flex.Flex[0].Card[1]")}
        >
          <Button
            padding="8px 16px 8px 16px"
            display="flex"
            shrink="0"
            width="158px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            size="default"
            variation="primary"
            children="Add Item"
            {...getOverrideProps(overrides, "Flex.Flex[0].Card[1].Button[0]")}
          ></Button>
        </Card>
      </Flex>
    </Flex>
  );
}
