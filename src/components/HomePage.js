import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; 
import videoBg from '../assets/videoBg.mp4';

function HomePage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Auto-play failed:', error);
      });
    }
  }, [videoRef]);
  useEffect(() => {
    var slideIndex = 0;
    const carousel = () => {
      var slides = document.querySelectorAll(".mySlides");
      
      if (slides.length === 0) {
        return; 
      }
      
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      
      slides[slideIndex - 1].style.display = "block";
    };
    
    const carouselInterval = setInterval(carousel, 3000);

    return () => clearInterval(carouselInterval);
  }, []);

  return (
    <div>
      {/* banner */}
      <div className="rectangle-1">
      <div className="mySlides fade banner2">
        <img src={`${process.env.PUBLIC_URL}/img/banner1.svg`} alt="banner1"></img>
        <img src={`${process.env.PUBLIC_URL}/img/banner1-1.svg`} alt="banner1-1"></img>
      </div>
      <div className="mySlides fade banner2">
        <img src={`${process.env.PUBLIC_URL}/img/banner2.svg`} alt="banner2"></img>
        <img src={`${process.env.PUBLIC_URL}/img/banner1-2.svg`} alt="banner1-2"></img>
      </div>
      <div className="mySlides fade banner2">
        <img src={`${process.env.PUBLIC_URL}/img/banner3.svg`} alt="banner3"></img>
        <img src={`${process.env.PUBLIC_URL}/img/banner1-3.svg`} alt="banner1-3"></img>
      </div>
      </div>

      {/* video-content */}
      <div className="box-1">
        <h2>整合用戶管理、保固、分析於一身</h2>
        <div className="icon-large">
          <video src={videoBg} autoPlay loop muted/>
          {/* <video ref={videoRef} controls loop>
            <source src={`${process.env.PUBLIC_URL}./video/video0722.mp4" type="video/mp4" />
          </video> */}
        </div>
        <p>
          Scanique的平台整合了用戶管理、保固服務和深度數據分析功能，使廠商可以在一個統一的系統中管理全部流程。從客戶資料管理到保固期追蹤，再到消費行為分析，Scanique提供全面的解決方案，幫助企業提升運營效率，同時深化對市場和消費者的洞察。
        </p>
      </div>

        {/* background */}
        {/* <div className="rectangle-1">
          <img src={`${process.env.PUBLIC_URL}./img/rectangle-1.svg" alt="rectangle-1"></img>
        </div> */}

        {/* text-content-1 */}
        <div className="rectangle-2">
          {/* <img src={`${process.env.PUBLIC_URL}./img/rectangle-2.svg" alt="rectangle-2"></img> */}
        <div className="box-2">
          <div className="box-3">
            <div className="text-1">
              <div className="icon-1">
                <img
                  src={`${process.env.PUBLIC_URL}./img/icon-small/icon-small-01.svg`}
                  alt="icon-small-01.svg"
                ></img>
              </div>
              <h4>保固及售後服務</h4>
            </div>
            <div className="text-2">
              <h3>高效保固處理與客戶支援</h3>
              <p>
                Scanique的保固及售後服務解決方案為企業提供了一個強大的工具，以高效地管理保固索賠和客戶支援請求。透過自動化流程和即時數據存取，廠商能夠快速響應客戶需求，提高客戶滿意度，同時降低運營成本。
              </p>
            </div>
          </div>
          <img
            className="img2"
            src={`${process.env.PUBLIC_URL}./img/small-banner-01.svg`}
            alt="small-banner-01"
          ></img>
        </div>

        <div className="box-4">
          <div className="box-3">
            <div className="text-1">
              <div className="icon-1">
                <img
                  src={`${process.env.PUBLIC_URL}./img/icon-small/icon-small-02.svg`}
                  alt="icon-small-02.svg"
                ></img>
              </div>
              <h4>正品保證</h4>
            </div>
            <div className="text-2">
              <h3>正品保證與用戶信任感的建立</h3>
              <p>
                利用Scanique，企業能夠向消費者保證其產品的真實性。每個產品都有一個獨一無二的NFC標籤，提供真品認證，從而有效打擊市場上的假冒產品。這種正品保障不僅提升了消費者對品牌的信任，也增強了企業的市場競爭力。
              </p>
            </div>
          </div>
          <img
            className="img2"
            src={`${process.env.PUBLIC_URL}./img/small-banner-02-01.svg`}
            alt="small-banner-02"
          ></img>
        </div>

        <div className="box-5">
          <div className="box-3">
            <div className="text-1">
              <div className="icon-1">
                <img
                  src={`${process.env.PUBLIC_URL}./img/icon-small/icon-small-03.svg`}
                  alt="icon-small-02.svg"
                ></img>
              </div>
              <h4>雙向資訊流通</h4>
            </div>
            <div className="text-2">
              <h3>用戶與廠家建立最直接的管道</h3>
              <p>
                Scanique平台通過雙向資訊流通機制，建立了用戶與廠家之間最直接的溝通管道。消費者可以輕鬆註冊產品保固，並在需要時直接聯繫廠商獲取支援，同時廠商也可以主動向用戶發送重要產品更新或保養提醒，這種直接溝通大大提升了服務效率和用戶滿意度。
              </p>
            </div>
          </div>
          <img
            className="img2"
            src={`${process.env.PUBLIC_URL}./img/small-banner-03.svg`}
            alt="small-banner-02"
          ></img>
        </div>

        <div className="box-6">
          <div className="box-3">
            <div className="text-1">
              <div className="icon-1">
                <img
                  src={`${process.env.PUBLIC_URL}./img/icon-small/icon-small-04.svg`}
                  alt="icon-small-02.svg"
                ></img>
              </div>
              <h4>產品綁定</h4>
            </div>
            <div className="text-2">
              <h3>讓用戶(擁有)這個產品</h3>
              <p>
                透過Scanique的產品綁定功能，消費者不僅僅是購買了一件產品，更是獲得了對該產品的全面控制和管理權。從購買之日起，產品與消費者的唯一識別碼緊密綁定，確保了產品所有權的明確性和安全性，同時也便於未來的保固服務跟蹤和管理。
              </p>
            </div>
          </div>
          <img
            className="img2"
            src={`${process.env.PUBLIC_URL}./img/small-banner-04-01.svg`}
            alt="small-banner-02"
          ></img>
        </div>
        </div>

        {/* text-content-2 */}
        <div className="box-7">
           <h3>價格方案</h3>
          <h1>引領保固服務進入智慧化管理的新時代</h1>
          <p>
            Scanique產品通過集成的NFC技術，改變了遊戲規則。這不僅為廠商和消費者帶來了前所未有的便捷性，也提高了資料流通和保固服務的準確性和效率。
          </p>
        </div>
        <div className="box-8">
          <div className="box-9">
            <img
              className="img3 "
              src={`${process.env.PUBLIC_URL}./img/small-banner-06.svg`}
              alt="small-banner-06"
            ></img>
            <div className="text-3">
              <h4>傳統解決方案</h4>
              <div className="text-4">
                <div className="text-5">
                  <h5>人工記錄</h5>
                  <p>需要手動輸入和更新保固資訊，增加了人為錯誤的風險。</p>
                </div>
              </div>
              <div className="text-4">
                <div className="text-5">
                  <h5>紙本文件</h5>
                  <p>依賴於實體憑證，容易丟失或損壞，不利於環保。</p>
                </div>
              </div>
              <div className="text-4">
                <div className="text-5">
                  <h5>資訊不即時</h5>
                  <p>
                    資料更新延遲，無法提供實時的售後服務和保固支援。且主要由廠商向消費者單向傳遞，缺乏互動性和可追蹤性。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-10">
            <img
              className="img4"
              src={`${process.env.PUBLIC_URL}./img/small-banner-05.svg`}
              alt="small-banner-05"
            ></img>
            <div className="text-6">
              <h4>Scanique</h4>
              <div className="text-7">
                <div className="text-8">
                  <h5>自動化資料流</h5>
                  <p>
                    出貨時自動設定基本資料和記錄，減少人工錯誤，提高資料準確性。
                  </p>
                </div>
              </div>
              <div className="text-7">
                <div className="text-8">
                  <h5>電子化管理</h5>
                  <p>
                    以Scanique
                    Tag替代紙本憑證，增強數據的安全性與耐久性，並具環保效益。
                  </p>
                </div>
              </div>
              <div className="text-7">
                <div className="text-8">
                  <h5>即時資訊更新</h5>
                  <p>
                    通過NFC掃描快速更新和搜尋保固資訊，實現即時的售後服務響應。
                  </p>
                </div>
              </div>
              <div className="text-7">
                <div className="text-8">
                  <h5>雙向資訊流通</h5>
                  <p>促進用戶與廠商之間的互動，增強資訊透明度和服務個性化。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* text-content-3 */}
        <div className="box-11">
          <div className="text-9">
            <h4>價格方案</h4>
            <h1>彈性價格方案，滿足不同企業需求</h1>
            <p>
              Scanique提供多樣化的價格方案，旨在滿足不同規模和需求的企業。無論是剛剛起步的小型企業還是有著廣泛客戶基礎的大型企業，Scanique都能提供適合的服務套餐。我們的價格模型根據服務範圍、用戶數量和客製化需求靈活調整，確保企業能夠以最經濟的方式獲得最大的價值。
            </p>
          </div>
          <div className="box-12">
            <div className="box-13">
              <div className="text-10">
                <h4>Scanique 保固 TAG 標籤</h4>
                <div className="text-11">
                  <h2 style={{ marginLeft: "0px" }}>5</h2>
                  <p>元/個(起)</p>
                </div>
                <p>Scanique 保固 TAG 標籤 能為各廠商提供客製化之調整及報價</p>
                <Link to="/Contact"><button>
                  點擊詢價
                </button></Link>
              </div>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}./img/icon-small/icon-small-05.svg`}
              alt="icon-small-05"
            ></img>
            <div className="box-13">
              <div className="text-10">
                <h4>綁定費用</h4>
                <div className="text-11">
                  <p>每註冊一個新會員花費</p>
                  <h2>10</h2>
                  <p>元</p>
                </div>
                <div className="text-11">
                  <p>用戶綁定單個產品</p>
                  <h2>3</h2>
                  <p>元/次</p>
                </div>
              </div>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}./img/icon-small/icon-small-05.svg`}
              alt="icon-small-05"
            ></img>
            <div className="box-13">
              <div className="text-10">
                <h4>系統維護費</h4>
                <div className="text-11">
                  <p style={{ color: "#409EFF", fontWeight: 600 }}>
                    當月會員數 X{" "}
                  </p>
                  <h2 style={{ marginLeft: "10px" }}>
                    0.3
                  </h2>
                  <p>元/每月</p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-14">
            <p>
              *1
              會員數，指的是目前還有綁定至少一個啟用中的會員總數（若名下產品都停用，則不收費）
              <br></br>
              *2 以上價格皆不含出貨機，每台出貨機押金15000
            </p>
          </div>
        </div>
      </div>
    );
  }

export default HomePage;
