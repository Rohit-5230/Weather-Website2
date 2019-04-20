import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            localStorageElement: JSON.parse(localStorage.getItem('city')),
            api: "eb1410c509e95be5b479d840e24fab78",
            cityname: [],
        };
    }
    oncitynamechange = (e) => {
        this.setState({
            cityname: e.currentTarget.value
        })
    }
    componentDidMount() {

        fetch(`//api.openweathermap.org/data/2.5/weather?q=${this.state.cityname}&appid=${this.state.api}`)
            .then(results => {
                return results.json()
            }).then((data) => {
                console.log(data)
            }).catch(() => {
                alert("ivalid city");
            })
    }
    render() {
        return (
            <div>
                <br />
                <center>
                    <h1 id="heading">Weather App</h1>
                    <br />
                    <hr />
                    <center>
                        <h1 id="entercity">Enter city</h1>
                    </center>
                    <div className="row text-center">
                        <div className="col-3" />
                        <div className="col-3">
                            <input id="city" placeholder="Enter Your City" className="form-control" onChange={this.oncitynamechange} value={this.state.cityname} ref="cityName" />
                        </div>
                        <div className="col-2" />
                        <div className="col-1">
                            <button onClick={this.findweather} className="btn btn-outline-danger">
                                <i className="fa fa-search" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="col-3" />
                    </div>
                    <br />
                    <br />

                    <center>
                        <br />
                        <br />
                        <table className="table table-hover resultstable">
                            <tbody id="results">
                            </tbody>
                        </table>
                    </center>
                </center>

            </div>
        );
    }
}
