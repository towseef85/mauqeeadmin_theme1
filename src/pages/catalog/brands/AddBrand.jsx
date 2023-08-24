import React, { useEffect, useState } from "react";
import AppCreateScreen from "../../../components/common/AppCreateScreen";
import {
  Button,
  Col,
  Form,
  Row,
  Input,
  Switch,
  Space,
  Image,
  Upload,
} from "antd";
import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import ApiServices from "../../../services/ApiService";
import AppUploadControl from "../../../components/common/AppControls/AppUploadControl";
import AppInputControl from "../../../components/common/AppControls/AppInputControl";
import AppControls from "../../../components/common/AppControls";

export default function AddBrand() {
  const { id } = useParams();
  const [fileList, setFileList] = useState(null);
  const [showInHomePage, setShowInHomePage] = useState(false);
  const [singleBrand, setSingleBrand] = useState(null);
  const [loading, setLoading] = useState(false);
  const [brandform] = Form.useForm();
  const { AppSwitchControl } = AppControls;

  useEffect(() => {
    if (id) {
      ApiServices.get(id, "Brand", setSingleBrand);
    }
  }, [id]);

  if (id && singleBrand !== null) {
    brandform.setFieldsValue({
      engName: singleBrand.engName,
      otherName: singleBrand.otherName,
      description: singleBrand.description,
      displayOrder: singleBrand.displayOrder,
      published: singleBrand.published,
      showOnHomepage: singleBrand.showOnHomepage,
    });
  }

  const onFinish = () => {
    setLoading(true);
    brandform
      .validateFields()
      .then((values) => {
        if (id) {
          let newValues = {
            ...values,
            imageData: fileList,
            id: singleBrand.id,
          };

          return;
        }
        let newValues = { ...values, imageData: fileList, id: uuid() };
        ApiServices.create("Brand", newValues);
        brandform.resetFields();
        setFileList(null);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };
  const min = { min: 3, message: "Please Enter Atleast 3 Words" };
  return (
    <AppCreateScreen title="Add Brand" handleAdd={onFinish} loading={loading}>
      <Form
        name="basic"
        form={brandform}
        onFinish={onFinish}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        autoComplete="off"
      >
        <Row style={{ marginTop: "40px" }}>
          <Col sm={24} xs={24} md={12}>
            <AppInputControl
              label="Eng Name"
              name="engName"
              required={true}
              min={3}
            />
            <AppInputControl
              label="Description"
              name="description"
              isTextArea={true}
            />

            <AppInputControl
              label="Display Order"
              name="displayOrder"
              required={showInHomePage}
              type="number"
            />

            <AppUploadControl
              label="Image Upload"
              name="imageData"
              fileList={fileList}
              setFileList={setFileList}
              hasRecord={id ? true : false}
              imageData={id ? singleBrand?.imageData : ""}
              required={showInHomePage}
            />
          </Col>
          <Col sm={12} xs={12} md={12}>
            <AppInputControl
              label="Other Name"
              name="otherName"
              required={true}
              min={3}
            />
            <AppSwitchControl
              label="Publish"
              name="published"
              valuePropName="checked"
              defaultChecked
            />
            <AppSwitchControl
              label="Show in Homepage"
              name="showOnHomepage"
              valuePropName="checked"
              initialValue={false}
              onChange={(e) => setShowInHomePage(e)}
            />

            {fileList && (
              <Col offset={6} span={6}>
                <Space direction="vertical" align="center">
                  <Image src={fileList} width={80} height={80} />
                  <Button
                    icon={<DeleteOutlined />}
                    onClick={() => {
                      setFileList("");
                      brandform.setFieldsValue({ imageData: "" });
                    }}
                  >
                    Delete
                  </Button>
                </Space>
              </Col>
            )}
          </Col>
        </Row>
      </Form>
    </AppCreateScreen>
  );
}
