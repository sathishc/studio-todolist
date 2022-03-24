/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import DisplayComponent from "./DisplayComponent";
import { Collection } from "@aws-amplify/ui-react";
import { TodoList } from "../models";
export default function DisplayComponentCollection(props) {
  const { items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: TodoList,
        }).items;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <DisplayComponent
          itemName={item.name}
          itemId={item.id}
          key={item.id}
          {...getOverrideProps(overrides, "Collection.DisplayComponent[0]")}
        ></DisplayComponent>
      )}
    </Collection>
  );
}
