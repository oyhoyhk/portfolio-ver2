function init() {
  var mql = window.matchMedia("screen and (max-width: 899px)");

  if (mql.matches) {
    //899px 이하
    let pageCount = 0;
    let bleen = false;
    document.body.addEventListener(`wheel`, e => {
      if (e.deltaY > 0 && pageCount < 3 && !bleen) {
        //scroll 아래로
        console.log(`아래로`);
        document.body.animate(
          [
            {
              transform: `translateY(-${100 * pageCount++}vh)`
            },
            {
              transform: `translateY(-${100 * pageCount}vh)`
            }
          ],
          {
            fill: `forwards`,
            duration: 500
          }
        );
      } else if (e.deltaY < 0 && pageCount > 0 && !bleen) {
        //scroll 위로
        document.body.animate(
          [
            {
              transform: `translateY(-${100 * pageCount--}vh)`
            },
            {
              transform: `translateY(-${100 * pageCount}vh)`
            }
          ],
          {
            fill: `forwards`,
            duration: 500
          }
        );
      }
      bleen = true;
      setTimeout(() => {
        bleen = false;
      }, 750);
    });
  } else {
    //900px 이상

    // header 메뉴 on off
    let header_circle = document.getElementsByClassName("header_circle");
    let header_left = document.getElementsByClassName("header_left");

    let header_count = 0;
    header_circle[0].addEventListener("click", function() {
      if (header_count % 2 == 0) {
        header_left[0].animate([{ width: 0 }, { width: "150px" }], {
          duration: 500,
          fill: "forwards",
          easing: "ease-in"
        });
        header_circle[0].animate([{ left: "-25px" }, { left: "125px" }], {
          duration: 500,
          fill: "forwards",
          easing: "ease-in"
        });
        header_count++;
      } else {
        header_left[0].animate([{ width: "150px" }, { width: 0 }], {
          duration: 500,
          fill: "forwards",
          easing: "ease-in"
        });
        header_circle[0].animate([{ left: "125px" }, { left: "-25px" }], {
          duration: 500,
          fill: "forwards",
          easing: "ease-in"
        });
        header_count++;
      }
    });

    // footer 메뉴 on off

    let footer_circle = document.getElementsByClassName("footer_circle");
    let footer_right = document.getElementsByClassName("footer_container");
    footer_right[0].style.opacity = 0;

    let footer_count = 0;
    footer_circle[0].addEventListener("click", function() {
      if (footer_count % 2 == 0) {
        console.log(footer_right[0].style.width);
        footer_right[0].animate([{ width: 0 }, { width: "400px" }], {
          duration: 500,
          fill: "forwards",
          easing: "ease-in"
        });
        footer_circle[0].animate([{ right: "-25px" }, { right: "375px" }], {
          duration: 500,
          fill: "forwards",
          easing: "ease-in"
        });
        footer_right[0].animate([{ opacity: 0 }, { opacity: 1 }], {
          delay: 1000,
          duration: 500,
          iteration: Infinity,
          fill: "forwards",
          easing: "ease-in"
        });

        footer_count++;
      } else {
        footer_right[0].animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 500,
          fill: "forwards",
          easing: "ease-in"
        });
        footer_right[0].animate([{ width: "400px" }, { width: 0 }], {
          duration: 500,
          delay: 500,
          fill: "forwards",
          easing: "ease-in"
        });
        footer_circle[0].animate([{ right: "375px" }, { right: "-25px" }], {
          duration: 500,
          delay: 500,
          fill: "forwards",
          easing: "ease-in"
        });
        footer_count++;
      }
    });

    // ARROW_LEFT FUNCTION
    let pageLeft = document.getElementsByClassName("page_left");
    let pageRight = document.getElementsByClassName("page_right");
    let allLocation = document.getElementsByClassName("all");
    let page_count = 0;
    let page_1 = document.getElementsByClassName("main")[0].offsetLeft;
    let page_2 = document.getElementsByClassName("sub1")[0].offsetLeft;
    let page_3 = document.getElementsByClassName("sub2")[0].offsetLeft;
    let page_4 = document.getElementsByClassName("sub3")[0].offsetLeft;

    console.log("page1=" + page_1);
    console.log("page2=" + page_2);
    console.log("page3=" + page_3);
    console.log("page4=" + page_4);
    console.dir(allLocation);
    console.dir(window);

    pageLeft[0].addEventListener("click", function() {
      if (page_count != 0) {
        allLocation[0].animate(
          [
            { transform: "translateX(-" + 100 * page_count + "vw)" },
            { transform: "translateX(-" + 100 * (page_count - 1) + "vw)" }
          ],
          {
            duration: 1000,
            fill: "forwards",
            easing: "ease-in"
          }
        );
        page_count--;
      } else {
        return false;
      }
      console.log(page_count);
    });
    pageRight[0].addEventListener("click", function() {
      if (page_count != 3) {
        allLocation[0].animate(
          [
            { transform: "translateX(-" + 100 * page_count + "vw)" },
            { transform: "translateX(-" + 100 * (page_count + 1) + "vw)" }
          ],
          {
            duration: 1000,
            fill: "forwards",
            easing: "ease-in"
          }
        );
        page_count++;
      } else {
        return false;
      }
      console.log(page_count);
    });

    //sub2 function

    let pic = document.getElementsByClassName("sub2Pic")[0];
    let text1 = document.getElementsByClassName("float_text")[0];
    let text2 = document.getElementsByClassName("float_text")[1];

    console.dir(pic);
    let pic_count = 0;
    console.log(pic);
    pic.addEventListener("click", function() {
      if (pic_count % 2 == 0) {
        this.animate([{ top: 0 }, { top: -100 + "vh" }], {
          duration: 500,
          easing: "ease-in",
          fill: "forwards"
        });
        text1.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 500,
          fill: "forwards",
          easing: "ease-in"
        });
        text2.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 500,
          fill: "forwards",
          easing: "ease-in"
        });
        pic_count++;
      } else {
        this.animate([{ top: -100 + "vh" }, { top: 0 }], {
          duration: 500,
          easing: "ease-in",
          fill: "forwards"
        });
        text1.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 500,
          fill: "forwards",
          easing: "ease-in"
        });
        text2.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 500,
          fill: "forwards",
          easing: "ease-in"
        });
        pic_count++;
      }
    });

    //sub3 function
    let small = document.getElementsByClassName("small")[0];
    let smallPic0 = document.getElementsByClassName("thumb")[0];
    let smallPic1 = document.getElementsByClassName("thumb")[1];
    let smallPic2 = document.getElementsByClassName("thumb")[2];
    let big = document.getElementsByClassName("big")[0];
    let float = document.getElementsByClassName("m_img")[0];

    smallPic0.style.backgroundImage = 'url("../trip/img/ex_1.jpg")';
    smallPic1.style.backgroundImage = 'url("../trip/img/ex_2.jpg")';
    smallPic2.style.backgroundImage = 'url("../trip/img/ex_3.jpg")';

    let thumb_count = 0;
    console.dir(document.getElementsByClassName("sub3_text")[0]);
    smallPic0.addEventListener("click", function() {
      big.style.backgroundImage = this.style.backgroundImage;
      thumb_count = 1;
      float.children[0].setAttribute(
        "src",
        "../trip/img/mex_" + thumb_count + ".png"
      );
      document.getElementsByClassName("sub3_text")[0].innerHTML = "Ski";
    });
    smallPic1.addEventListener("click", function() {
      big.style.backgroundImage = this.style.backgroundImage;
      thumb_count = 2;
      float.children[0].setAttribute(
        "src",
        "../trip/img/mex_" + thumb_count + ".png"
      );
      document.getElementsByClassName("sub3_text")[0].innerHTML = "Sky";
    });
    smallPic2.addEventListener("click", function() {
      big.style.backgroundImage = this.style.backgroundImage;
      thumb_count = 3;
      float.children[0].setAttribute(
        "src",
        "../trip/img/mex_" + thumb_count + ".png"
      );
      document.getElementsByClassName("sub3_text")[0].innerHTML = "Car";
    });
    console.dir(float.children[0].getAttribute("src"));

    //header indi click

    header_menu = document.getElementsByClassName("menu")[0];
    let counter = 0;
    for (let i of header_menu.children) {
      i.addEventListener("click", function() {
        i.console.dir(allLocation[0]);
        console.log(page_count);
        allLocation[0].animate(
          [
            { transform: "translateX(-" + 100 * page_count + "vw)" },
            { transform: "translateX(-" + 100 * counter + "vw)" }
          ],
          {
            duration: 500,
            easing: "ease-in",
            fill: "forwards"
          }
        );
      });
      console.dir(i);
      counter++;
    }
  }
}

window.onload = init;
