import React from 'react';

import { TreeView } from "@limit.es/limit-react-components";

const dummyData = {
  id: "1",
  treeId: "1",
  labelText: "Label example first level",
  labelInfo: "$20.00",
  type: "PROJECT_TYPE",
  nodes: [
    {
      id: "1-1",
      treeId: "2",
      labelText: "Label example second level 1",
      labelInfo: "$10.00",
      type: "CONTROL_UNIT_TYPE",
      nodes: [
        {
          id: "1",
          treeId: "3",
          labelText: "Label example second level 1",
          labelInfo: "$10.00",
          type: "PARTIDA_TYPE",
          nodes: [
            {
              id: "1",
              treeId: "1",
              labelText: "Label example third level 1",
              labelInfo: "$10.00",
              disabled: true,
            }
          ],
        },
      ]
    },
    {
      id: "1-2",
      treeId: "4",
      labelText: "Label example second level 2",
      labelInfo: "$10.00",
      type: "CONTROL_UNIT_TYPE",
      nodes: [
        {
          id: "1",
          treeId: "5",
          labelText: "Label example second level 1",
          labelInfo: "$10.00",
          type: "PARTIDA_TYPE",
          nodes: [],
        },
      ]
    },
  ],
};
export default {
  title: 'Limit/TreeView',
  component: TreeView,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    loading: { control: "boolean" },
    onNodeSelect: { action: "node selected" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TreeView
  data={dummyData}
  selectedNode={[]}
  actions={{}}
  {...args}
/>;

export const Default = Template.bind({});
Default.args = {
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Expanded = Template.bind({});
Expanded.args = {
  expanded: ["1", "2", "3"],
};

export const Selected = Template.bind({});
Selected.args = {
  expanded: ["1"],
  selectedNode: { treeId: "1" },
};
