import React from "react";
import { Card } from "./components";

import { fetchData } from "./api";

class App extends React.Component {
  state = {
    query: { what: "", where: "" },
    jobs: {},
    count: 0,
  };

  async componentDidMount() {
    //console.log(this.state);
    const { results, count, query } = await fetchData(this.state.query);
    this.setState({ jobs: results, count, query });
  }

  handleSubmit = async (data1) => {
    const { results, count, query } = await fetchData(data1);
    this.setState({ jobs: results, count, query });
  };

  render() {
    // } = this.state;
    return (
      <div>
        <Card
          jobs={this.state.jobs}
          data={this.state.query}
          count={this.state.count}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
export default App;
