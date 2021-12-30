import React from 'react';
import { Box } from "@mui/material";
import { Rating } from "@mui/lab";

import { MaterialDataGridPro } from "@limit.es/limit-react-components";

const RatingEditInputCell = (props) => {
  const { id, value, api, field } = props;

  const handleChange = async (event) => {
    api.setEditCellValue({ id, field, value: Number(event.target.value) }, event);
    // Check if the event is not from the keyboard
    // https://github.com/facebook/react/issues/7407
    if (event.nativeEvent.clientX !== 0 && event.nativeEvent.clientY !== 0) {
      await api.commitCellChange({ id, field });
      api.setCellMode(id, field, 'view');
    }
  };

  const handleRef = (element) => {
    const selectedElement = element? element.querySelector(`input[value="${value}"]`):null;
    if (selectedElement) {
      element.querySelector(`input[value="${value}"]`).focus();
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', pr: 2 }}>
      <Rating
        ref={handleRef}
        name="rating"
        precision={1}
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
}

const rows = [
  {
    id: "1",
    codi: "1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 1,
    number: "120.100",
  },
  {
    id: "2",
    codi: "2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    rating: 2,
    number: "120.100",
  },
];

const columns = [
  { field: "codi", headerName: "Code", minWidth: 90, editable: true },
  {
    field: "description",
    headerName: "Description",
    minWidth: 350,
    editable: true,
  },
  {
    field: "rating",
    headerName: "Rating",
    minWidth: 220,
    align: "center",
    type: "singleSelect",
    headerAlign: "center",
    renderCell: (cellValues) => {
      return <Rating readOnly value={cellValues.value} />;
    },
    renderEditCell: (params) => (
      <RatingEditInputCell {...params} />
    ),
    editable: true,
  },
  {
    field: "number",
    headerName: "Number",
    type: "number",
    minWidth: 140,
    editable: false,
  },
];
export default {
  title: 'Limit/MaterialDataGridPro',
  component: MaterialDataGridPro,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disableEditandCreate: { control: "boolean" },
    disableInlineEdition: { control: "boolean" },
    onCreate: { action: "on create action" },
    onCellEditCommit: { action: "on cell edit commit" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MaterialDataGridPro
  rows={rows}
  columns={columns}
  getRowId={(row) => row.id}
  onCreate={() => {}}
  onCellEditCommit={() => {}}
  indexRow={"codi"}
  disableEditandCreate={false}
  disableInlineEdition={false}
  {...args}
/>;

export const Default = Template.bind({});
Default.args = {
  rows,
  columns,
  rootStyle: { width: "100%", height: "100%" },
  indexRow: "codi"
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true
};

export const Creation = Template.bind({});
Creation.args = {
  disableEditandCreate: false,
};

export const InlineEdition = Template.bind({});
InlineEdition.args = {
  disableInlineEdition: false,
};
