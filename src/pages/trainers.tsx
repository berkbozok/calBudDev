import {
  Button,
  Radio,
  Slider,
  Space,
  Progress,
  Tooltip,
  Modal,
  Input,
  Form,
} from "antd";
import {
  CalculatorFilled,
  HeartFilled,
  PercentageOutlined,
  PieChartFilled,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { Card } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Link from "next/link";
import Navigation from "../../components/Navigation";
const { Meta } = Card;

export default function Trainers() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);

  const showModal = (index: number) => {
    setSelectedCardIndex(index);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const cards = [
    {
      title: "Trainer 1",
      description: "Professional Trainer",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      info: "good trainer1",
    },
    {
      title: "Trainer 2",
      description: "Professional Trainer",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      info: "good trainer 2",
    },
  ];

  return (
    <>
      <div className="navigation-side">
        <Navigation />
        <div className="page-layout">
          <div className="main-title">
            <PieChartFilled className="icon-title" />
            Macros Calculator
          </div>
          <div className="line"></div>
          <div className="main-page-layout">
            <div className="main-page">
              <h2 className="title-macros">Find Your Personal Trainer Today</h2>
              <div className="trainer-card">
                {cards.map((card, index) => (
                  <Card
                    key={index}
                    hoverable
                    className="card"
                    cover={<img alt="example" src={card.image} />}
                    onClick={() => showModal(index)}
                  >
                    <Meta title={card.title} description={card.description} />
                  </Card>
                ))}

                {selectedCardIndex !== -1 && (
                  <Modal
                    title={cards[selectedCardIndex].title}
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    okButtonProps={{ style: { display: "none" } }}
                  >
                    <p>
                      Write personal information for{" "}
                      {cards[selectedCardIndex].title}
                    </p>
                    {cards[selectedCardIndex].info}

                    <p>
                      <span style={{ fontWeight: "bold" }}>Name:</span> John Doe
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Age:</span> 30
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        Years of Experience:
                      </span>{" "}
                      5
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Phone:</span>{" "}
                      555-1234
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
                      johndoe@example.com
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Social Media:</span>{" "}
                      @johndoe
                    </p>
                  </Modal>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
