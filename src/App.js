import { useState } from "react"
import {
  Container,
  Row,
  FormControl,
  InputGroup,
  Col,
  Button,
} from "react-bootstrap"
import CarTable from "./components/CarTable"
import Actions from "./components/Actions"

import "./App.css"

const cars = [
  { _id: 1, brand: "BMW", model: "X5", year: 2020 },
  { _id: 2, brand: "Tesla", model: "Model S", year: 2021 },
  { _id: 3, brand: "Toyota", model: "Land Cruiser", year: 2017 },
  { _id: 4, brand: "Audi", model: "TT", year: 2018 },
  { _id: 5, brand: "Ford", model: "F-150", year: 2015 },
]

function App(props) {
  const [searchValue, setSearchValue] = useState("")
  const [changeCars, setChangeCars] = useState(cars)
  const onSearchChange = (e) => setSearchValue(e.target.value)
  var search = searchValue
  var filteredData = changeCars.filter((car) =>
    car.model.toLowerCase().includes(search.toLowerCase())
  )

  function comparebybrand(a, b) {
    if (a.brand < b.brand) {
      return -1
    }
    if (a.brand > b.brand) {
      return 1
    }
    return 0
  }

  function comparebymodel(a, b) {
    if (a.model < b.model) {
      return -1
    }
    if (a.model > b.model) {
      return 1
    }
    return 0
  }

  function comparebyyear(a, b) {
    if (a.year > b.year) {
      return -1
    }
    if (a.year < b.year) {
      return 1
    }
    return 0
  }
  var sortedData = filteredData
  const sortbybrand = () => {
    setChangeCars(filteredData.sort(comparebybrand))
  }
  const sortbymodel = () => {
    setChangeCars(filteredData.sort(comparebymodel))
  }
  const sortbyyear = () => {
    setChangeCars(filteredData.sort(comparebyyear))
  }

  const addCar = (car) => {
    setChangeCars((prevState) => [...prevState, car])
  }
  const deleteCar = () => {
    var selected_rows = selectedRows
    setChangeCars((changeCars) =>
      changeCars.filter(function (car) {
        return (
          selected_rows.filter(function (selected_row) {
            return selected_row._id === car._id
          }).length === 0
        )
      })
    )
  }
  const [selectedRows, setSelectedRows] = useState([])
  function onSelectRow(row, isSelected, e) {
    if (isSelected) {
      setSelectedRows((prevState) => [...prevState, { _id: row._id }])
    } else {
      setSelectedRows(selectedRows.filter((item) => item._id !== row._id))
    }
  }

  return (
    <div className="App">
      <Container>
        <Row style={{ padding: 20, background: "#ebebeb" }}>
          <Col>
            <Actions addCar={addCar} data={changeCars} deleteCar={deleteCar} />
          </Col>
          <Col>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Search model"
                onChange={onSearchChange}
                value={searchValue}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row style={{ marginBottom: 10, marginTop: 10 }}>
          <Col lg="5">
            <Button variant="light" onClick={sortbybrand}>
              Sort by brand
            </Button>
          </Col>
          <Col lg="5">
            <Button variant="light" onClick={sortbymodel}>
              Sort by model
            </Button>
          </Col>
          <Col lg="2">
            <Button variant="light" onClick={sortbyyear}>
              Sort by year
            </Button>
          </Col>
        </Row>
        <Row>
          <CarTable data={sortedData} onSelectRow={onSelectRow} />
        </Row>
      </Container>
    </div>
  )
}

export default App
