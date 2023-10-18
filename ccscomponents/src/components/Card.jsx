import styled from 'styled-components'

const Card = () => {

    const Card = styled.figcaption`
    background: 'grey';
    border-radius: 10px;
    `
    const Top = styled.div
    const RightTop = styled.div

    const Content = styled.div
    const Title = styled.h1
    const Name = styled.p
    const Year = styled.p

    const Footer = styled.div
    const Rate = styled.h2
    const Ul = styled.ul
    const Li = styled.li

    return (
        <Card className="container" >
        <Top>
        <RightTop>
        <img src=""/>
        </RightTop>
        <Content>
        <Title />
        <Name>Under the Grave</Name>
        <Year>(2016)</Year>
        </Content>
        </Top>
        <Footer >
        <Rate>Rate this album</Rate>
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

export default Card;