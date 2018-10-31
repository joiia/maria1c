import $ from 'jquery';

import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import OpenModal from "./modules/OpenModal";

var mobileMenu = new MobileMenu();

new RevealOnScroll($('.page-section'), '85%');

var stickyHeader = new StickyHeader();

var openModal = new OpenModal();  

 
