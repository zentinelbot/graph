
import React, { useState } from 'react';
import Graph from './components/Graph';

function App() {
  const localNodes = [
    {
      id: 100,
      image: 'proceso',
      originalName: 'Nombre1',
      secondLabel: 'label2'
    },
    {
      id: 101,
      image: 'nodo',
      originalName: 'Nombre2',
      secondLabel: 'label21'
    },
    {
      id: 102,
      image: 'nodo',
      originalName: 't_kpfm_reclassification_raw'
    },
    {
      id: 1,
      image: 'nodo',
      originalName: 'nodo1'
    },
    {
      id: 2,
      image: 'nodo',
      originalName: 'nodo2'
    }
  ];
  const localLinks = [
    {
      source: 100,
      target: 101
    },
    {
      source: 102,
      target: 100
    },
    {
      source: 100,
      target: 1,
    },
    {
      source: 2,
      target: 1,
    }
  ];
  const [nodes, setNodes] = useState(localNodes);
  const [links, setLinks] = useState(localLinks);

  return (
    <Graph
      images={["image", "nodo", "principa", "proceso"]}
      links={links}
      onClick={(d, simulation) => {
        /*const id = d.target.__data__.id;
        if (!newNodesCollapsedState[id]) {
          collapseNode(id, simulation);
        } else {
          expandNode(id);
        }*/
      }}
      onDoubleClick={() => {
        /*
        const newNode = {
          id: 6000,
          originalName: 'new_node'
        };
        const newLink = {
          source: 102,
          target: 6000
        };
        setNodes([...nodes, newNode]);
        setLinks([...links, newLink]);
        */
      }}
      nodes={JSON.parse(JSON.stringify(nodes))}
    />
  );
}

export default App;
