import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Select } from "antd";

type ChartProps = {
  data: Record<string, any>[];
};

const LineChart = ({ data }: ChartProps) => {
  const [marketPriceType, setMarketPriceType] = useState("min_price");
  // Process data
  const seriesUserPrice = data.map((item) => ({
    x: new Date(item.date).getTime(),
    y: parseFloat(item.user_price.replace(/[^0-9.-]+/g, "")),
    name: `${item.origin}-${item.destination}`,
  }));

  const seriesMinPrice = data.map((item) => ({
    x: new Date(item.date).getTime(),
    y: parseFloat(item[marketPriceType].replace(/[^0-9.-]+/g, "")),
    name: `${item.origin}-${item.destination}`,
  }));

  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "User Price vs Market Price",
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Date",
      },
    },
    yAxis: {
      title: {
        text: "Price (USD)",
      },
    },

    series: [
      {
        name: "User Price",
        data: seriesUserPrice,
      },
      {
        name: "Min Price",
        data: seriesMinPrice,
      },
    ],
  };

  return (
    <>
      <Select
        style={{
          width: "300px",
        }}
        value={marketPriceType}
        options={[
          { value: "min_price", label: <span>Market Price</span> },
          {
            value: "percentile_10_price",
            label: <span>10th Percentile Price</span>,
          },
          { value: "median_price", label: <span>Median Price</span> },
          {
            value: "percentile_90_price",
            label: <span>90th Percentile Price</span>,
          },
        ]}
        onChange={setMarketPriceType}
      />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default LineChart;
