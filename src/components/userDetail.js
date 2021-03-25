import React from "react";
import { useParams } from "react-router-dom";
import { Get } from "react-axios";

const UserDetail = (props) => {
  return (
    <div>
      <h1>Welcome To Your Github Profile </h1>
      <h2>{useParams().userName}</h2>
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
                {console.log(response)}
                {response.data.name}{" "}
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
