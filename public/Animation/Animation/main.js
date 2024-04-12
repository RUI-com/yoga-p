const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})

sr.reveal(`.home__data , .list__container,.join__content,.footer__container`)
sr.reveal(`.home__img`,{origin:'bottom'})
sr.reveal(`.health__image, .routine__images,.follow__img-3`,{origin:'left'})
sr.reveal(`.health__data,.routine__data,.follow__img-4`,{origin:'right'})
sr.reveal(`.follow__data,.follow__content-1 img`,{interval:100})