import { Menu } from "antd";

export default function Navigation() {
  return (
    <div className="pt-4 pl-6 md:pl-8">
      <Menu
        mode="horizontal"
        selectedKeys={[]}
        style={{
          background: "none",
          borderBottom: "none",
          padding: 0,
          fontSize: 16,
        }}
      >
        <Menu.Item key="/" disabled style={{ marginLeft: 0 }}>
          <div className="flex items-center">
            <img
              height="40px"
              width="40px"
              src="/mango.png"
              className="inline-block"
            />
            <span
              style={{
                color: "white",
                fontWeight: 700,
                marginRight: "1em",
                marginLeft: 8,
              }}
              className="hidden md:inline-block text-xl"
            >
              Mango Markets
            </span>
          </div>
        </Menu.Item>
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
    </div>
  );
}
