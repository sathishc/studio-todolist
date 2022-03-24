import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TodoListMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TodoList {
  readonly id: string;
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TodoList, TodoListMetaData>);
  static copyOf(source: TodoList, mutator: (draft: MutableModel<TodoList, TodoListMetaData>) => MutableModel<TodoList, TodoListMetaData> | void): TodoList;
}