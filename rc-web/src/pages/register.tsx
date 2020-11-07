import React from 'react'
import {Form, Formik} from 'formik'
import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/core';
import { Wrapper } from '../components/Wrapper';

interface registerProps { }

export const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({values, handleChange}) => (
          <Form>
            <FormControl>
              <FormLabel htmlFor="username">username</FormLabel>
              <Input
                value={values.username}
                onChange={handleChange} id="username"
                placeholder="username"
              />
              {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
            </FormControl>
          </Form>
        )}
      </Formik>
    </Wrapper>
    );
}

export default Register