import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

const DetailUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">Nama</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.namaLengkap}</td>
        </tr>
        <tr>
          <td width="200">Alamat</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.alamat}</td>
        </tr>

        <tr>
          <td width="200">Posisi</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.posisi}</td>
        </tr>
        <tr>
          <td width="200">Kewarganegaraan</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.kewarganegaraan}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailUserComponent);
