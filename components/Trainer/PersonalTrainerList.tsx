import React, { useState } from "react";
import { Modal } from "antd";
import { PieChartFilled } from "@ant-design/icons";
import { Card } from "antd";
import styled from "styled-components";
const { Meta } = Card;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled.div`
  background-color: #fef6e4;
  font-size: 20px;
  font-weight: 600;
  color: #596996;
`;

const DividerLine = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: rgba(18, 18, 18, 0.125);
`;

const MainPageLayout = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f1ead9;
  color: #b2b4ba;
  @media only screen and (max-width: 767px) {
    .main-page-layout {
      display: flex;
      flex-direction: column;
    }
  }
`;

const MainPage = styled.div`
  background-color: #fef6e4;
  height: 100vh;
  padding: 10px 30px 10px 30px;
`;

const TitleTrainer = styled.h2`
  color: #001858;
  font-weight: 700;
`;

const ModalAlignment = styled.h2`
  display: flex;
  flex-direction: row;
`;

const PersonalTrainerList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);

  const showModal = (index: number) => {
    setSelectedCardIndex(index);
    setIsModalVisible(true);
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
    <PageLayout>
      <MainTitle>Trainers</MainTitle>
      <DividerLine />
      <MainPageLayout>
        <MainPage>
          <TitleTrainer>Find Your Personal Trainer Today</TitleTrainer>
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
                className="trainer-modal"
                okButtonProps={{
                  style: { display: "none", width: "500px" },
                }}
              >
                <ModalAlignment>
                  <div>
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
                  </div>
                  <div style={{ width: "70%" }}>
                    <iframe
                      className="calendly"
                      src="https://calendly.com/find-trainer/berk"
                      width="100%"
                      height="800px"
                      frameBorder="0"
                    ></iframe>
                  </div>
                </ModalAlignment>
              </Modal>
            )}
          </div>
        </MainPage>
      </MainPageLayout>
    </PageLayout>
  );
};

export default PersonalTrainerList;
