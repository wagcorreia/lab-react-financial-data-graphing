import { Component } from 'react'
import axios from 'axios'
import Chart from 'chart.js/auto'

class ChartComponent extends Component {
  state = {
    stockPrices: [],
  }
  componentDidMount = () => {
    axios
      .get(`https://api.coindesk.com/v1/bpi/historical/close.json`)
      .then((response) => {
        // console.log(response)
        let prices = response.data.bpi
        this.setState({ strockPrices: { ...prices } })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidUpdate = () => {
    const chart = new Chart(document.getElementById('myChart'), {
      type: 'line',
      data: {
        labels: Object.keys(this.state.stockPrices),
        datasets: [
          {
            label: 'Bitcoin Price Index',
            backgroundcolor: 'rgba(235, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            data: Object.values(this.state.stockPrices),
            fill: true,
          },
        ],
      },
    })
  }

  render() {
    return (
      <div>
        <canvas id="myChart"></canvas>
      </div>
    )
  }
}

export default ChartComponent
