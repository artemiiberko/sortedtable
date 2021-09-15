import { ButtonToolbar, Button, Modal, Form } from "react-bootstrap"
import { useState } from "react"

var Actions = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [newCarValue, setNewCarValue] = useState({
    _id: Math.max(...props.data.map((e) => e._id)),
    brand: "",
    model: "",
    year: 2020,
  })
  const onCarChange = (e) => {
    var idPlus = Math.max(...props.data.map((e) => e._id))
    idPlus++
    const { name, value } = e.target
    setNewCarValue((prevState) => ({
      ...prevState,
      [name]: value,
      _id: idPlus,
    }))
  }
  const handleSubmit = (e) => {
    if (
      (newCarValue.brand !== "") &
      (newCarValue.model !== "") &
      (newCarValue.year !== "")
    ) {
      props.addCar(newCarValue)
      setShow(false)
    }
  }

  return (
    <div>
      <ButtonToolbar className="justify-content-around">
        <Button variant="danger" onClick={props.deleteCar}>
          Delete
        </Button>
        <Button variant="dark" onClick={handleShow}>
          + Add new car
        </Button>
      </ButtonToolbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new car</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              placeholder="Brand"
              onChange={onCarChange}
              value={newCarValue.brand}
              name="brand"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              placeholder="Model"
              onChange={onCarChange}
              value={newCarValue.model}
              name="model"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Production year</Form.Label>
            <Form.Control
              type="number"
              placeholder="Year"
              onChange={onCarChange}
              value={newCarValue.year}
              name="year"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Actions
