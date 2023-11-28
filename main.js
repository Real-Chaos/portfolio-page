document.querySelector('.page-top-content button').addEventListener('mouseenter', () => {
  const btnBg = document.querySelector('.btn-bg')
  const css = window.document.styleSheets[0]
  css.insertRule(`
  @keyframes fill {
    0% {
      width: ${btnBg.offsetWidth}px;
    }
    
    100% {
      width: 100%;
    }
  }
  `, css.cssRules.length)
  btnBg.style.animation = "fill ease-in-out 1s forwards"
})

document.querySelector('.page-top-content button').addEventListener('mouseleave', () => {
  const btnBg = document.querySelector('.btn-bg')
 
  const css = window.document.styleSheets[0]
  css.insertRule(`
  @keyframes unfill {
    0% {
      width: ${btnBg.offsetWidth}px;
    }
    
    100% {
      width: 0%;
    }
  }
  `, css.cssRules.length)
  btnBg.style.animation = "unfill ease-in-out 1s forwards"
})
