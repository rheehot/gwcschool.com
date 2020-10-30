import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import logo from 'assets/images/certificate-logo.png';
import coffeeCup from 'assets/icons/coffee-cup.svg';
import coffeeMaker from 'assets/icons/coffee-maker.svg';
import coffeeBean from 'assets/icons/coffee-bean.svg';
import handDrip from 'assets/icons/coffee-hand.svg';
import { Container, H3Category } from 'styles/styles';
import { reveal } from 'animations/animations';

const DesWrapper = styled.div`
  position: relative;
  padding: 6rem 3rem;

  @media screen and (max-width: 48rem) {
    padding: 6rem 1rem;
  }

  @media screen and (orientation: landscape) and (max-width: 48rem) {
    padding: 4rem 1rem 3rem;
  }

  @media screen and (max-width: 36rem) {
    padding: 4rem 1rem 3rem;
  }

  img {
    position: absolute;
    top: 5rem;
    left: 8rem;
    width: 13rem;
    height: 13rem;
    opacity: 0.5;
    z-index: -1;

    @media screen and (max-width: 48rem) {
      width: 10rem;
      height: 10rem;
      left: 5rem;
    }

    @media screen and (max-width: 36rem) {
      left: 3rem;
    }
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 400;
    text-align: center;
    line-height: 2;
    opacity: 0;
    transform: translateY(60px);

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 1.1rem;
    }

    @media screen and (max-width: 48rem) {
      font-size: 1.1rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.9rem;
    }

    span {
      font-size: 1.5rem;
      font-weight: 700;

      @media screen and (orientation: landscape) and (max-width: 50.75rem) {
        font-size: 1.2rem;
      }

      @media screen and (max-width: 48rem) {
        font-size: 1.2rem;
      }

      @media screen and (max-width: 20rem) {
        font-size: 1.05rem;
      }
    }
  }
`;

const CardsWrapper = styled.div`
  width: 90%;
  height: auto;
  padding: 3rem 0 6rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  opacity: 0;
  transform: translateY(60px);

  @media screen and (orientation: landscape) and (max-width: 48rem) {
    flex-direction: row;
    padding: 3rem 0;
    width: 100%;
  }

  @media screen and (max-width: 48rem) {
    padding: 1rem 0 6rem;
  }

  @media screen and (max-width: 36rem) {
    padding: 0.5rem 0 4rem;
    flex-direction: column;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    flex-direction: row;
    padding: 3rem 0;
    width: 100%;
  }
`;

const CardWrapper = styled.div`
  width: 20%;
  text-align: center;
  background-color: white;
  padding: 1.5rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  @media screen and (max-width: 36rem) {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 28px;
    height: 28px;

    @media screen and (orientation: landscape) and (max-width: 48rem) {
      width: 23px;
      height: 23px;
    }

    @media screen and (max-width: 20rem) {
      width: 20px;
      height: 20px;
    }
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 400;
    padding: 1.3rem 0 0.8rem;

    @media screen and (orientation: landscape) and (max-width: 48rem) {
      font-size: 1rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 1rem;
    }

    @media screen and (orientation: landscape) and (max-width: 36rem) {
      font-size: 0.8rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.9rem;
    }
  }

  p {
    font-size: 0.9rem;
    line-height: 1.8;

    @media screen and (orientation: landscape) and (max-width: 36rem) {
      font-size: 0.75rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.8rem;
    }
  }
`;

const Card = ({ icon, title, des }) => {
  return (
    <CardWrapper>
      <img src={icon} alt="커피체험 및 자격증" />
      <h3>{title}</h3>
      <p>{des}</p>
    </CardWrapper>
  );
};

const Certificate = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      reveal(0.4, [titleRef.current, subTitleRef.current, '#certificate']);
    }
  }, [intersection]);

  const cards = [
    {
      icon: coffeeMaker,
      title: '나도 우리집 바리스타',
      des: '에스프레소를 직접 추출해봅니다.',
    },
    {
      icon: handDrip,
      title: '핸드드립',
      des: '여러가지 드리퍼를 사용하여 맛있는 커피를 추출해봅니다',
    },
    {
      icon: coffeeCup,
      title: '커피메뉴',
      des: '다양한 커피메뉴를 체험해봅니다.',
    },
    {
      icon: coffeeBean,
      title: '로스팅',
      des:
        '커피의 향이 제대로 우러나올 수 있도록 커피콩을 맛있게 볶는 방법을 배우게 됩니다.',
    },
  ];

  return (
    <Container ref={sectionRef}>
      <DesWrapper>
        <img src={logo} alt="월드커피바리스타협회 로고" />
        <h2 ref={titleRef}>
          곡성 목공예&커피체험관은,
          <br />
          바리스타 시험을 볼 수 있는 <span>바리스타 시험 검정장</span>이며
          <span> 월드커피바리스타협회</span>와 함께합니다.
        </h2>
      </DesWrapper>
      <div>
        <H3Category align="center" ref={subTitleRef}>
          다양한 바리스타 체험을 즐겨보세요
        </H3Category>
        <CardsWrapper id="certificate">
          {cards.map((card, i) => (
            <Card icon={card.icon} title={card.title} des={card.des} key={i} />
          ))}
        </CardsWrapper>
      </div>
    </Container>
  );
};

export default Certificate;
