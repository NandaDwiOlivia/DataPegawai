import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteUser } from "../actions/userAction";

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

const handleClick = (dispatch, id) => {
  swal({
    title: "Apakah Anda yakin akan menghapus data ini ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(id));
      swal("Data User Sukses dihapus", {
        icon: "success",
      });
    } else {
      swal("Data gagal dihapus");
    }
  });
};

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};

const TableComponent = (props) => {
  const columns = [
    {
      dataField: "namaLengkap",
      text: "Nama Lengkap",
      sort: true,
    },

    {
      dataField: "alamat",
      text: "Alamat",
      sort: true,
    },

    {
      dataField: "kewarganegaraan",
      text: "Kewarganegaraan",
      sort: true,
    },

    {
      dataField: "posisi",
      text: "Posisi",
      sort: true,
      filter: textFilter(),
    },

    {
      dataField: "link",
      text: "Action",
      headerStyle: () => {
        return { width: "27%" };
      },
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
              <Button color="primary" className="mr-2">
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>

            <Link to={"edit/" + row.id}>
              <Button color="warning" className="mr-2">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>

            <Button
              color="danger"
              className="mr-2"
              onClick={() => handleClick(props.dispatch, row.id)}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Container>
      {props.getUsersList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getUsersList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
          exportCSV
        >
          {(props) => (
            <div>
              <br></br>
              <h2>
                {" "}
                <b>DATA PEGAWAI</b>
              </h2>
              <br></br>{" "}
              <Container>
                <Row>
                  <Col>
                    <Link to="/create">
                      <Button color="dark" className="mr-2">
                        <FontAwesomeIcon icon={faUserPlus} /> Create User
                      </Button>
                    </Link>
                  </Col>
                  <Col>
                    <div className="float-right">
                      <ExportCSVButton color="dark" {...props.csvProps}>
                        Export CSV!
                      </ExportCSVButton>
                    </div>
                    <div className="float-right">
                      <SearchBar
                        {...props.searchProps}
                        placeholder="Search .."
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
                {...props.baseProps}
                filter={filterFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorUsersList ? (
            <h4>{props.errorUsersList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
