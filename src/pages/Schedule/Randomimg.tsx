import react from 'react';
import p1 from '../../images/modal_banner/1.jpg';
import p2 from '../../images/modal_banner/2.jpg';
import p3 from '../../images/modal_banner/3.jpg';
import p4 from '../../images/modal_banner/4.jpg';
import p5 from '../../images/modal_banner/5.jpg';
import p6 from '../../images/modal_banner/6.jpg';
import p7 from '../../images/modal_banner/7.jpg';
import "./Schedule.css";

export default function Randomimg(props: any) {
    var imgs = [p1, p2, p3, p4, p5, p6, p7];
    var urls = [
        "https://www.doughnut.com.tw/pages/about-doughnut?utm_source=gis_manual&utm_medium=ads&utm_campaign=2022_gis&utm_content=full_page_ads", 
        "https://nanoparma.com",
        "http://gis-taiwan.ntu.edu.tw",
        "http://gis-taiwan.ntu.edu.tw",
        "https://www.skinc.com.tw/index.php?page=product",
        "http://gis-taiwan.ntu.edu.tw",
        "http://gis-taiwan.ntu.edu.tw",
    ];
    var item = imgs[props.imgid];
    var url = urls[props.imgid];
    return (
        <>
            <a href={url}>
                <img src={item} className="mimg" />
            </a>
        </>

    );
}