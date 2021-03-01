import { Menu } from "antd";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <>
      <Menu
        mode="horizontal"
        selectedKeys={[]}
        style={{ background: "none", borderBottom: "none" }}
      >
        <Logo />
        <Menu.Item key="trade">
          <a href="/trade">Trade</a>
        </Menu.Item>
        <Menu.Item key="stats">
          <a href="/stats">Stats</a>
        </Menu.Item>
        <Menu.Item key="help">
          <a href="/help">Help</a>
        </Menu.Item>
      </Menu>
    </>
  );
}
