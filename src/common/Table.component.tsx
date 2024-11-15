import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { TableProps, Table as AntdTable } from "antd";

type TableComponentProps = {
  data: Record<string, any>[];
};

const Table = ({ data }: TableComponentProps) => {
  const columns: TableProps<Record<string, any>>["columns"] = [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Origin",
      dataIndex: "origin",
    },
    {
      title: "Destination",
      dataIndex: "destination",
    },
    {
      title: "Saving 10th Percentile",
      dataIndex: "potential_savings_percentile_10_price",
    },
    {
      title: "Saving 50th Percentile",
      dataIndex: "potential_savings_median_price",
    },
    {
      title: "Saving 90th Percentile",
      dataIndex: "potential_savings_percentile_90_price",
    },
  ];

  return (
    <>
      <h2>Savings</h2>
      <AntdTable dataSource={data} columns={columns} />
    </>
  );
};

export default Table;
