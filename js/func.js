function intro() {
  introBox.animate(
    [
      {
        transform: `skewX(0) rotateX(0)`
      },
      {
        transform: `skewX(-30deg) rotateX(-180deg)`
      }
    ],
    {
      fill: `forwards`,
      duration: 2000,
      delay: 5000,
      easing: `cubic-bezier(.18,.93,.75,1.63)`
    }
  );
}

function mainTextOut() {
  const h2 = document.querySelector(`h2`);
  const text1 = document.getElementById(`text1`);
  const text2 = document.getElementById(`text2`);
  h2.animate(
    [
      {
        transform: `rotateY(-30deg) rotateX(0)`
      },
      {
        transform: `rotateY(-30deg) rotateX(180deg)`
      }
    ],
    {
      duration: 1000,
      fill: `forwards`,
      easing: `cubic-bezier(.17, .67, .5, 1.65)`
    }
  );

  text1.animate(
    [
      {
        transform: `rotateY(-30deg) rotateX(0)`
      },
      {
        transform: `rotateY(-30deg) rotateX(180deg)`
      }
    ],
    {
      duration: 1000,
      delay: 300,
      fill: `forwards`,
      easing: `cubic-bezier(.17, .67, .5, 1.65)`
    }
  );
  text2.animate(
    [
      {
        transform: `rotateY(-30deg) rotateX(0)`
      },
      {
        transform: `rotateY(-30deg) rotateX(180deg)`
      }
    ],
    {
      duration: 1000,
      delay: 600,
      fill: `forwards`,
      easing: `cubic-bezier(.17, .67, .5, 1.65)`
    }
  );
}
function mainTextIn() {
  const h2 = document.querySelector(`h2`);
  const text1 = document.getElementById(`text1`);
  const text2 = document.getElementById(`text2`);
  h2.animate(
    [
      {
        transform: `rotateY(-30deg) rotateX(180deg)`
      },
      {
        transform: `rotateY(-30deg) rotateX(360deg)`
      }
    ],
    {
      duration: 1000,
      delay: 4000,
      fill: `forwards`,
      easing: `cubic-bezier(.17, .67, .5, 1.65)`
    }
  );
  text1.animate(
    [
      {
        transform: `rotateY(-30deg) rotateX(180deg)`
      },
      {
        transform: `rotateY(-30deg) rotateX(360deg)`
      }
    ],
    {
      duration: 1000,
      delay: 4300,
      fill: `forwards`,
      easing: `cubic-bezier(.17, .67, .5, 1.65)`
    }
  );
  text2.animate(
    [
      {
        transform: `rotateY(-30deg) rotateX(180deg)`
      },
      {
        transform: `rotateY(-30deg) rotateX(360deg)`
      }
    ],
    {
      duration: 1000,
      delay: 4600,
      fill: `forwards`,
      easing: `cubic-bezier(.17, .67, .5, 1.65)`
    }
  );
}
function mainPicOut() {
  const leftPicBox = document.getElementById(`leftPicBox`);
  const rightPicBox = document.getElementById(`rightPicBox`);
  leftPicBox.animate(
    [
      {
        transform: `skewY(0)`,
        top: 0
      },
      {
        transform:
          arguments.length == 0 || arguments[0] > 0
            ? `skewY(40deg)`
            : `skewY(-40deg)`,
        top: arguments.length == 0 || arguments[0] > 0 ? `-150vh` : `150vh`
      }
    ],
    {
      duration: 1500,
      delay: 900,
      fill: `forwards`,
      easing: `cubic-bezier(0.61, 0.33, 0.51, 0.97)`
    }
  );
  rightPicBox.animate(
    [
      {
        transform: `skewY(0)`,
        top: `10vh`
      },
      {
        transform:
          arguments.length == 0 || arguments[0] > 0
            ? `skewY(40deg)`
            : `skewY(-40deg)`,
        top: arguments.length == 0 || arguments[0] > 0 ? `-150vh` : `150vh`
      }
    ],
    {
      duration: 1500,
      fill: `forwards`,
      easing: `cubic-bezier(0.61, 0.33, 0.51, 0.97)`,
      delay: 1200
    }
  );
}
function mainPicIn() {
  leftPicBox.animate(
    [
      {
        transform:
          arguments.length == 0 || arguments[0] > 0
            ? `skewY(40deg)`
            : `skewY(-40deg)`,
        top: arguments.length == 0 || arguments[0] > 0 ? `150vh` : `-150vh`
      },
      {
        transform: `skewY(0)`,
        top: 0
      }
    ],
    {
      duration: 1500,
      fill: `forwards`,
      easing: `cubic-bezier(0.61, 0.33, 0.51, 0.97)`,
      delay: 3100
    }
  );
  rightPicBox.animate(
    [
      {
        transform:
          arguments.length == 0 || arguments[0] > 0
            ? `skewY(40deg)`
            : `skewY(-40deg)`,
        top: arguments.length == 0 || arguments[0] > 0 ? `150vh` : `-150vh`
      },
      {
        transform: `skewY(0)`,
        top: `10vh`
      }
    ],
    {
      duration: 1500,
      fill: `forwards`,
      easing: `cubic-bezier(0.61, 0.33, 0.51, 0.97)`,
      delay: 2800
    }
  );
}
function mainBackChange(workList, idx) {
  backgroundBox.animate(
    [
      {
        filter: `blur(0) brightness(100%) grayscale(100%)`
      },
      {
        filter: `blur(200px) brightness(0) grayscale(100%)`
      }
    ],
    {
      duration: 1000,
      delay: 1500,
      fill: `forwards`
    }
  );
  setTimeout(() => {
    backgroundBox.style.backgroundImage = `url(${workList[idx].background})`;
  }, 2000);
  backgroundBox.animate(
    [
      {
        filter: `blur(200px) brightness(0) grayscale(100%)`
      },
      {
        filter: `blur(0px) brightness(100%) grayscale(100%)`
      }
    ],
    {
      duration: 1000,
      delay: 2500,
      fill: `forwards`
    }
  );
}
function setNumberUl(workList) {
  for (let i = 0; i < workList.length; i++) {
    const li = document.createElement(`li`);
    li.classList.add(`number`);
    li.innerHTML = `${i + 1}`;
    numberList.append(li);
  }
}
function setMainPage(workList, idx) {
  Array.from(mainConText.children).forEach(function(elem, i) {
    elem.children[0].innerHTML = workList[idx].pageInfo[i];
  });
  leftPicBox.style.backgroundImage = `url(${workList[idx].mainBoxPicUrl})`;
  rightPicBox.style.backgroundImage = `url(${workList[idx].mainBoxPicUrl})`;
  backgroundBox.style.backgroundImage = `url(${workList[idx].background})`;
}

