import { Col, Row, Divider } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { IDS, MangoClient } from "@blockworks-foundation/mango-client";
import { PublicKey, Connection } from "@solana/web3.js";

import FloatingElement from "./FloatingElement";

const CLUSTER = "mainnet-beta";
const DEFAULT_MANGO_GROUP = "BTC_ETH_USDT";

const icons = {
  BTC: "/tokens/btc.svg",
  ETH: "/tokens/eth.svg",
  USDT: "/tokens/usdt.svg",
};

const stubStats = {
  depositInterest: 0,
  borrowInterest: 0,
  totalDeposits: 0,
  totalBorrows: 0,
  utilization: "0",
};

const useMangoStats = () => {
  const [stats, setStats] = useState(
    Object.keys(icons).map((s) => ({ symbol: s, ...stubStats }))
  );

  useEffect(() => {
    const getStats = async () => {
      const client = new MangoClient();
      const connection = new Connection(
        IDS.cluster_urls[CLUSTER],
        "singleGossip"
      );
      const assets = IDS[CLUSTER].mango_groups?.[DEFAULT_MANGO_GROUP]?.symbols;
      const mangoGroupId =
        IDS[CLUSTER].mango_groups?.[DEFAULT_MANGO_GROUP]?.mango_group_pk;
      if (!mangoGroupId) return;
      const mangoGroupPk = new PublicKey(mangoGroupId);
      const mangoGroup = await client.getMangoGroup(connection, mangoGroupPk);
      const latestStats = Object.keys(assets).map((symbol, index) => {
        const totalDeposits = mangoGroup.getUiTotalDeposit(index);
        const totalBorrows = mangoGroup.getUiTotalBorrow(index);
        console.log("assets", symbol, index, totalDeposits, totalBorrows);

        return {
          time: new Date(),
          symbol,
          totalDeposits,
          totalBorrows,
          depositInterest: mangoGroup.getDepositRate(index),
          borrowInterest: mangoGroup.getBorrowRate(index),
          utilization: totalDeposits > 0.0 ? totalBorrows / totalDeposits : 0.0,
        };
      });
      setStats(latestStats);
    };

    getStats();
  }, []);

  return { stats };
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 16px;
  .borderNone .ant-select-selector {
    border: none !important;
  }
`;

const SizeTitle = styled(Row)`
  color: #9490a6;
`;

export default function StatsPanel() {
  const { stats } = useMangoStats();

  return (
    <Wrapper>
      <Row justify="center">
        <Col lg={24} xl={24} xxl={24}>
          <FloatingElement style={{ paddingBottom: 32 }}>
            <React.Fragment>
              <Divider style={{ color: "#EEEEEE" }}>Mango Stats</Divider>
              <SizeTitle>
                <Col span={4}>Asset</Col>
                <Col span={4}>Total Deposits</Col>
                <Col span={4}>Total Borrows</Col>
                <Col span={4}>Deposit Interest</Col>
                <Col span={4}>Borrow Interest</Col>
                <Col span={4}>Utilization</Col>
              </SizeTitle>
              {stats.map((stat, i) => (
                <div key={stat.symbol}>
                  <Divider />
                  <Row>
                    <Col span={1}>
                      <img
                        src={icons[stat.symbol]}
                        alt={stat.symbol}
                        width="14px"
                      />
                    </Col>
                    <Col span={3}>{stat.symbol}</Col>
                    <Col span={4}>{stat.totalDeposits.toFixed(2 - i)}</Col>
                    <Col span={4}>{stat.totalBorrows.toFixed(2 - i)}</Col>
                    <Col span={4}>
                      {(100 * stat.depositInterest).toFixed(2)}%
                    </Col>
                    <Col span={4}>
                      {(100 * stat.borrowInterest).toFixed(2)}%
                    </Col>
                    <Col span={4}>
                      {(parseFloat(stat.utilization) * 100).toFixed(2)}%
                    </Col>
                  </Row>
                </div>
              ))}
            </React.Fragment>
          </FloatingElement>
        </Col>
      </Row>
    </Wrapper>
  );
}
