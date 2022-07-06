import React, { useEffect, useRef } from 'react'
import {navigationleftarrow, navigationrightarrow} from './../../assets/index'
import Style from './SliderStyle.css'
import img1 from './1c78d243bd195e6ff002f8fdbc24e5d0@2x 1.png'


function Slider() {


  let elipse1
  let elipse2
  let elipse3
  let elipse4
  let elipse5
  let images2 = []

  const containerRef = useRef()
  let i = 0;
  let bg = {}

  useEffect(()=> {


    elipse1 = document.getElementById("elipse-1")
    elipse2 = document.getElementById("elipse-2")
    elipse3 = document.getElementById("elipse-3")
    elipse4 = document.getElementById("elipse-4")
    elipse5 = document.getElementById("elipse-5")

    // images2 = [
    //   ["url('./../../assets/image\ 14.jpg')", elipse1],
    //   ["url('./../../assets/4541cc99083f618a22b772228f8a9698@2x 1.jpg')", elipse2],
    //   ["url('./../../assets/image 14.jpg')", elipse3],
    //   ["url('./../../assets/victoria-shes-UC0HZdUitWY-unsplash copy@2x 1.jpg')", elipse4],
    //   ["url('./../../assets/80457d7e9d392ee84954d90d13d15d69@2x 1.png')", elipse5]
    // ]

    images2 = [
      ["url(https://raw.githubusercontent.com/Szabolcs11/spgyakorlat/main/aseets/image%2014.jpg)", elipse1],
      ["url(https://raw.githubusercontent.com/Szabolcs11/spgyakorlat/main/aseets/4541cc99083f618a22b772228f8a9698%402x%201.jpg)", elipse2],
      ["url(https://raw.githubusercontent.com/Szabolcs11/spgyakorlat/main/aseets/image%2014.jpg)", elipse3],
      ["url(https://raw.githubusercontent.com/Szabolcs11/spgyakorlat/main/aseets/victoria-shes-UC0HZdUitWY-unsplash%20copy%402x%201.jpg)", elipse4],
      ["url(https://raw.githubusercontent.com/Szabolcs11/spgyakorlat/main/aseets/80457d7e9d392ee84954d90d13d15d69%402x%201.png)", elipse5]
    ]
    
    const timer = setTimeout(() => {
      changesliderimg()
    }, 5000)
    
  }, [])

  



  function changesliderimg() {
     if (i==images2.length-1) {
          i=0;
      }
      else {
          i++;
      }
      changed()
      const timer = setTimeout(() => {
        changesliderimg()
      }, 5000)
  }

  function changed() {
    console.log("a")
    if (containerRef.current) {
      containerRef.current.style.backgroundImage = images2[i][0]
      document.getElementsByClassName("navigation-active")[0].classList.remove("navigation-active")
      images2[i][1].classList.add("navigation-active")
    }
  }


  function NavigateRight() {
      if (i==images2.length-1) {
          i=0;
      }
      else {
          i++;
      }
      changed()
  }

  function NavigateLeft() {
      if (i==0) {
          i=4;
      }
      else {
          i=i-1
      }
      changed()
  }

  function GoTo(value) {
    console.log(value)
      i = value
      changed()
  }





  return (
      <div className="slider-container" id="slider-container" ref={containerRef}>
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
                <div id="elipse-1" className="slider-container-navigation-elipse navigation-1 navigation-active" onClick={() => GoTo(0)}></div>
                <div id="elipse-2" className="slider-container-navigation-elipse navigation-2" onClick={() => GoTo(1)}></div>
                <div id="elipse-3" className="slider-container-navigation-elipse navigation-3" onClick={() => GoTo(2)}></div>
                <div id="elipse-4" className="slider-container-navigation-elipse navigation-4" onClick={() => GoTo(3)}></div>
                <div id="elipse-5" className="slider-container-navigation-elipse navigation-5" onClick={() => GoTo(4)}></div>
                <img src={navigationrightarrow} onClick={NavigateRight} className="navigation-right-arrow"/>
            </div>
        </div>
    </div>
  )
}

export default Slider