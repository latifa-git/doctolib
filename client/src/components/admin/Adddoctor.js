import React, { useState } from "react";
import { Button, Form, Row, Container, Col, InputGroup } from "react-bootstrap";
import Axios from "axios";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { addDoctor } from "../../redux/actions/";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function AddDoctor() {
  const history = useHistory();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [specialty, setSpecialty] = useState();
  
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    dispatch(
      addDoctor({
        name: name,
        email: email,
        specialty: specialty,
        address: address,
        phone: phone,
      })
    );
    alert("doctor syccessfuly add it");
    history.push("/");
  };


  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
   
  };
  return (
    <Container style={{ height: "70vh", marginTop: "150px" }}>
      <h2> Add new doctor </h2>
      <Row>
        <Col>
          <form>
            <Form.Group>
              <Form.Label>nom</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder=" name"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Label>email</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Label>address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="address"
                onChange={(e) => setAddress(e.target.value)}
              />
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>specialty</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  size="lg"
                  type="number"
                  placeholder="specialty"
                  name="specialty"
                  onChange={(e) => setSpecialty(e.target.value)}
                />
                <InputGroup.Append></InputGroup.Append>
              </InputGroup>

              <Form.Label> phone </Form.Label>
              {/* 
                            <Form.Control style={{ lineHeight: "1.9rem" }} as="select" name='stock' size="lg"  > */}
              <Form.Control
                size="lg"
                type="number"
                placeholder="phone"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
              ></Form.Control>
            </Form.Group>
            {/* <Form.File id="exampleFormControlFile1" label="choisir image" name="p_imageUrl" onChange={(e)=>uploadFileHandler(e.target.value)} /> */}
            <div>
            
            </div>
            <div>
              <label htmlFor="imageFile">Image File</label>
              <input
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
            
            </div>
            <Button variant="primary" size="lg" onClick={submitHandler}>
              save
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddDoctor;
