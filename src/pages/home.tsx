import React from 'react'
import styled from 'styled-components'


const HomeRoot = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
`;

const ContentText = styled.div`
  font-size: 4em;
  text-shadow: 3px 3px 4px rgba(244, 151, 151, 0.9);
`;

const ContentSpan = styled.div`
  color: #f582ae;
  text-shadow: 3px 3px 4px rgba(62, 62, 62, 0.9);
  text-align: center;

`;
export default function Home() {
  return (
    <>
      <HomeRoot>
        <ContentText
      
        >
          Take Control of Your Fitness Journey with{' '}
          <ContentSpan
     
          >
            FiTracker
          </ContentSpan>
        </ContentText>
      </HomeRoot>
    </>
  )
}
