import React, { useEffect, useState } from "react";
import * as yup from "yup";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Container,
  Select,
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
    .required("FirstName cannot be empty.")
    .min(3, "FirstName must have at least 3 chars."),
  lastName: yup
    .string("LastName is invalid.")
    .required("LastName cannot be empty.")
    .max(10, "LastName must have maximum 10 chars."),
  email: yup
    .string()
    .required("Email cannot be empty.")
    .email("Invalid email."),
  password: yup
    .string()
    .required("Password cannot be empty.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  role: yup.string().required(),
  terms: yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
});

const RegisterForm = () => {
  const [formData, setFormData] = useState(initialData);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    terms: "",
  });

  useEffect(() => {
    async function helper() {
      const valid = await schema.isValid(formData);

      /// true = true
      setButtonDisabled(!valid);
    }

    helper();
  }, [formData]);
  //comentariu
  console.log("errMess", errorMessage);

  const handleFieldValidation = (event) => {
    yup
      .reach(schema, event.target.name)
      .validate(
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value
      )
      .then(() => {
        setErrorMessage({
          ...errorMessage,
          [event.target.name]: "",
        });
      })
      .catch((err) => {
        setErrorMessage({
          ...errorMessage,
          [event.target.name]: err.errors[0],
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

    axios.post("https://reqres.in/api/users", formData).then((res) => {
      console.log(res.data);
    });

    setFormData(initialData);
  };

  return (
    <Container>
      <form>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          {errorMessage.firstName ? (
            <p style={{ color: "red" }}>{errorMessage.firstName}</p>
          ) : null}
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          {errorMessage.lastName ? (
            <p style={{ color: "red" }}>{errorMessage.lastName}</p>
          ) : null}
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          {errorMessage.email ? (
            <p style={{ color: "red" }}>{errorMessage.email}</p>
          ) : null}
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          {errorMessage.password ? (
            <p style={{ color: "red" }}>{errorMessage.password}</p>
          ) : null}
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Role</FormLabel>
          {errorMessage.role ? (
            <p style={{ color: "red" }}>{errorMessage.role}</p>
          ) : null}
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
          <input
            name="terms"
            type="checkbox"
            checked={formData.terms}
            onChange={handleInputChange}
          />
          <span> Accept our Terms and Conditions.</span>
        </FormControl>
        <Button
          type="submit"
          mt="10px"
          colorScheme="blue"
          onClick={handleFormSubmit}
          disabled={buttonDisabled}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default RegisterForm;
