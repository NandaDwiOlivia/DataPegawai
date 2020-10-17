import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    title: state.users.title,
  };
};

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-3">{props.title}</h1>
          <p className="lead">
            Kelola Klinik, Apotek
            <br></br> Lebih Mudah Pakai Assist.id
          </p>
          <hr className="my-2" />
          <p>
            Semua fasilitas kesehatan kini bisa terdigitilasi dengan mudah dan
            cepat
          </p>
          <p className="lead">
            <Button color="warning">
              <FontAwesomeIcon icon={faInfo} /> Detail Info
            </Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbotronComponent);
