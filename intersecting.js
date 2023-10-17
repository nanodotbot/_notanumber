const intersectionsLeft = document.querySelectorAll('.intersection-left');
const intersectionsRight = document.querySelectorAll('.intersection-right');

const options = {
    root: null,
    threshold: 1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            console.log('intersecting:', entry.target);
        } else {
            entry.target.classList.remove('show');
            console.log('not intersecting:', entry.target);
        }
    })
}, options);

intersectionsLeft.forEach(intersection => {
    observer.observe(intersection);
})
intersectionsRight.forEach(intersection => {
    observer.observe(intersection);
})
