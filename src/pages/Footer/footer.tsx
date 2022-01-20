import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import p1 from '../../images/footer_banner/1.png';
import p2 from '../../images/footer_banner/2.jpg';
import close from '../../images/close.png';
import "./footer.css";

interface FooterPageState {
    show: boolean;
}

class Footer extends React.Component<{}, FooterPageState> {
    constructor(props: any){
        super(props);
        this.state = {show: true};
    }
    
    onclick = () => {
        this.setState({show: false});
    }
    
    render() {
        if(this.state.show){
        return (
        <>
            <Container className="Footer" fluid>
                <img alt="" src={close} className="cimg" onClick={() => this.onclick()} />
                <Carousel indicators={false} prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}>
                    <Carousel.Item interval={1000}>
                    <a href="https://www.esunfhc.com/zh-tw/foundation">
                        <img alt="" src={p1} className="fimg"/>
                    </a>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>                    
                    <a href="https://cathaylife.tw/qyWyxO">
                        <img alt="" src={p2} className="fimg"/>
                    </a>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                    <a href="https://www.esunfhc.com/zh-tw/foundation">
                        <img alt="" src={p1} className="fimg"/>
                    </a>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    );}else{
        return (
            <></>
        )
    }
    }

};

export default Footer;
