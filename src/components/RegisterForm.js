import React, { useState } from "react";
import * as yup from "yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  Container,
  Select,
  Checkbox,
} from "@chakra-ui/react";

const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  role: "User",
  terms: false,
};

let schema = yup.object().shape({
  firstName: yup
    .string("FirstName is invalid.")
    .min(3, "FirstName must have at least 3 chars.")
    .required("FirstName cannot be empty."),
  lastName: yup
    .string("LastName is invalid.")
    .max(10, "LastName must have maximum 10 chars.")
    .required("LastName cannot be empty."),
  email: yup
    .string()
    .email("Invalid email.")
    .required("Email cannot be empty."),
  password: yup
    .string()
    .matches(
      "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]).{8,32}$",
      "Invalid Password"
    ),
  role: yup.string().required(),
  terms: yup.boolean().oneOf[true],
});

const RegisterForm = () => {
  const [formData, setFormData] = useState(initialData);
  const [errorMessage, setErrorMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    terms: "",
  });
  //console.log("formData", formData);
  console.log("errMess", errorMessage);
  const handleFieldValidation = (event) => {
    yup
      .reach(schema, event.target.name)
      .validate(event.target.value)
      .then(() =>
        setErrorMessage({
          ...errorMessage,
          [event.target.name]: "",
        })
      )
      .catch((err) => {
        setErrorMessage({
          ...errorMessage,
          [event.target.name]: err.error[0],
        });
      });
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
    handleFieldValidation(event);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("formData: ", formData);
  };

  return (
    <Container>
      <form onSubmit={handleFormSubmit}>
        <FormControl>
          {errorMessage.firstName ? (
            <FormErrorMessage>{errorMessage.firstName}</FormErrorMessage>
          ) : null}
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Role</FormLabel>
          <Select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
          </Select>
        </FormControl>
        <FormControl mt="10px">
          <Checkbox
            name="terms"
            checked={formData.terms}
            onChange={handleInputChange}
          >
            Accept our Terms and Conditions.
          </Checkbox>
        </FormControl>
        <Button type="submit" mt="10px" colorScheme="blue">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default RegisterForm;
