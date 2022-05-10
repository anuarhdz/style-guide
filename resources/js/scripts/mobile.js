function mobileMenu(menu){
  let navButton = menu.querySelector('.menu-button');
  let sidebar = menu.nextElementSibling;
  let navItems = sidebar.querySelectorAll('.navigation-item a');

  navButton.addEventListener('click', setupSidebar);
  
  navItems.forEach(function(navItem){
    navItem.addEventListener('click', closeSidebar);
  });

  function setupSidebar(e){
    e.stopPropagation();
    let navIsOpened = navButton.classList.value.includes('menu-opened');
    toggle(navButton, 'menu-opened');

    if(navIsOpened){
      closeSidebar();
      
    } else {
      openSidebar();
    }

  }
  

  function openSidebar(){
    sidebar.removeAttribute('aria-hidden');
    setTimeout(function(){
      sidebar.classList.add('menu-opened');
    }, 500);
  }

  function closeSidebar() {
    sidebar.classList.remove('menu-opened');    
    navButton.classList.remove('menu-opened');
    setTimeout(function () {
      sidebar.setAttribute('aria-hidden', true);
    }, 500);
  }
}





function toggle(element, classToToggle){
  return element.classList.toggle(classToToggle);
}


export {mobileMenu};