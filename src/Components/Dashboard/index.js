import React from "react";
import fbase from "../../firebase";
import { Line } from "react-chartjs-2";
import { useAuthState } from "react-firebase-hooks/auth";

import Header from "../Header";

import "./style.less";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "MasterCard",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [8, 10, 13, 12, 10, 15],
    },
  ],
};

const Dashboard = ({ history }) => {
  const [user, loading, error] = useAuthState(fbase.auth);

  if (loading) {
    // can replace?
    return (
      <div>
        <p>Loading user...</p>
      </div>
    );
  }

  if (error) {
    // can replace?
    return (
      <div>
        <p>
          Error: <b>{error}</b>
        </p>
      </div>
    );
  }

  if (!user) {
    // not logged in so
    history.push("/");

    // we have to return something so we'll return an empty page.
    return <div></div>;
  } else {
    // user is logged in so display the page.

    return (
      <div className="dashboard">
        <Header />
        <div className="main">
          <h1 style={{ color: "white", fontSize: 40 }}>Donation Activity</h1>

          <div style={{ margin: 16 }}>
            <Line
              data={data}
              width={800}
              height={250}
              options={{ maintainAspectRatio: true }}
            />
          </div>

          <div className="split">
            <div className="totals">
              <h3 className="title">Total Donations Today</h3>
              <p className="value">$0.41</p>
              <h3 className="title">Total Donations from 6/13/20 - 6/20/20</h3>
              <p className="value">$2.41</p>
              <h3 className="title">Total Donations for June 2020</h3>
              <p className="value">$15.26</p>
              <h3 className="title">Total Donations from MasterCard</h3>
              <p className="value">$65.41</p>
            </div>

            <div className="transactions">
              <h3 className="title">Recent Activity</h3>
              <div className="list">
                <div>
                  <h4 className="sub-title">Date</h4>
                  <p className="value">6/21/20</p>
                  <p className="value">6/19/20</p>
                  <p className="value">6/17/20</p>
                  <p className="value">6/16/20</p>
                </div>
                <div>
                  <h4 className="sub-title">Description</h4>
                  <p className="value">Ralphs</p>
                  <p className="value">Amazon.com</p>
                  <p className="value">Tapioca Express</p>
                  <p className="value">85 Degrees</p>
                </div>
                <div>
                  <h4 className="sub-title">Purchase Price</h4>
                  <p className="value">$15.59</p>
                  <p className="value">$15.14</p>
                  <p className="value">$5.25</p>
                  <p className="value">$10.72</p>
                </div>
                <div>
                  <h4 className="sub-title">Amount Donated</h4>
                  <p className="don-value">$0.41</p>
                  <p className="don-value">$0.86</p>
                  <p className="don-value">$0.75</p>
                  <p className="don-value">$0.28</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