function mouseHoverEvent() {
  const pictureBox = document.getElementById(`hoverBox`);

  pictureBox.addEventListener(`mouseenter`, () => {
    leftPicBox.animate(
      [
        {
          top: 0
        },
        {
          top: `5%`
        }
      ],
      {
        fill: `forwards`,
        duration: 250
      }
    );
    rightPicBox.animate(
      [
        {
          top: `10%`
        },
        {
          top: `5%`
        }
      ],
      {
        fill: `forwards`,
        duration: 250
      }
    );
  });
  pictureBox.addEventListener(`mouseleave`, () => {
    leftPicBox.animate(
      [
        {
          top: `5%`
        },
        {
          top: 0
        }
      ],
      {
        fill: `forwards`,
        duration: 250
      }
    );
    rightPicBox.animate(
      [
        {
          top: `5%`
        },
        {
          top: `10%`
        }
      ],
      {
        fill: `forwards`,
        duration: 250
      }
    );
  });
}
function initEvent() {
  const logo = document.getElementById(`logo`);
  const about = document.getElementById(`nav`);
  const aboutBox = document.getElementById(`aboutBox`);
  const aboutExit = document.getElementById(`aboutExit`);
  const works = document.getElementById(`works`);
  const worksBox = document.getElementById(`worksBox`);
  const worksExit = document.getElementById(`worksExit`);
  logo.addEventListener(`click`, () => {
    introBox.animate(
      [
        {
          transform: `skewX(-30deg) rotateX(90deg)`
        },
        {
          transform: `skewX(0deg) rotateX(0deg)`
        }
      ],
      {
        duration: 700,
        fill: `forwards`,
        easing: `cubic-bezier(.18,.93,.75,1.63)`
      }
    );
    introExit.style.display = `block`;
  });
  introExit.addEventListener(`click`, () => {
    introBox.animate(
      [
        {
          transform: `skewX(0) rotateX(0)`
        },
        {
          transform: `skewX(-30deg) rotateX(-180deg)`
        }
      ],
      {
        fill: `forwards`,
        duration: 2000,
        easing: `cubic-bezier(.18,.93,.75,1.63)`
      }
    );
  });
  introBox.addEventListener(`wheel`, e => {
    e.stopPropagation(e);
  });
  about.addEventListener(`click`, () => {
    aboutBox.animate(
      [
        {
          transform: `skewX(-30deg) rotateX(-120deg)`
        },
        {
          transform: `skewX(0) rotateX(0)`
        }
      ],
      {
        fill: `forwards`,
        duration: 700,
        easing: `cubic-bezier(.18,.93,.75,1.63)`
      }
    );
    const aboutTexts = document.querySelectorAll(`.aboutText`);
    aboutTexts.forEach((elem, i) => {
      elem.animate(
        [
          {
            transform: `skewX(-30deg) rotateX(90deg)`
          },
          {
            transform: `skewX(0deg) rotateX(0deg)`
          }
        ],
        {
          fill: `forwards`,
          duration: 1000,
          delay: 500 * i + 1000,
          easing: `cubic-bezier(.18,.93,.75,1.63)`
        }
      );
    });
  });
  aboutExit.addEventListener(`click`, () => {
    const aboutTexts = document.querySelectorAll(`.aboutText`);
    aboutBox.animate(
      [
        {
          transform: `skewX(0) rotateX(0)`
        },
        {
          transform: `skewX(-30deg) rotateX(-120deg)`
        }
      ],
      {
        fill: `forwards`,
        delay: 1000,
        duration: 1500,
        easing: `cubic-bezier(.18,.93,.75,1.63)`
      }
    );
    aboutTexts.forEach((elem, i) => {
      elem.animate(
        [
          {
            transform: `skewX(0deg) rotateX(0deg)`
          },
          {
            transform: `skewX(-30deg) rotateX(90deg)`
          }
        ],
        {
          fill: `forwards`,
          duration: 1000,
          easing: `cubic-bezier(.18,.93,.75,1.63)`
        }
      );
    });
  });
  aboutBox.addEventListener(`wheel`, e => {
    e.stopPropagation(e);
  });
  works.addEventListener(`click`, () => {
    worksBox.animate(
      [
        {
          transform: `skewX(-30deg) rotateX(-120deg)`
        },
        {
          transform: `skewX(0) rotateX(0)`
        }
      ],
      {
        fill: `forwards`,
        duration: 700,
        easing: `cubic-bezier(.18,.93,.75,1.63)`
      }
    );
  });
  worksExit.addEventListener(`click`, () => {
    worksBox.animate(
      [
        {
          transform: `skewX(0) rotateX(0)`
        },
        {
          transform: `skewX(-30deg) rotateX(-120deg)`
        }
      ],
      {
        fill: `forwards`,
        duration: 700,
        easing: `cubic-bezier(.18,.93,.75,1.63)`
      }
    );
  });
  worksBox.addEventListener(`wheel`, e => {
    e.stopPropagation(e);
  });
}
