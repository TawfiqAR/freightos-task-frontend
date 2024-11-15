import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, Card, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { uploadRates } from "./api/userRates.api";
import { getPercentileSavings } from "./api/marketRates.api";
import LineChart from "./common/LineChart.component";
import Table from "./common/Table.component";

const App = () => {
  const [percentileSavings, setPercentileSavings] = useState([]);
  useEffect(() => {
    getPercentileSavings().then((response) => {
      setPercentileSavings(response.data);
    });
  }, []);

  return (
    <div>
      <Upload
        accept=".csv"
        onChange={async (info) => await uploadRates(info.fileList[0])}
      >
        <Button icon={<UploadOutlined />}>Upload User Rates</Button>
      </Upload>
      <Card>
        <LineChart data={percentileSavings} />
        <Table data={percentileSavings} />
      </Card>
    </div>
  );
};

export default App;
