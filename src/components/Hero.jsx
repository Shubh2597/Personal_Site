import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
@media only screen and (max-width: 768px) {
  height: 200vh;
}
`;

const Container = styled.div`
height: 100%;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
@media only screen and (max-width: 768px) {
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 800;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(30px);
    }
  }
`;






const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Namaste, I'm Shubham</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What I Do</Subtitle>
          </WhatWeDo>
          <Desc>
            I enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button ><a href='https://in.linkedin.com/in/shubhamkumar-k-60163813a' target="_blank">Let's Connect</a></Button>
        </Left>
        <Right>
        <Canvas >
            <OrbitControls enableZoom={false}  />
            <ambientLight intensity={3} />
            <directionalLight position={[3, 3, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.6} >
            <MeshDistortMaterial
                  color="red"
                  attach="material"
                  distort={0.5}
                  speed={2}
              />
              </Sphere>
          </Canvas> 
          <Img src="./img/moon.jpeg" /> 
        </Right>
      </Container>
    </Section>
  );
};

export default Hero