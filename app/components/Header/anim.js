const transition = {duration: 0.5, ease: [0.76, 0, 0.24, 1]}


export const menuSlide = {
    initial: {y: "calc(-100% - 100px)"},
    enter: {y: "0", transition},
    exit: {y: "calc(-100% - 100px)", transition}
}

export const slide = {
    initial: {x: 80},
    enter: i => ({x: 0, transition:{duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),
    exit: i => ({x: 80, transition:{duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})
}

export const scale = {
    open: {scale: 1, transition: {duration: 0.3}},
    closed: {scale: 0, transition: {duration: 0.4}}
}



export const height = {
    initial: {
      height: 0
    },
    enter: {
      height: "auto",
      transition
    },
    exit: {
      height: 0,
      transition
    }
}