import $ from 'jquery';
import smoothscroll from 'smoothscroll-polyfill';

import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import OpenModal from "./modules/OpenModal";

var mobileMenu = new MobileMenu();

new RevealOnScroll($('h2'), '100%');
new RevealOnScroll($('.container'), '100%');
new RevealOnScroll($('.about__content'), '100%');

var stickyHeader = new StickyHeader();

//var openModal = new OpenModal();  

