import { TeamOutlined } from "@ant-design/icons";
import { useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import { Card } from "antd";

const { Meta } = Card;

const PersonalTrainerListRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fef6e4;
  min-height: 55rem;
`;

const PersonalTrainerListHeader = styled.div`
  display: flex;
  background-color: #fef6e4;
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
  background-color: #fef6e4;
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
      </PersonalTrainerListMainPage>
    </PersonalTrainerListRoot>
  );
}

export default PersonalTrainerList;
