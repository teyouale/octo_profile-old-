import { Component } from "react";
import { Get } from "react-axios";
import InputComponent from "./components/inputComponent";

class App extends Component {
  state = {
    userName: "",
  };
  onchange = (data) => {
    console.log(data[0]);
    this.setState({ userName: data[0] });
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  render() {
    return (
      <div>
        <InputComponent
          onchange={(e) => {
            this.onchange(e);
          }}
        />
        <h1>{this.state.userName}</h1>
        <Get url={`https://api.github.com/users/${this.state.userName}`}>
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
                  {response.data.bio}{" "}
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
  }
}

export default App;
