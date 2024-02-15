import { Admin, ListGuesser, Resource } from "react-admin";

import { dataProvider } from "./dataProvider";
import { ProductList } from "./products/ProductList";
import { ProductEdit } from "./products/ProductEdit";
import { ProductCreate } from "./products/ProductCreate";
import { ProductShow } from "./products/ProductShow";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="products"
      list={ProductList}
      edit={ProductEdit}
      create={ProductCreate}
      show={ProductShow}
      recordRepresentation={"reference"}
    />
    <Resource name="reviews" list={ListGuesser} />
    <Resource
      name="customers"
      recordRepresentation={(record) =>
        `${record.first_name} ${record.last_name}`
      }
    />
    <Resource name="categories" recordRepresentation="name" />
  </Admin>
);
