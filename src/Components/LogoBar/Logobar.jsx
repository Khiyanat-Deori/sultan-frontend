import styled from "styled-components";
import logoImage from "./../../assets/UN.png";

const HeadLine = styled.div`
  margin: 0;
  width: 100%;
  height: 70px;
  background-color: #dcf2f1;
  padding: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;
const H2 = styled.h2`
  margin: 0;
  font-size: 20px;
  font-family: "Inknut Antiqua", serif;
  font-weight: 600;
  color: #365486;
`;
const AnImage = styled.img`
  width: 50px;
  height: 50px;
  vertical-align: middle;
`;
const Logobar = () => {
  return (
    <>
      <HeadLine>
        <AnImage src={logoImage} />
        <H2>
          <strong>Sultan Multi-Speciality Hospital and Research Center</strong>
        </H2>
      </HeadLine>
    </>
  );
};

export default Logobar;
