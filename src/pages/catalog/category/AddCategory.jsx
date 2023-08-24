import React, { useEffect, useState } from "react";
import AppForm from "../../../components/common/AppControls/AppForm";
import { Col, Row, Space, Image, Button } from "antd";
import AppInputControl from "../../../components/common/AppControls/AppInputControl";
import { useParams } from "react-router-dom";
import AppUploadControl from "../../../components/common/AppControls/AppUploadControl";
import AppControls from "../../../components/common/AppControls";
import { DeleteOutlined } from "@ant-design/icons";
import ApiServices from "../../../services/ApiService";

export default function AddCategory() {
  const { id } = useParams();
  const [fileList, setFileList] = useState(null);
  const [showInHomePage, setShowInHomePage] = useState(false);
  const [singleCategory, setSingleCategory] = useState(null);
  const [setFields, setSetFields] = useState(null);
  const { AppSwitchControl } = AppControls;
  const getValues = { imageData: fileList };

  useEffect(() => {
    if (id) {
      ApiServices.get(id, "Category", setSingleCategory).then((res) => {
        if (res.status === 200) {
          setSingleCategory(res.data);
        }
      });
    }
  }, [id]);

  console.log("singleCategory", singleCategory);
  return (
    <AppForm
      controller="Category"
      name="Category"
      getValues={getValues}
      id={id}
      title="Add Category"
      buttonTitle="Add Category"
      setFields={singleCategory}
    >
      <Row>
        <Col sm={24} xs={24} md={12}>
          <AppInputControl
            label="Eng Name"
            name="engName"
            required={true}
            min={3}
          />

          <AppInputControl
            label="Display Order"
            name="displayOrder"
            required={showInHomePage}
            type="number"
          />

          <AppInputControl label="Meta Description" name="metaDescription" />
          <AppInputControl label="Meta title" name="metaTitle" />

          <AppUploadControl
            label="Image Upload"
            name="image"
            fileList={fileList}
            setFileList={setFileList}
            hasRecord={id ? true : false}
            imageData={id ? singleCategory?.imageData : ""}
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
          <AppInputControl
            label="Description"
            name="description"
            isTextArea={true}
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
                  }}
                >
                  Delete
                </Button>
              </Space>
            </Col>
          )}
        </Col>
      </Row>
    </AppForm>
  );
}
