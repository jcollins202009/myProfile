// let activeLinkId="homeLink";

// const setLinkActive = (linkId, destinationId) => {
//     const activeLinkElement = document.getElementById(activeLinkId);
//     const newActiveLinkElement = document.getElementById(linkId);

//     activeLinkElement.classList.remove("active");
//     activeLinkElement.setAttribute("aria-current", "false")
//     newActiveLinkElement.classList.add("active");
//     newActiveLinkElement.setAttribute("aria-current", "true")

//     activeLinkId= linkId;
//     var top = document.getElementById(destinationId).offsetTop;
//     window.scrollTo(0, top);

//     // window.location.href=hrefDestination;
// }

const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  navItems.forEach((navItem) => {
      navItem.classList.remove('active');
      navItem.setAttribute("aria-current", "false")
  });

  navItems[index].classList.add('active');
  navItems[index].setAttribute("aria-current", "true");
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);