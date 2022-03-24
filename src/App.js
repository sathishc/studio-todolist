
import './App.css';
import React from 'react'
import {InputComponent, DisplayComponentCollection} from './ui-components'
import { Flex } from '@aws-amplify/ui-react';
import { DataStore } from '@aws-amplify/datastore';
import { TodoList } from './models';


function App() {

  const [item, setItem] = React.useState("");

  const inputOverrides = {
    "Flex.Flex[0].Card[0].TextField[0]": {
      onChange: (event) => { 
        setItem(event.target.value) 
      }
    },
    "Flex.Flex[0].Card[1].Button[0]": {
      onClick: () => addItem()
    }
  }

  const displayOverrides = {
    "Collection.DisplayComponent[0]":{
      overrides: {
        "Flex.Button[0]": {
          onClick: async (event) => {
            console.log(event.target.id)
            const modelToDelete = await DataStore.query(TodoList, event.target.id);
            DataStore.delete(modelToDelete);
          }
        }
      }
    }
  }

  async function addItem() {
    console.log("Adding ", item);

    await DataStore.save(
        new TodoList({
        "name": item
      })
    );
  }

  return (
    <div className="App">
      <InputComponent overrides={inputOverrides} />
      <Flex direction="column">
        <DisplayComponentCollection overrides={displayOverrides} />
      </Flex>
      
    </div>
  );
}

export default App;
