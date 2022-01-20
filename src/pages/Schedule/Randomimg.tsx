import react from 'react';
import p1 from '../../images/modal_banner/1.jpg';
import p2 from '../../images/modal_banner/2.jpg';
import "./Schedule.css";

export default function Randomimg(props: any) {
    var imgs = [p1, p2];
    var urls = ["https://www.doughnut.com.tw/pages/about-doughnut?utm_source=gis_manual&utm_medium=ads&utm_campaign=2022_gis&utm_content=full_page_ads", "https://nanoparma.com"];
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