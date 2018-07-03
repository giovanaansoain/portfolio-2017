// IF JS IS ENABLED, REMOVE 'no-js' AND ADD 'js' CLASS
jQuery('html').removeClass('no-js').addClass('js');

jQuery(document).ready(function($) {
	"use strict";

	//FORM VALIDATION
	if (jQuery().validate) { jQuery("#commentform").validate(); }

	! function(a) {
		"use strict";
		a(document).ready(function() {

			var 
			body   = a("body"),
			html   = a("html"),
			admin  = ("admin-bar"),
			active = ("active"),
			cta    = a(".project-cta"),
			formContainer = a(".formContainer"),
			pageHeight = jQuery(window).height();

			a(".page-container").fitVids();
			

			/*================================*/
			/* SLICKNAV
			/*================================*/
			a('#primary-menu').slicknav({
				label: '',
				duration: 0,
			});

			a('.slicknav_btn').on( 'click', function() {	
				var
				b = a(".slicknav_menu, .slicknav_btn");
				b.toggleClass(active);
			});


			/*================================*/
			/* SOCIAL
			/*================================*/
			a('.nav-social-toggle').on( 'click', function() {	
				var
				b = a(".social-flyout");
				b.toggleClass(active);
				a(this).toggleClass(active);
			});


			/*================================*/
			/* SUPERFISH
			/*================================*/
			a('nav ul#primary-menu').superfish({
		    		delay: 0,
		    		animation: { opacity:'show', height:'show' },
		    		speed: 0,
		    		cssArrows: false,
		    		disableHI: true
			});


			/*================================*/
			/* MATERIAL INPUTS
			/*================================*/
			a('.comment-form input, .contactform input').blur(function() {
				if (a(this).val())
					a(this).addClass('used');
				else
				a(this).removeClass('used');
			});


			/*================================*/
			/* PARALLAX PORTFOLIO TEMPLATE
			/*================================*/
			var
			b = a(".offset-projects .project:nth-of-type(23n+2) .thumb"),
			c = a(".offset-projects .project:nth-of-type(23n+3) .thumb"),
			d = a(".offset-projects .project:nth-of-type(23n+4) .thumb"),
			e = a(".offset-projects .project:nth-of-type(23n+5) .thumb"),
			f = a(".offset-projects .project:nth-of-type(23n+6) .thumb"),
			g = a(".offset-projects .project:nth-of-type(23n+7) .thumb"),
			h = a(".offset-projects .project:nth-of-type(23n+8) .thumb"),
			i = a(".offset-projects .project:nth-of-type(23n+9) .thumb"),
			j = a(".offset-projects .project:nth-of-type(23n+10) .thumb"),
			k = a(".offset-projects .project:nth-of-type(23n+11) .thumb"),
			l = a(".offset-projects .project:nth-of-type(23n+12) .thumb"),
			m = a(".offset-projects .project:nth-of-type(23n+13) .thumb"),
			n = a(".offset-projects .project:nth-of-type(23n+14) .thumb"),
			o = a(".offset-projects .project:nth-of-type(23n+15) .thumb"),
			p = a(".offset-projects .project:nth-of-type(23n+16) .thumb"),
			q = a(".offset-projects .project:nth-of-type(23n+17) .thumb"),
			r = a(".offset-projects .project:nth-of-type(23n+18) .thumb"),
			s = a(".offset-projects .project:nth-of-type(23n+19) .thumb"),
			t = a(".offset-projects .project:nth-of-type(23n+20) .thumb"),
			u = a(".offset-projects .project:nth-of-type(23n+21) .thumb"),
			v = a(".offset-projects .project:nth-of-type(23n+22) .thumb"),
			w = a(".offset-projects .project:nth-of-type(23n+23) .thumb"),
			
			z = a("#projects.projects.offset-projects"),

			cp = a(".page-template-template-contact-php .page"),
			cg = a(".page-template-template-contact-php .g-map"),
			cf = a(".page-template-template-contact-php .first-link"),

			ec = a(".page .entry-media");

			if( !z.hasClass('no-parallax') ) {
				a(window).on("scroll", function() {
					b.css({ top: "-" + .25 * a(window).scrollTop() + "px" }),
					c.css({ top: "-" + .50 * a(window).scrollTop() + "px" }),
					d.css({ top: "-" + .15 * a(window).scrollTop() + "px" }),
					e.css({ top: "-" + .20 * a(window).scrollTop() + "px" }),
					f.css({ top: "-" + .17 * a(window).scrollTop() + "px" }),
					g.css({ top: "-" + .30 * a(window).scrollTop() + "px" }),
					h.css({ top: "-" + .45 * a(window).scrollTop() + "px" }),
					i.css({ top: "-" + .30 * a(window).scrollTop() + "px" }),

					j.css({ top: "-" + .25 * a(window).scrollTop() + "px" }),
					k.css({ top: "-" + .40 * a(window).scrollTop() + "px" }),
					l.css({ top: "-" + .45 * a(window).scrollTop() + "px" }),
					m.css({ top: "-" + .35 * a(window).scrollTop() + "px" }),
					n.css({ top: "-" + .32 * a(window).scrollTop() + "px" }),
					o.css({ top: "-" + .30 * a(window).scrollTop() + "px" }),
					p.css({ top: "-" + .40 * a(window).scrollTop() + "px" }),

					q.css({ top: "-" + .45 * a(window).scrollTop() + "px" }),
					r.css({ top: "-" + .30 * a(window).scrollTop() + "px" }),
					s.css({ top: "-" + .35 * a(window).scrollTop() + "px" }),
					t.css({ top: "-" + .30 * a(window).scrollTop() + "px" }),
					u.css({ top: "-" + .33 * a(window).scrollTop() + "px" }),
					w.css({ top: "-" + .30 * a(window).scrollTop() + "px" }),

					z.css({ bottom: "-" + .30 * a(window).scrollTop() + "px" })
				});
			}

			if( !ec.hasClass('no-parallax') ) {
				a(window).on("scroll", function() {
					ec.css({ top: "" + .35 * a(window).scrollTop() + "px" })
				});
			}

			if( !cp.hasClass('no-parallax') ) {
				a(window).on("scroll", function() {
					cp.css({ top: "" + .15 * a(window).scrollTop() + "px" }),
					cg.css({ top: "" - .1 * a(window).scrollTop() + "px" }),
					cf.css({ top: "" - .05 * a(window).scrollTop() + "px" })
					
				});
			}


			/*================================*/
			/* PORTFOLIO LAZY LOADING
			/*================================*/		
			if( a(body).hasClass('single-portfolio') ) {
				a(".project-assets.lazy-load img").unveil(25, function() {
					a(this).load(function() {
						this.style.opacity = 1;
					});
				});
			}


			/*================================*/
			/* PORTFOLIO FLYOUT
			/*================================*/
			a( "#flyout-toggle, #flyout-close, #nav-flyout-toggle" ).click( function(e) {
				var 
				b = body.scrollTop(),
				c = a(".project-flyout"),
				d = a("#flyout-overlay"),
				e = ("open-flyout"),
				f = ("open"),
				g = a(".page-container");

				if(b!=0) {
					if(body.hasClass(admin)) {
						body.animate({ scrollTop: g.offset().top - 32 }, 400);
					} else {
						body.animate({ scrollTop: g.offset().top - 0 }, 400);
					}
				}

				if( c.hasClass(f) ) { 
					setTimeout(function(){
						c.removeClass(f);
						html.removeClass(e);
						return false;
					},300);
					setTimeout(function(){ d.removeClass(f); }, 400);
				} else {
					setTimeout(function(){
						c.addClass(f);
						html.addClass(e);
						return false;
					},500);
					setTimeout(function(){ d.addClass(f) }, 400);
				}
			});


			/*================================*/
			/* FLYOUT ISOTOPE
			/*================================*/
			a(window).load(function() {
				var container = a('.masonry-projects');
				
				container.imagesLoaded( function(){
					container.isotope({
						itemSelector: '.masonry-projects .project',
				 		resizesContainer: true,
				 		getSortData: {
						     views: '[data-views]',
						     date: '[data-date]',
						},
						sortAscending: {
							views: false,
							date: false,
						}
					});
				});


			/*================================*/
			/* FLYOUT SORTING
			/*================================*/
			a('.sort-group a').on( 'click', function(e) {	
				var 
				b = a(this).attr('data-sort-by'),
				c = a(".sort-group a"),
				d = ("active");

				e.preventDefault();
				container.isotope({ sortBy: b });
				c.removeClass(d);
				jQuery(this).addClass(d);
			});

		
			/*================================*/
			/* FLYOUT FILTER
			/*================================*/
			a('.filter-group a').on( 'click', function(event) {
				var 
				b = a(this).attr('data-filter'),
				d = ("active"),
				e = jQuery('.project-filter'),
			     f = e.find('a');

				event.preventDefault();
				container.isotope({ filter: b });
				f.removeClass(d);
				jQuery(this).addClass(d);
			});


			/*================================*/
			/* PROJECT CTA FORM
			/*================================*/
			a(".project-cta .btn").click(function(e) {
				e.preventDefault();
				formContainer.addClass(active)
				setTimeout(function(){ body.addClass("switchToForm") }, 100);

			}); 

			a("button.close").click(function(e) {
				e.preventDefault();
				body.removeClass("switchToForm");
				setTimeout(function(){ formContainer.removeClass(active) }, 500);
			}); 

			//DROPKICK SUBJECT SELETOR
			a("#subject_select").dropkick();


			/*================================*/
			/* BACK TO TOP
			/*================================*/
			a('#back-to-top').on("click", function() {
				event.preventDefault();
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash); target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						if( body.hasClass(admin) ) {
							body.animate({ scrollTop: target.offset().top - 32 }, 1300);
						} else {
							body.animate({ scrollTop: target.offset().top }, 1300);
						}
						return false;
					}
				}
			});


			/*================================*/
			/* JPLAYER FUNCTION
			/*================================*/	
			Bean_Media.setupAudioPosts();

		}); //a(document).ready(function()

	}), //! function(a)


	/*================================*/
	/* PICTUREFILL
	/*================================*/	
	a.picturefill = function() {
		for (var b = a.document.getElementsByTagName("div"), c = 0, d = b.length; d > c; c++)
			if (null !== b[c].getAttribute("data-picture")) {
				for (var e = b[c].getElementsByTagName("div"), f = [], g = 0, h = e.length; h > g; g++) {
					var i = e[g].getAttribute("data-media");
					(!i || a.matchMedia && a.matchMedia(i).matches) && f.push(e[g])
				}
				var j = b[c].getElementsByTagName("img")[0];
				if (f.length) {
					if (!j) {
						var k = f.pop();
						j = a.document.createElement("img"), j.alt = b[c].getAttribute("data-alt"), j.className = b[c].getAttribute("data-class"), k.getAttribute("data-width") && (j.width = k.getAttribute("data-width")), b[c].appendChild(j), j.src = k.getAttribute("data-src")
					}
				} else j && b[c].removeChild(j)
			}
		}, a.addEventListener ? (a.addEventListener("resize", a.picturefill, !1), a.addEventListener("DOMContentLoaded", function() {
			a.picturefill(), a.removeEventListener("load", a.picturefill, !1)
		}, !1), a.addEventListener("load", a.picturefill, !1)) : a.attachEvent && a.attachEvent("onload", a.picturefill)

	}(window.jQuery);
});


/*================================*/
/* JPLAYER SETUP
/*================================*/	
var Bean_Media = {
	setupAudioPosts: function() {

		if(jQuery().jPlayer) {
			jQuery(".jp-audio").each(function() {
				var mp3 = jQuery(this).data("file");
				var cssSelectorAncestor = '#' + jQuery(this).attr("id");
				jQuery(this).find(".jp-jplayer").jPlayer( {
					ready : function () {
							jQuery(this).jPlayer("setMedia", {
							mp3: mp3,
							end: ""
						});
					},
					size: {
					    width: "100%",
					},
					swfPath: WP_TEMPLATE_DIRECTORY_URI[0] + "/assets/js",
					cssSelectorAncestor: cssSelectorAncestor,
					supplied: (mp3 ? "mp3": "") + ", all"
				});
			});
		}
		jQuery(".jp-audio .jp-interface").css("display", "block");
	},
};