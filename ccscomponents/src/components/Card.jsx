import styled from 'styled-components';

const Card = styled.figcaption`
    background: black;
    border-radius: 10px;
    width: 45%;
    margin: auto;
    color: white;
`;

const Top = styled.div`
display: grid;
grid-template-columns: 60% 40%;
`;
const LeftTop = styled.div`
`;

const Content = styled.div`
color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 15px;
text-align: center;
`;
const Title = styled.h1``;
const Name = styled.p`

font-size: 2rem;
`;
const Year = styled.p``;

const Footer = styled.div`
 display: flex;
 justify-content: space-around;
 padding-bottom:1rem;
`;
const Rate = styled.h2`
display: flex;
align-items: center;
`;
const Ul = styled.ul`
display: flex;
align-items: center;
width: 15%;
`;
const Li = styled.li`
list-style: none;
`;

const CardComponent = () => {
    return (
        <Card className="container">
            <Top>
                <LeftTop>
                <LeftTop>
                <img style={{ width: '280px', height:'220px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmdbzjRwyUKIZ22emCqL0Ittx2qxLFe3ZgRQ&usqp=CAU" alt="album cover" />
            </LeftTop>
            
                </LeftTop>
                <Content>
                    <Title>Manga Character</Title>
                    <Name>Saitama</Name>
                    <Year>(2019)</Year>
                </Content>
            </Top>
            <Footer>
                <Rate>Note ce heros</Rate>
                <Ul>
                    <Li><i className="fa-regular fa-star"></i></Li>
                    <Li><i className="fa-regular fa-star"></i></Li>
                    <Li><i className="fa-regular fa-star"></i></Li>
                    <Li><i className="fa-regular fa-star"></i></Li>
                    <Li><i className="fa-regular fa-star"></i></Li>
                </Ul>
            </Footer>
        </Card>
    );
};

export default CardComponent;
