import React from "react";
import { Dropdown, Space } from "antd";
import { useLayoutActionsContext } from "../../../../AppContexts/LayoutContextProvider";
import { IoLanguageOutline } from "react-icons/io5";

const items = [
  {
    label: "English",
    icon: <i className={`flag flag-24 flag-us`} />,
    locale: "en",
    key: 1,
  },
  {
    label: "Arabic",
    icon: <i className={`flag flag-24 flag-sa`} />,
    locale: "ar",
    key: 2,
  },
];

export default function LangSwitcher() {
  const { updateDirection, updateLocale } = useLayoutActionsContext();
  const onClick = ({ key }) => {
    if (key == 1) {
      updateDirection("ltr");
      updateLocale("en");
    } else {
      updateDirection("rtl");
      updateLocale("ar");
    }
  };
  return (
    <Dropdown
      menu={{
        items,
        onClick,
      }}
      overlayStyle={{ zIndex: 1052 }}
    >
      <a
        className="ant-dropdown-link langBtn"
        onClick={(e) => e.preventDefault()}
      >
        <Space>
          <span className="lang-icon">
            <IoLanguageOutline />
          </span>
        </Space>
      </a>
    </Dropdown>
  );
}
