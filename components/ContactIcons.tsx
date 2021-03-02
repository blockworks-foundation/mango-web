import { Space } from 'antd';

export default function ContactIcons() {
  return (
  <>
    <Space size="large">
      <a href="https://discord.gg/67jySBhxrg">
        <img height="40px" width="40px" src="/contact/discord.svg" />
      </a>

      <a href="https://twitter.com/mangomarkets">
        <img height="40px" width="40px" src="/contact/twitter.svg" />
      </a>

      <a href="mailto:hello@blockworks.foundation">
        <img height="40px" width="40px" src="/contact/email.svg" />
      </a>

      <a href="https://github.com/blockworks-foundation">
        <img height="40px" width="40px" src="/contact/github.svg" />
      </a>
    </Space>
  </>);
};

