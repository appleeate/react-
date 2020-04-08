import React from "react";
import { Form, Card, Input, Button, message } from "antd";
function Edit(props) {
  //   const { getFieldDecorator } = props.form;
  const priceValidate = (rule,value,callback) => {
      if(value * 1 > 100){
          callback("价格不能大于100")
      }else {
          callback();
      }
  }
  const onFinish = (values) => {
    console.log(values);
    //此处需要调用api接口
  };
  const onFinishFailed = ({ errorFields }) => {
    // props.form.scrollToField(errorFields[0].name);
    console.log(errorFields);
    message.error("请输入正确的内容");
  };
  return (
    <Card title="商品编辑">
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          label="名字"
          name="name"
          rules={[{ required: true, message: "请输入商品名字" }]}
        >
          <Input placeholder="请输入商品名字" />
        </Form.Item>
        <Form.Item
          label="价格"
          name="price"
          rules={[{ required: true, message: "请输入商品价格" },{validator:priceValidate}]}
        >
          <Input placeholder="请输入商品价格" />
        </Form.Item>
        <Form.Item label="名字">
          <Button htmlType="submit" type="primary">
            保存
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Edit;
