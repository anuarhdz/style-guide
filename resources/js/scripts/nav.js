import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const sections = gsap.utils.toArray('#main-content section.style-section');


 
function findNavigationItem(itemId){
  //console.log(itemId)
  let handle = itemId.replace('section-', '');
  //console.log(handle)
  let currentActiveItem = document.querySelector(`.navigation-link[href="#${handle}"]`);
  if(currentActiveItem !== null){
    return currentActiveItem;
  }
}
function removeActiveToItem(item){
  let parent = item.parentElement;
  parent.classList.remove('active');
  item.removeAttribute('aria-current');
}
function setActiveCurrentItem(item){
  let parent = item.parentElement;
  parent.classList.add('active');
  item.setAttribute('aria-current', 'page');
}

if(sections){
  sections.forEach((section, i) => {
    ScrollTrigger.create({
      trigger: section,
      start:'top top',
      markers: false,
      onEnter: () => {
        let currentNavItem = findNavigationItem(section.id);
        if (currentNavItem) {
          setActiveCurrentItem(currentNavItem);
        }
      },
      onEnterBack:() => {
        let currentNavItem = findNavigationItem(section.id);
        if(currentNavItem){
          setActiveCurrentItem(currentNavItem);
        }
      },
      onLeave:()=>{
        let currentNavItem = findNavigationItem(section.id);
        if(currentNavItem){
          removeActiveToItem(currentNavItem);
        }
      },
      onLeaveBack: () => {
        let currentNavItem = findNavigationItem(section.id);
        if(currentNavItem){
          removeActiveToItem(currentNavItem);
        }
      },
    })
  })
}
