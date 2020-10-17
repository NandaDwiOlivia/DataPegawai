import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import UserValidation from "../validations/UserValidation";
import Select from "react-select";

const options = [
  { value: "Aceh", label: "Aceh" },
  { value: "Sumatera Barat", label: "Sumatera Barat" },
  { value: "Riau", label: "Riau" },
  { value: "Sumatera Utara", label: "Sumatera Utara" },
  { value: "Jambi", label: "Jambi" },
  { value: "Sumatera Selatan", label: "Sumatera Selatan" },
  { value: "Bengkulu", label: "Bengkulu" },
  { value: "Lampung", label: "Lampung" },
  { value: "Kepulauan Bangka Belitung", label: "Kepulauan Bangka Belitung" },
  { value: "Kepulauan Riau", label: "Kepulauan Riau" },
  { value: "Dki Jakarta", label: "Dki Jakarta" },
  { value: "Jawa Barat", label: "Jawa Barat" },
  { value: "Jawa Tengah", label: "Jawa Tengah" },
  { value: "Di Yogyakarta", label: "Di Yogyakarta" },
  { value: "Jawa Timur", label: "Jawa Timur" },
  { value: "Banten", label: "Banten" },
  { value: "Bali", label: "Bali" },
  { value: "Nusa Tenggara Barat", label: "Nusa Tenggara Barat" },
  { value: "Nusa Tenggara Timur", label: "Nusa Tenggara Timur" },
  { value: "Kalimantan Barat", label: "Kalimantan Barat" },
  { value: "Kalimantan Tengah", label: "Kalimantan Tengah" },
  { value: "Kalimantan Selatan", label: "Kalimantan Selatan" },
  { value: "Kalimantan Timur", label: "Kalimantan Timur" },
  { value: "Kalimantan Utara", label: "Kalimantan Utara" },
  { value: "Sulawesi Utara", label: "Sulawesi Utara" },
  { value: "Sulawesi Tengah", label: "Sulawesi Tengah" },
  { value: "Sulawesi Selatan", label: "Sulawesi Selatan" },
  { value: "Sulawesi Tenggara", label: "Sulawesi Tenggara" },
  { value: "Gorontalo", label: "Gorontalo" },
  { value: "Sulawesi Barat", label: "Sulawesi Barat" },
  { value: "Maluku", label: "Maluku" },
  { value: "Maluku Utara", label: "Maluku Utara" },
  { value: "Papua Barat", label: "Papua Barat" },
  { value: "Papua", label: "Papua" },
];

const MyComponent = () => <Select options={options} />;

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  return {
    initialValues: {
      namaLengkap: state.users.getUserDetail.namaLengkap,
      alamat: state.users.getUserDetail.alamat,
      kewarganegaraan: state.users.getUserDetail.kewarganegaraan,

      posisi: state.users.getUserDetail.posisi,
    },
  };
};

class FormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="namaLengkap"
                component={renderField}
                label="Nama :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="alamat"
                component={renderField}
                label="Alamat :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="kewarganegaraan"
                component={renderField}
                label="Kewarganegaraan :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="posisi"
                component={renderField}
                label="Posisi :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              Provinsi :
              <Select
                defaultValue={options[0]}
                options={options}
                formatGroupLabel={formatGroupLabel}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "hotpink",
                    primary: "black",
                  },
                })}
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button
                color="primary"
                type="submit"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

FormComponent = reduxForm({
  form: "formCreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);
export default connect(mapStateToProps, null)(FormComponent);
