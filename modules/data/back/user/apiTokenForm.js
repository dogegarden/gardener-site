import React from 'react'
import { Formik } from 'formik'
import { useMutation } from 'react-query'

const TokenForm = () => {

   const mutation = useMutation("apiToken", updateApiToken) 

    return (
        <div>
            <h1>
                Enter Your API Token
            </h1>
            <p>
                How? Follow<a src="http://dogegarden.net">this.</a>
            </p>
            <Formik 
                initialValues = {{apiToken = ''}}
                validate = {values => {
                    const errors = {}
                    if(!values.apiToken) {
                        errors.apiToken = 'API Token is Required'
                    } else if(!/[^a-zA-Z0-9]+/g.test(values.apiToken)) {
                        errors.apiToken = 'Invalid API Token'
                    }
                    return errors
                }}
                onSubmit = {(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true)
                    mutation.mutate({ apiToken: values.apiToken })
                    setSubmitting(false)
                    resetForm()
                }}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form onSubmit={handleSubmit}>
                    <input
                        type="apiToken"
                        name="Token"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.apiToken}
                    />
                    {errors.apiToken && touched.apiToken && errors.apiToken}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default TokenForm 