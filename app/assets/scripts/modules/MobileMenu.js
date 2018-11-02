import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.header = $(".header");
        this.menuBtn = $(".header__menu-btn");
        this.menu = $(".header__menu");
        this.menuLink = $(".header__menu a");
        this.menuClose = $(".header__menu-close");
        this.menuBg = $(".header__menu-bg");
        this.events();
    }
    
    events() {      
        this.menuBtn.click(this.showMenu.bind(this));
        this.menuLink.click(this.hideMenu.bind(this));
        this.menuBg.click(this.hideMenu.bind(this));
        this.menuClose.click(this.hideMenu.bind(this));
    }
    
    showMenu() {
        this.menu.addClass("header__menu--is-visible");
        this.menuClose.addClass("header__menu-close--is-visible");
        this.menuBg.addClass("header__menu-bg--is-visible");
        this.menuBtn.addClass("header__menu-btn--is-hidden");
    }
    
    hideMenu() {
        this.menu.removeClass("header__menu--is-visible");
        this.menuClose.removeClass("header__menu-close--is-visible");
        this.menuBg.removeClass("header__menu-bg--is-visible");
        this.menuBtn.removeClass("header__menu-btn--is-hidden");
    }
}

export default MobileMenu;