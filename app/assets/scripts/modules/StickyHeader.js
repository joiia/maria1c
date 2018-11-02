import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';


class StickyHeader { 
    constructor() {
        this.header = $('.header__menu');
        this.headerMenuBtn = $('.header__menu-btn');
        this.headerTriggerElement = $('.hero');

        this.pageSection = $('.page-section');

        this.navLink = $('.header a');
        this.btn = $('.btn');
        this.arw = $('.hero__arrow a');

        this.createHeaderWaypoints();
        this.createPageSectionWaypoints();
        this.addSmoothScroll();
    }

    addSmoothScroll() {

        if($(window).width()>=1200) {
            this.navLink.smoothScroll({offset: -60});
            this.btn.smoothScroll({offset: -60});
            this.arw.smoothScroll({offset: -60});
        } else {
            this.navLink.smoothScroll();
            this.btn.smoothScroll();
            this.arw.smoothScroll();
        }

    };

    createHeaderWaypoints() {
        var that = this;

        var headerWaypoint = new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function() {
                that.header.toggleClass('header__menu--fixed');
                that.headerMenuBtn.toggleClass('header__menu-btn--fixed');
            },
            offset: -50
        });

    }

    createPageSectionWaypoints() {
        var that = this;
        this.pageSection.each(function(){


            var currentSection = this;

            var pageSectionWaypointDown = new Waypoint({
                element: currentSection,
                handler: function(direction) {
                    if(direction == "down") {
                        $(currentSection).addClass('current-section');
                        var currentSectionLink = currentSection.getAttribute('data-matching-link');

                        that.navLink.removeClass('current-link');
                        $(currentSectionLink).addClass('current-link');
                    }
                },
                offset: 100           
            });

            var pageSectionWaypointUp = new Waypoint({
                element: currentSection,
                handler: function(direction) {
                    if(direction == "up") {
                        var currentSectionLink = currentSection.getAttribute('data-matching-link');
                        that.navLink.removeClass('current-link');
                        $(currentSectionLink).addClass('current-link');
                    }
                },
                offset: "-40%"
            });

        });

    }



}

export default StickyHeader;