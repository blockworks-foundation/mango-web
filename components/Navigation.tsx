import { Menu } from "antd";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <>
      <Menu
        mode="horizontal"
        selectedKeys={[]}
        style={{
          background: "none",
          borderBottom: "none",
          paddingTop: "1em",
          fontSize: 16,
        }}
      >
        <Logo />
        <Menu.Item key="trade">
          <a href="/trade">Trade</a>
        </Menu.Item>
        <Menu.Item key="stats">
          <a href="/trade">Stats</a>
        </Menu.Item>
        <Menu.Item key="help">
          <a href="/trade">Help</a>
        </Menu.Item>
      </Menu>
    </>
  );
}
