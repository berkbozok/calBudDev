import { TeamOutlined } from "@ant-design/icons";
import { useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import { Card } from "antd";

const { Meta } = Card;

const PersonalTrainerListRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  min-height: 55rem;
`;

const PersonalTrainerListHeader = styled.div`
  display: flex;
  background-color: #f5f5f5;
  font-size: 1.5rem;
  font-weight: 600;
  color: #596996;
  padding: 1rem 1rem 1rem 1rem;
`;

const PersonalTrainerListMainPage = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainPage = styled.div`
  background-color: #f5f5f5;
  height: 100%;
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

function PersonalTrainerList() {
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
      title: "Batu Benzer",
      description: "Fitness Influencer",
      image: "https://i.imgur.com/AyM4VGo.jpg",
      info: "Influencer who is trying to get people to shape ",
      age: "24",
      phone: "+90 534 783 3572",
      yearsExp: "4",
      email: "batubenzer@hotmail.com",
      socialMedia: "@batu_benzer",
    },
    {
      title: "Oscar Fu",
      description: "Professional Trainer",
      image: "https://i.imgur.com/yuCg6jk.jpg",
      info: "2016 Montreal's 2nd place on BodyBuilding Competition",
      age: "25",
      phone: "+1 514 577 6851",
      yearsExp: "6",
      email: "oscarf@gmail.com",
      socialMedia: "@oscar.fu",
    },
  ];

  return (
    <PersonalTrainerListRoot>
      <PersonalTrainerListHeader>
        <TeamOutlined className="icon-title" />
        Trainers
      </PersonalTrainerListHeader>
      <PersonalTrainerListMainPage>
        <MainPage>
          <TitleTrainer>Find Your Personal Trainer Today</TitleTrainer>
          <div className="trainer-card">
            {cards.map((card, index) => (
              <Card
                key={index}
                hoverable
                className="card"
                cover={
                  <img
                    alt="example"
                    src={card.image}
                    style={{ height: "22rem" }}
                  />
                }
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
                  style: { display: "none", width: "50rem" },
                }}
                style={{ width: "800px" }}
              >
                <ModalAlignment>
                  <div>
                    {cards[selectedCardIndex].info}

                    <p>
                      <span style={{ fontWeight: "bold" }}>Name:</span>{" "}
                      {cards[selectedCardIndex].title}
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Age:</span>{" "}
                      {cards[selectedCardIndex].age}
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        Years of Experience:{" "}
                      </span>
                      {cards[selectedCardIndex].yearsExp}
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Phone:</span>{" "}
                      {cards[selectedCardIndex].phone}
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
                      {cards[selectedCardIndex].email}
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Social Media:</span>{" "}
                      {cards[selectedCardIndex].socialMedia}
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
      </PersonalTrainerListMainPage>
    </PersonalTrainerListRoot>
  );
}

export default PersonalTrainerList;
