import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table"
import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css"

const CarTable = (props) => {
  return (
    <div>
      <BootstrapTable
        data={props.data}
        selectRow={{
          mode: "checkbox",
          clickToSelect: true,
          onSelect: props.onSelectRow,
          hideSelectColumn: true,
          bgColor: "#F04545",
        }}
        hover
        striped
      >
        <TableHeaderColumn isKey dataField="_id" width="0%">
          ID
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="brand"
          dataAlign="center"
          headerAlign="center"
          width="41.75%"
        >
          Marka pojazdu
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="model"
          dataAlign="center"
          headerAlign="center"
          width="41.75%"
        >
          Model pojazdu
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="year"
          dataAlign="center"
          headerAlign="center"
          width="16.5%"
        >
          Rok produkcji
        </TableHeaderColumn>
      </BootstrapTable>
    </div>
  )
}

export default CarTable
