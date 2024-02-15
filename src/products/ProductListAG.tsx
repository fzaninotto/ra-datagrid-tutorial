import {
  EditButton,
  ImageField,
  List,
  RecordContextProvider,
  ReferenceField,
} from "react-admin";
import { DatagridAG, DatagridAGColDefs } from "@react-admin/ra-datagrid-ag";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const columnDefs: DatagridAGColDefs = [
  {
    headerCheckboxSelection: true,
    checkboxSelection: true,
    editable: false,
    minWidth: 48,
    maxWidth: 48,
  },
  { field: "reference" },
  {
    field: "thumbnail",
    headerName: "Image",
    cellRenderer: (
      <ImageField
        source="thumbnail"
        sx={{
          "& .RaImageField-image": {
            width: "auto",
            maxHeight: 32,
            objectFit: "contain",
          },
        }}
      />
    ),
  },
  { field: "description" },
  {
    field: "category_id",
    headerName: "Category",
    cellRenderer: "agGroupCellRenderer",
    cellRendererParams: {
      innerRenderer: ({ value }: { value: number }) => (
        <RecordContextProvider value={{ category_id: value }}>
          <ReferenceField source="category_id" reference="categories" />
        </RecordContextProvider>
      ),
    },
    enableRowGroup: true,
  },
  { field: "price", type: "rightAligned" },
  { field: "stock", type: "rightAligned" },
  { cellRenderer: <EditButton />, editable: false },
];

const defaultColDef = {
  flex: 1,
};

export const ProductListAG = () => (
  <List perPage={10000} pagination={false}>
    <DatagridAG
      columnDefs={columnDefs}
      defaultColDef={defaultColDef}
      rowGroupPanelShow="always"
      groupSelectsChildren
    />
  </List>
);
