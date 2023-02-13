export const riseThenFade = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity:1,
        transition: {
            ease: "easeInOut",
            duration: 0.7,
        },
    },
};

export const scaleHeroImg = {
    initial: {
        scale: .9, 
        opacity: 0,
    },
    animate: {
        y: -30, 
        scale: 1, 
        opacity: 1,
        transition: {
            duration: .3,
            ease: "easeInOut"
        },
    },

};

export const staggerChildren = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        },
    },
};

export const wordAnimation = {
    initial: {
        y: 100,
    },
    animate:{
        y: 0,
        transition:{
            ease: "easeInOut",
            duration: 0.7,
        },
    },
};