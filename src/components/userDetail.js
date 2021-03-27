import React from "react";
import { useParams } from "react-router-dom";
import { Get } from "react-axios";
import UserData from "./userData";
import Charts from "./Charts";

const UserDetail = (props) => {
  return (
    <div>
      <Get url={`https://api.github.com/users/${useParams().userName}`}>
        {(error, response, isLoading, makeRequest, axios) => {
          if (error) {
            return (
              <div>
                Something bad happened: {error.message}{" "}
                <button
                  onClick={() => makeRequest({ params: { reload: true } })}
                >
                  Retry
                </button>
              </div>
            );
          } else if (isLoading) {
            return <div>Loading...</div>;
          } else if (response !== null) {
            return (
              <div>
                <UserData userData={response.data} />
                <Charts userData={response.data} />
                <button
                  onClick={() => makeRequest({ params: { refresh: true } })}
                >
                  Refresh
                </button>
              </div>
            );
          }
          return <div>Default message before request is made.</div>;
        }}
      </Get>
    </div>
  );
};

export default UserDetail;
