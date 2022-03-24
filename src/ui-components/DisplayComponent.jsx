/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Card, Flex, Heading, Text } from "@aws-amplify/ui-react";
export default function DisplayComponent(props) {
  const { itemName, itemId, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="10px"
      direction="row"
      width="559px"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      border="3px SOLID rgba(0,0,0,0.30000001192092896)"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Card
        display="flex"
        width="355px"
        grow="1"
        basis="355px"
        height="56px"
        variation="default"
        {...getOverrideProps(overrides, "Flex.Card[0]")}
      >
        <Heading
          display="flex"
          gap="0"
          direction="row"
          width="323px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Card[0].Heading[0]")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children={itemName}
            {...getOverrideProps(overrides, "Flex.Card[0].Heading[0].Text[0]")}
          ></Text>
        </Heading>
      </Card>
      <Button
        display="flex"
        height="56px"
        shrink="0"
        alignSelf="stretch"
        size="large"
        variation="link"
        id={itemId}
        children="X"
        {...getOverrideProps(overrides, "Flex.Button[0]")}
      ></Button>
    </Flex>
  );
}
