//Intersection Observer

let main = document.querySelector('main')
let header = document.querySelector('header')

let mainOption = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}
let mainOberver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting == false) {
    header.style.backgroundColor = 'rgba(0,0,0,0.5)'
  } else {
    header.style.backgroundColor = ''
  }
}, mainOption)

mainOberver.observe(main)
