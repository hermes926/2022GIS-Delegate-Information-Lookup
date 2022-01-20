import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import p1 from '../../images/footer_banner/1.png';
import p2 from '../../images/footer_banner/2.jpg';
import p3 from '../../images/footer_banner/3.jpg';
import p4 from '../../images/footer_banner/4.jpg';
import p5 from '../../images/footer_banner/5.jpg';
import p6 from '../../images/footer_banner/6.jpg';
import p7 from '../../images/footer_banner/7.jpg';
import p8 from '../../images/footer_banner/8.jpg';
import p9 from '../../images/footer_banner/9.jpg';
import p10 from '../../images/footer_banner/10.jpg';
import p11 from '../../images/footer_banner/11.jpg';
import p12 from '../../images/footer_banner/12.jpg';
import p13 from '../../images/footer_banner/13.jpg';
import p14 from '../../images/footer_banner/14.jpg';
import p15 from '../../images/footer_banner/15.jpg';
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

    imgs = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15];
    urls = [
        "https://www.esunfhc.com/zh-tw/foundation",
        "https://cathaylife.tw/qyWyxO",
        "http://gis-taiwan.ntu.edu.tw/",
        "https://lihi1.com/re5GU",
        "https://www.instagram.com/kokuyo_stationery_tw/",
        "http://gis-taiwan.ntu.edu.tw/",
        "http://gis-taiwan.ntu.edu.tw/",
        "http://gis-taiwan.ntu.edu.tw/",
        "http://gis-taiwan.ntu.edu.tw/",
        "http://gis-taiwan.ntu.edu.tw/",
        "https://yzhsu.feg.com.tw/tw/index.aspx",
        "https://download.pscnet.com.tw/download/edm/202201_pscnet_MA_recruit/index.html",
        "http://gis-taiwan.ntu.edu.tw/",
        "http://gis-taiwan.ntu.edu.tw/",
        "http://gis-taiwan.ntu.edu.tw/",
    ]

    render() {
        if(this.state.show){
        return (
        <>
            <Container className="Footer" fluid>
                <img alt="" src={close} className="cimg" onClick={() => this.onclick()} />
                <Carousel indicators={false} controls={false}>
                    {this.imgs.map((imgn, index) => {
                        return (
                            <Carousel.Item interval={1000}>
                                <a href={this.urls[index]}>
                                    <img alt="" src={imgn} className="fimg"/>
                                </a>
                            </Carousel.Item>
                        );
                    }) 
                    }
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
