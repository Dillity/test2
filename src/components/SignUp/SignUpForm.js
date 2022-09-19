import React from "react";
import {Formik} from "formik";
import {
    Button,
    ButtonGroup, CircularProgress, Container,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@mui/material";

import {validationSchema} from "../../validation/validation";

import style from "./SignUp.module.css";


const SignUpForm = (props) => {
    const defaultRadioValue = props.positions[0].name

    const handleSubmitForm = ({name, email, phone, position, photo}) => {
        props.submitUser(name, email, phone, position, photo);
    }

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                phone: "",
                photo: {},
                position: props.positions[0].id
            }}
            validateOnBlur
            onSubmit={(values) => {
                handleSubmitForm(values)
            }}
            validationSchema={validationSchema}
        >
            {({
                  values, errors, touched, handleChange, handleBlur, isValid,
                  handleSubmit, dirty, setFieldValue
              }) => (
                  <div className={style.container}>

<Grid container direction="column" justifyContent="center" alignItems="center">
                    <Grid item style={{marginTop: 50}}>
                        <TextField
                            className={style.field}
                            placeholder="Your name"
                            type="text"
                            name={"name"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={values.name}
                        />
                        {touched.name && errors.name && <Typography>{errors.name}</Typography>}
                    </Grid>

                    <Grid item style={{marginTop: 50}}>
                        <TextField
                            className={style.field}
                            placeholder="Email"
                            type="email"
                            name={"email"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={values.email}
                        />
                        {touched.email && errors.email && <Typography>{errors.email}</Typography>}
                    </Grid>

                    <Grid item style={{marginTop: 50}}>
                        <TextField
                            className={style.field}
                            placeholder="Phone"
                            type="text"
                            name={"phone"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={values.phone}
                            helperText="+38 (XXX) XXX - XX - XX"
                        />
                        {touched.phone && errors.phone && <Typography>{errors.phone}</Typography>}
                    </Grid>

                    <Grid item style={{marginTop: 43}} className={style.radio}>
                        <FormLabel>Select your position</FormLabel>
                        <RadioGroup
                            name="position_id"
                            defaultValue={defaultRadioValue}
                        >
                            {props.positions.map(position => (

                                <FormControlLabel key={position.id} onChange={() => {setFieldValue("position", position.id)}}
                                                                                value={position.name} control={<Radio color="secondary" />} label={position.name} />
                                ))}
                        </RadioGroup>
                            {touched.position && errors.position && <Typography>{errors.position}</Typography>}

                    </Grid>

                    <Grid item>
                        <ButtonGroup variant="contained" className={style.uploadField}>

                            <Button variant="outlined" component="label" sx={{borderColor: "black", color: "black"}}>
                                Upload
                                <input hidden  type="file" onChange={(e) => {setFieldValue("photo", e.currentTarget.files[0])}} name={"photo"} values={values.photo}/>
                            </Button>

                                <TextField className={style.placeholder} placeholder="Upload your photo" disabled={true} />


                        </ButtonGroup>
                        {touched.photo && errors.photo && <Typography>{errors.photo}</Typography>}
                    </Grid>



                        <Grid item>
                            {props.isFetching ?
                                <CircularProgress className={style.inProgress} /> :
                            <button
                                className={style.btnSubmit}
                                type={"submit"}
                                onClick={handleSubmit}
                                disabled={!isValid && !dirty}
                            >Sign Up</button>
                            }
                        </Grid>
</Grid>


                  </div>
            )}
        </Formik>
    );
}

export default SignUpForm;