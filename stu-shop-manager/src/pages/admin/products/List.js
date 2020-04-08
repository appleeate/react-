import React from "react";
import { Card, Table, Button } from "antd";

function List() {
  const columns = [
    {
      title: "序号",
      key: "id",
      width: 80,
      align: "center",
    },
    {
      title: "名字",
      dataIndex: "name",
    },
    {
      title: "价格",
      dataIndex: "price",
    },
  ];
  return (
    <Card
      title="商品列表"
      extra={
        <Button type="primary" size="small">
          新增
        </Button>
      }
    >
      <Table columns={columns} bordered />
    </Card>
  );
}

export default List;
