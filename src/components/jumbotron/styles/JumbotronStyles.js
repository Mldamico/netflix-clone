import styled from 'styled-components/macro';

export const InnerStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ItemStyles = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: #fff;
  overflow: hidden;
`;

export const ContainerStyles = styled.div`
  @media (max-width: 1000px) {
    ${ItemStyles}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const PaneStyles = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const TitleStyles = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitleStyles = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const ImageStyles = styled.img`
  max-width: 100%;
  height: auto;
`;
