import React, { useEffect } from "react"
import Style from "./App.css"
import { headerlogo, downloadico, hamburgermenu, clockico, navigationleftarrow, navigationrightarrow, separatorline, genussnetzlogo, nagrad1, nagrad2, nagrad3, nagrad4, grillkursicon, star, znak, elipsearrowleft, elipsearrowright, footericons, twittericon, yticon, fbicon, instaicon} from './assets/index'

import Buttons from "./components/Button/Buttons"
import Slider from "./components/Slider/Slider"

function App() {



  let elipse1
  let elipse2
  let elipse3
  let elipse4
  let elipse5

  let images2 = [
      ["url('./assets/image 14.jpg')", elipse1],
      ["url('./assets/4541cc99083f618a22b772228f8a9698@2x 1.jpg')", elipse2],
      ["url('./assets/image 14.jpg')", elipse3],
      ["url('./assets/victoria-shes-UC0HZdUitWY-unsplash copy@2x 1.jpg')", elipse4],
      ["url('./assets/80457d7e9d392ee84954d90d13d15d69@2x 1.png')", elipse5]
  ]
  let i = 0;

  useEffect(()=> {
    elipse1 = document.getElementById("elipse-1")
    elipse2 = document.getElementById("elipse-2")
    elipse3 = document.getElementById("elipse-3")
    elipse4 = document.getElementById("elipse-4")
    elipse5 = document.getElementById("elipse-5")
    const timer = setTimeout(() => {
      // changesliderimg()
    }, 2000)
  }, [])

  function changesliderimg() {
     if (i==images2.length-1) {
          i=0;
      }
      else {
          i++;
      }
      changed()
  }

  function changed() {
    document.getElementsByClassName("navigation-active")[0].classList.remove("navigation-active")
    images2[i][1].classList.add("navigation-active")
    document.getElementById("slider-container").style.backgroundImage = images2[i][0]
  }

  
  // let i = 0;

  // setTimeout(() => {
  //     changeimage()
  // }, 1000)

  function changeimage() {
      // if (i==images2.length-1) {
      //     i=0;
      // }
      // else {
      //     i++;
      // }
      // changed()


      // setTimeout(() => {
      //     changeimage()
      // }, 10000)
  }



  function NavigateRight() {
      // if (i==images2.length-1) {
      //     i=0;
      // }
      // else {
      //     i++;
      // }
      // changed()
  }

  function NavigateLeft() {
      // if (i==0) {
      //     i=4;
      // }
      // else {
      //     i=i-1
      // }
      // changed()
  }

  function GoTo(value, element) {
      // i = value
      // changed()
  }



// Card Navigation \\
let carddatas = [
    ["Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.", "Maria Kartofeln"],
    ["Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna  Luftballons Ut Turnbeutel nostrud exercitation ullamco .", "Halling Tobias"],
    ["Achtung fur atine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.", "Rene Weinstein"]

]
let j = 1

function CardLeft() {
    if (j==0) {
        j=2;
    }
    else {
        j--;
    }
    CardChanged()
}

function CardRight() {
    if (j==2) {
        j=0;
    }
    else {
        j++;
    }
    CardChanged()
}



function CardChanged() {
    document.getElementById("main-card-text").innerHTML = carddatas[j][0];
    document.getElementById("main-card-bottom-text").innerHTML = carddatas[j][1];
}




function HamburgerMenuClick() {
    let menu = document.getElementById("hamburgermenu")
    if (menu.classList.contains("toggle")) {
        menu.classList.remove("toggle")
    }
    else {
        menu.classList.add("toggle")
    }
}

  return (
    <div className="main">
      <div id="hamburgermenu" className="hamburgermenu">
          <div className="hamburgermenu-container">
              <div className="hamburgermenu-menus">Die Metzgerei</div>
              <div className="hamburgermenu-menus">Dry Aged</div>
              <div className="hamburgermenu-menus">Fleischversand</div>
              <div className="hamburgermenu-menus">Events/Kurse</div>
              <div className="hamburgermenu-menus">Partyservice</div>
              <div className="hamburgermenu-menus">Tagesessen</div>
              <div className="hamburgermenu-menus">Impressum</div>
              <div className="hamburgermenu-menus">Kontakt</div>
          </div>
      </div>
    
      <div className="header">
          {/* <img src={require('./assets/logo.svg')} className="header-logo"/> */}
          <img src={headerlogo} className="header-logo"/>
          <div className="header-top">
              <a>Die Metzgerei</a>
              <a>Dry Aged</a>
              <a>Fleischversand</a>
              <a>Events/Kurse</a>
              <a>Partyservice</a>
              <a>Tagesessen</a>
              <a>Impressum</a>
              <a>Kontakt</a>
              <div className="download-icon-container">
                  <img src={downloadico}/>
                  <a>download</a>
              </div>
              <img onClick={HamburgerMenuClick} className="hamburger-menu-icon vanish" src={hamburgermenu} alt=""/>
          </div>
          <div className="header-bottom">
              {/* <img className="header-icon-clock" src={require("./assets/clock.svg")} style="margin-right: 5px;"/> */}
              <img className="header-icon-clock" src={clockico} />
              {/* <a className="bold" style="margin-right: 5px;">Opentime:</a> */}
              <a className="bold">Opentime:</a>
              <a>   Di. - Fr.: 07:00-13:00  und 15:00-18:30.    Sa.:	 07:30	-	12:30</a>
          </div>
      </div>


    <Slider />
    {/* <div className="slider-container" id="slider-container">
        <div className="slide-container-main">
            <div className="slider-container-textbox">
                <div className="slider-container-textbox-text-1">
                    <a>Heiko Brath Metzgermeister</a>
                </div>
                <div className="slider-container-textbox-text-2">
                    <a>Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol Spritz probatus pertinax.</a>
                </div>
            </div>
        </div>

        <div className="slider-content-navigation">
            <div className="navigation-container">
                <img src={navigationleftarrow} onClick={NavigateLeft} className="navigation-left-arrow"/>
                <div id="elipse-1" className="slider-container-navigation-elipse navigation-1 navigation-active" onClick={GoTo(0, this)}></div>
                <div id="elipse-2" className="slider-container-navigation-elipse navigation-2" onClick={GoTo(1, this)}></div>
                <div id="elipse-3" className="slider-container-navigation-elipse navigation-3" onClick={GoTo(2, this)}></div>
                <div id="elipse-4" className="slider-container-navigation-elipse navigation-4" onClick={GoTo(3, this)}></div>
                <div id="elipse-5" className="slider-container-navigation-elipse navigation-5" onClick={GoTo(4, this)}></div>
                <img src={navigationrightarrow} onClick={NavigateRight} className="navigation-right-arrow"/>
            </div>
        </div>
    </div> */}

    <div className="slider-container-textbox-mobile">
        
        <div className="slider-container-textbox-main">

            <div className="slider-container-textbox-text-1-mobile">
                <a>Heiko Brath Metzgermeister</a>
            </div>
            <div className="slider-container-textbox-text-2-mobile">
                <a>Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol Spritz probatus pertinax.</a>
            </div>
        </div>
    </div>



    
    <div className="description-1-container">
        <div className="description-1-left">
            <div className="description-1-left-container">
                <div className="description-1-left-container-top">
                    <div className="description-1-title">Dry Aged</div>
                    <div className="description-1-subtitle">Alte Wutz, Dry Aged</div>
                </div>
                <div className="description-1-left-container-middle">
                    <a className="description-1-content">Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.
                        id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.</a>
                </div>
                <div className="description-1-left-container-bottom">
                    <div className="decription-1-buttons-container">
                        <Buttons Text="Dry aged" Size="Normal" Type="Red"/>
                        <Buttons Text="Alte Wurtz" Size="Normal" Type="Red"/>
                        {/* <div className="description-1-button-1">Dry aged</div>
                        <div className="description-1-button-2">Alte Wurtz</div> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="description-1-right">
            <div className="description-1-images">
                <img className="decription-1-images-main" src={require("./assets/287e4a29fb95622355c7023ec0f765ff@2x 1.png")} alt=""/>
                <img className="decription-1-images" src={require("./assets/93567ed87a1475783cc3a90355825a87@2x 1.png")} alt=""/>
                <img className="decription-1-images" src={require("./assets/d368bea5bcb8ed88cfcf994b7a518068@2x 1.png")} alt=""/>
                <img className="decription-1-images" src={require("./assets/1c78d243bd195e6ff002f8fdbc24e5d0@2x 1.png")} alt=""/>
            </div>
        </div>
    </div>

    <div className="description-2-container">
        <div className="description-2-left">
            <div className="description-2-left-content-container">
                <div className="description-2-title">
                    Buchen Sie den Grillkurs jetzt
                </div>
                <div className="description-2-content">
                    <ul>
                        <li>professioneller Lehrer</li>
                        <li>ausgezeichneter Metzger</li>
                        <li>1 Tag</li>
                        <li>lernen Sie die Kunst des Grillens</li>
                    </ul>
                </div>
                <div className="description-2-button-container">
                  <Buttons Text="Grillkurs" Type="White" Size="Normal"/>
                    {/* <div className="description-2-button">
                        Grillkurs
                    </div> */}
                </div>
            </div>
        </div>
        
        <div className="description-2-right">
        </div>
    </div>

    <div className="description-3-container">
        <div className="description-3-title">
            Das Handwerk
        </div>
        <div className="description-3-subtitle">
            alles über unsere Hausgemachte Produkte
        </div>
        <div className="description-3-text-content">
            <div className="description-3-text-content-container">
                Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat.
                <br></br>
                Wiener Schnitzel aute irure dolor in Guten Tag mollit anim Stuttgart.
                <br></br>
                id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior
                <div className="description-3-button-container">
                  <Buttons Text="Das Handwerk" Type="Red" Size="Normal"/>
                </div>
                {/* <div className="description-3-text-content-button">
                    Das Handwerk
                </div> */}
            </div>
        </div>
        <img className="separator-line" src={separatorline} alt=""/>

        <div className="description-3-foods">
            <div className="description-3-food-image">
                <img src={require("./assets/Group 661@2x.png")} alt=""/>
            </div>
            <div className="description-3-food-image">
                <img src={require("./assets/Group 660@2x.png")} alt=""/>
            </div>
            <div className="description-3-food-image">
                <img src={require("./assets/Group 659@2x.png")} alt=""/>
            </div>
            <div className="description-3-food-image">
                <img src={require("./assets//Group 658@2x.png")} alt=""/>
            </div>
        </div>
    </div>


    <div className="description-4-container">
        <div className="description-4-container-left">
        </div>
        <div className="description-4-container-right">
            <div className="description-4-container-right-main">
                <div className="description-4-container-title">
                    Custome spices for your meat
                </div>
                <div className="description-4-container-subtitle">
                    Turnbeutel nostrud exercitation ullamco 
                    Sprechen Sie deutsch
                </div>
                <div className="description-4-container-content-text-1">
                    Odio principes iracundia Müller Rice pri. Ut vel solum mandamus, Kartoffelkopf natum adversarium ei ius, diam Schmetterling honestatis eum.
                </div>
                <div className="description-4-container-content-text-2">
                    Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat. 
                    
                </div>
            </div>
        </div>
    </div>

    <div className="description-5-container">
        <div className="description-5-container-title">
            Fleischversand
        </div>
        <div className="description-5-container-button-main">
          <Buttons Text="Jetzt bestellen" Type="White" Size="Large"/>
            {/* <div className="description-5-container-button">
                Jetzt bestellen
            </div> */}
        </div>
    </div>

    <div className="description-6-container">
        <div className="description-6-container-top">
            
            <div className="description-6-container-top-content">

                <div className="description-6-container-top-left">
                    <div className="description-6-container-top-left-image">
                        <img src={genussnetzlogo} alt=""/>
                    </div>
                </div>
                <div className="description-6-container-top-right">
                    <div className="description-6-container-top-right-container">
                        <div className="description-6-container-top-right-text">
                            Metzgerei Brath ist Mitglied im Genussnetzwerk
                        </div>
                        <div className="description-6-container-top-right-button-main">
                            <div className="description-6-container-top-right-button">
                                Gehen zu site
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <img className="separator-line" src={separatorline} alt=""/>


        <div className="description-6-container-middle">
            <div className="description-6-container-middle-main">
                <div className="description-6-container-middle-title">
                    Auszeichnungen
                </div>
                <div className="description-6-container-middle-badge">
                    <div className="badge-image">
                        <img src={nagrad1} alt=""/>
                    </div>
                    <div className="badge-text">
                        Tollit argumentum genau Saepe lobortis
                    </div>
                </div>
                <div className="description-6-container-middle-badge">
                    <div className="badge-image">
                        <img src={nagrad2} alt=""/>
                    </div>
                    <div className="badge-text">
                        Schneewittchen denique
                    </div>
                </div>
                <div className="description-6-container-middle-badge">
                    <div className="badge-image">
                        <img src={nagrad3} alt=""/>
                    </div>
                    <div className="badge-text">
                        Grimms Märchen expetenda
                    </div>
                </div>
                <div className="description-6-container-middle-badge">
                    <div className="badge-image">
                        <img src={nagrad4} alt=""/>
                    </div>
                    <div className="badge-text">
                        <a>Mettwurst mei ullum gloriatur.</a>
                    </div>
                </div>
            </div>
        </div>


        <img className="separator-line" src={separatorline} alt=""/>


        <div className="description-6-container-bottom">
            <div className="description-6-container-bottom-main">
                <div className="description-6-button-subtitle">
                    Empfehlungs
                </div>
                <div className="description-6-button-title">
                    Was die Leute über uns sagen
                </div>
            </div>

            <div className="description-6-card-container">

                <div className="description-6-card-small-left">
                    <div className="description-6-card-small-textcontainer">
                        <div className="description-6-card-small-message">
                            SAchtung fur atine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.
                        </div>
                        <div className="description-6-card-small-sender">
                            Maria Kartofeln
                        </div>
                    </div>
                </div>

                <div className="description-6-card-large">

                    <div className="description-6-card-large-container">

                        <div className="description-6-card-large-container-header">
                            <div className="description-6-card-lrage-container-icons">
                                <img src={grillkursicon} alt=""/>
                            </div>
                            <div className="description-6-card-large-container-header-stars">
                                <img className="small-start" src={star} alt=""/>
                                <img src={star} alt=""/>
                                <img className="small-start" src={star} alt=""/>
                            </div>
                        </div>
                        <div className="description-6-card-large-container-textcontainer">
                            <div className="description-6-card-large-container-textcontainer-main">

                                <div className="description-6-card-lrage-container-text" id="main-card-text">
                                    Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna  Luftballons Ut Turnbeutel nostrud exercitation ullamco .
                                </div>
                                <div className="description-6-card-large-container-sendername-text">
                                    <div className="description-6-card-large-container-sendername" id="main-card-bottom-text">
                                        Halling Tobias
                                        Koch
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img className="description-6-large-card-znak" src={znak} alt=""/>

                    <div className="description-6-large-card-navigation">
                        <div className="description-6-large-card-navigation-left">

                            <div className="description-6-large-card-arrow-left" onClick={CardLeft}>
                                <img className="description-6-navigation-arrows" src={elipsearrowleft} alt=""/>
                            </div>
                        </div>
                        <div className="description-6-large-card-navigation-right">

                            <div className="description-6-large-card-arrow-right" onClick={CardRight}>
                                <img className="description-6-navigation-arrows" src={elipsearrowright} alt=""/>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="description-6-card-small-right">
                    <div className="description-6-card-small-textcontainer">
                        <div className="description-6-card-small-message">
                            Achtung fur atine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.
                        </div>
                        <div className="description-6-card-small-sender">
                            Rene Weinstein
                        </div>
                    </div>
                </div>

            </div>
            <div className="description-6-bottom-button-container">
                <div className="description-6-bottom-button">
                    Alle Berichte
                </div>
            </div>
        </div>

    </div>

    <div className="footer">
        <div className="footer-top">
            <div className="footer-left">
                <div className="footer-left-container">
                    <img className="vanishinmobile" src={footericons} alt=""/>
                    <div className="footer-left-text">
                        Klauprechtstraße  25
                        76137 Karlsruhe, Germany
                        +49 721 358060
                        info@partyservice-brath.de
                    </div>
                </div>
            </div>
            <div className="footer-middle">
                <img src={require("./assets/Group.png")} alt=""/>
            </div>
            <div className="footer-right">
                <div className="footer-right-text-container">
                    <div className="footer-right-text">
                        Besuchen Sie uns auf:
                    </div>
                </div>
                <div className="footer-right-icons">
                    <img src={twittericon} alt=""/>
                    <img src={fbicon} alt=""/>
                    <img src={instaicon} alt=""/>
                    <img src={yticon} alt=""/>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-left">
                © 2020 by Metzgerei Heiko Brath  GmbH, Deutschland
            </div>
            <div className="footer-bottom-right">
                Code and design by <a className="footer-bold footer-italic">StudioPresent</a>
            </div>
        </div>
    </div>

</div>
  );
}

export default App;
