const timeTag = document.querySelector(".timer_time")
const startBtn = document.querySelector(".timer_start")
const pauseBtn = document.querySelector(".timer_pause")
const resetBtn = document.querySelector(".timer_reset")

let interval = null
let ss = 0
let mm = 0
let hh = 0

const zeroNum = (num) => {
  if(num < 10) {
    return `0${num}`
  } else{
    return num
  }
}

const showTime = () => {
  timeTag.innerText = `${zeroNum(hh)}:${zeroNum(mm)}:${zeroNum(ss)}`
}

const start = () => {
  if(interval === null){
    interval = setInterval(() => {
      ss++ 
      if(ss > 60){
        ss = 0
        mm++
      }else if(mm > 60){
        mm = 0
        hh++
      } 
      showTime()
    }, 1000)
  }
}

const pause = () => {
  clearInterval(interval)
  interval = null
}

const reset = () => {
  clearInterval(interval)
  ss = 0
  mm = 0
  hh = 0
  showTime()
}

// showTime = () => {
//   if(ss > 60) {
//     mm += 1
//     ss = 0
//   } else if(mm > 60) {
//     hh += 1
//     mm = 0
//   }
// }

// const start = () => {
//   interval = setInterval(() => {
//     ++count
//     ss++
//     showTime()
//     timeTag.innerText = `${hh}:${mm}:${ss}`
//   }, 1000)
// }

// const pause = () => {
//   clearInterval(interval)
// }

// const reset = () => {
//   clearInterval(interval)
//   count = 0
//   ss = 0
//   mm = 0
//   hh = 0
//   timeTag.innerText = `${hh}:${mm}:${ss}`
// }