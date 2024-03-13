function onScroll() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById('header').style.backgroundColor = 'white';
  } else {
    document.getElementById('header').style.backgroundColor = '';
  }
}

window.addEventListener('scroll', onScroll);

export default function Scroll() {
  return null;
}
