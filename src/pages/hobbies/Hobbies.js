import React from 'react';
import Carousel from "../../components/Carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Hobbies.css';




export class AboutMePage extends React.Component{
    render(){
        return(
           
          <div className="mainnn-contentt">
               <div>
               <h2 className="title-text">My <span className="title-span">Hobbies</span></h2>
     
  </div>
               <h3 className="title-texth3">My <span className="title-spanh3">Drawings</span></h3>
               <Carousel 
                    PhotoSrc1="https://scontent.fclj3-1.fna.fbcdn.net/v/t1.15752-9/123191336_784443885731490_7899108489426619321_n.jpg?_nc_cat=108&ccb=2&_nc_sid=ae9488&_nc_ohc=HlstF8b8QQcAX_QPr9Q&_nc_ht=scontent.fclj3-1.fna&oh=b6b4fe8197a594541761a953886588be&oe=5FC4793F"
                    PhotoSrc2="https://scontent.fclj3-1.fna.fbcdn.net/v/t1.15752-9/123364142_1554543151414291_8079478411326522501_n.jpg?_nc_cat=107&ccb=2&_nc_sid=ae9488&_nc_ohc=slST8X5PVycAX8a3u6-&_nc_ht=scontent.fclj3-1.fna&oh=bb752d6ca626440dd4e1ab94a4fa7115&oe=5FC50477"
                    PhotoSrc3="https://scontent.fclj3-1.fna.fbcdn.net/v/t1.15752-9/123135470_712982029311468_8395029186303974247_n.jpg?_nc_cat=111&ccb=2&_nc_sid=ae9488&_nc_ohc=iLtdmCakB3QAX9BMgOA&_nc_ht=scontent.fclj3-1.fna&oh=923c7f801a54637f0c1811622d21779b&oe=5FC359F1"
                    PhotoSrc4="https://scontent.fclj3-1.fna.fbcdn.net/v/l/t1.15752-9/123141571_854110528461313_7814110398487689958_n.jpg?_nc_cat=107&ccb=2&_nc_sid=ae9488&_nc_ohc=7YBtc5XhsmIAX_NJZn4&_nc_ht=scontent.fclj3-1.fna&oh=78d316d4734f17823ab5fb900ba53566&oe=5FC4D551"
                    PhotoSrc5="https://scontent.fclj3-1.fna.fbcdn.net/v/t1.15752-9/123140430_364274658358661_2442177403878400047_n.jpg?_nc_cat=109&ccb=2&_nc_sid=ae9488&_nc_ohc=A5EfsJgt7wQAX-4F1Hl&_nc_ht=scontent.fclj3-1.fna&oh=4fd85c6776060f24f05cf982c19d2676&oe=5FC4FED3"
                    PhotoSrc6="https://scontent.fclj3-1.fna.fbcdn.net/v/t1.15752-9/123315433_1245444455829781_8697685483638967546_n.jpg?_nc_cat=107&ccb=2&_nc_sid=ae9488&_nc_ohc=TlUiFIeaqfYAX8zkw5Y&_nc_ht=scontent.fclj3-1.fna&oh=4cf01176cd7a1af7cf2f85a1dcf3bdcd&oe=5FC41D1A"
                    PhotoSrc7="https://scontent.fclj3-1.fna.fbcdn.net/v/t1.15752-9/123210800_1351867271824470_7561442316029057461_n.jpg?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_ohc=fD67s_WotrYAX9TR-pD&_nc_ht=scontent.fclj3-1.fna&oh=e869bf0bda86cdd2af2196a46deb2aac&oe=5FC49C42"
                    PhotoSrc8="https://scontent.fclj3-1.fna.fbcdn.net/v/t1.15752-9/123136470_365313128076691_688394645377449446_n.jpg?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_ohc=b8Na6UwuiE0AX_hhbNL&_nc_ht=scontent.fclj3-1.fna&oh=b293b621871d3b6329419f408e1cb154&oe=5FC59647"
                    />
               <h3 className="title-texth3">Some <span className="title-spanh3">Travel Photos</span></h3>
               <Carousel 
                    PhotoSrc1="https://scontent.fclj3-1.fna.fbcdn.net/v/t1.15752-9/123258730_1067783193659146_7178326516428683522_n.png?_nc_cat=106&ccb=2&_nc_sid=ae9488&_nc_ohc=ScOPsrv6RxsAX-Lox70&_nc_ht=scontent.fclj3-1.fna&oh=a23c50f9f087d7ba59cb6b5cdac1c2c8&oe=5FC3DA80"
                    PhotoSrc2="https://scontent.fclj3-1.fna.fbcdn.net/v/t1.15752-9/p1080x2048/123205413_1056415011484747_8002966518839211854_n.jpg?_nc_cat=106&ccb=2&_nc_sid=ae9488&_nc_ohc=MMMoZO_lmDEAX_sNngU&_nc_ht=scontent.fclj3-1.fna&tp=6&oh=5a13a6f8e822e2b5469ae6f344c88a56&oe=5FC3F9EF"
                    PhotoSrc3="https://scontent.fclj3-1.fna.fbcdn.net/v/t1.15752-9/123146547_1603627443155822_7188058427487343478_n.jpg?_nc_cat=111&ccb=2&_nc_sid=ae9488&_nc_ohc=IzU22Ia4wJMAX_iCfQL&_nc_ht=scontent.fclj3-1.fna&oh=a5a9c2ac828c2b66ac26b53ec700f1c9&oe=5FC27A38"
                    PhotoSrc4="https://scontent.fclj3-1.fna.fbcdn.net/v/t1.15752-9/p1080x2048/123243944_856713708403620_8633167813246414454_n.jpg?_nc_cat=101&ccb=2&_nc_sid=ae9488&_nc_ohc=kei6QVwfTqEAX8h4vBe&_nc_ht=scontent.fclj3-1.fna&tp=6&oh=c7a73ed44b09652c1d8f9d60be47a80c&oe=5FC5ACD4"
                    PhotoSrc5="https://scontent.fclj3-1.fna.fbcdn.net/v/t1.15752-9/123142861_1040688756375674_8073785683435306275_n.png?_nc_cat=108&ccb=2&_nc_sid=ae9488&_nc_ohc=GTxdx1deL-YAX_St1If&_nc_ht=scontent.fclj3-1.fna&oh=5ab1f55a577adacc6e060c0eaef2d389&oe=5FC46693"
                    PhotoSrc6="https://scontent.fclj3-1.fna.fbcdn.net/v/t1.15752-9/p1080x2048/123145873_812448949297913_8435747944162122243_n.jpg?_nc_cat=108&ccb=2&_nc_sid=ae9488&_nc_ohc=LYUGS4EUxsgAX8Sx3Xs&_nc_ht=scontent.fclj3-1.fna&tp=6&oh=abd78f5178873c3ab1d6e929f57ea2bc&oe=5FC5D049"
                    PhotoSrc7="https://scontent.fclj3-1.fna.fbcdn.net/v/t1.15752-9/123207561_690382001879939_3019926726907842237_n.jpg?_nc_cat=108&ccb=2&_nc_sid=ae9488&_nc_ohc=z-Ld1Z-dZ28AX_P5O7r&_nc_ht=scontent.fclj3-1.fna&oh=3e0d7041baeb6fd6d2c4557b42cab595&oe=5FC5A132"
                    PhotoSrc8="https://scontent.fclj3-1.fna.fbcdn.net/v/t1.15752-9/123299261_365263621580096_1972239855327278925_n.jpg?_nc_cat=106&ccb=2&_nc_sid=ae9488&_nc_ohc=5-h2p_yylDsAX_HXAEp&_nc_ht=scontent.fclj3-1.fna&oh=d0621a41f11d4a4172e517779faca350&oe=5FC2424D"
                    />
          </div>
        )
    }
}

