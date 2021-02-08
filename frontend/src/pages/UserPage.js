import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../graphql/clientConfig";
import { gql } from "graphql-request";
import { Navbar } from "../components/Navbar";

export const UserPage = () => {
  let { name } = useParams();

  const GET_USER = gql`
  {
    query ($query: String) {
      users(query: $query) {
        id
        name
      }
    }
  }
  `;

  const variables = {
    $query: name,
  };

  useEffect(() => {
    client
      .request(GET_USER, variables)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="userPage">
      <Navbar />
      <div className="container">
        <h1>userPage</h1>
        <h2>{name}</h2>
      </div>
    </div>
  );
};
