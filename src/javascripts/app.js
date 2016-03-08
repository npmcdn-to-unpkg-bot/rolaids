import './asyncModules'
import exclaimify from './exclaimify'


//
// Accordion
//
function accordionTabs(target) {
 $(target).each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show()
  })
  $(target).on('click', 'li > a.tab-link', function(event) {
    event.preventDefault()

    if (!$(this).hasClass('is-active')) {
      var accordionTabs = $(this).closest('.accordion-tabs')
      accordionTabs.find('.is-open').removeClass('is-open').hide()

      $(this).next().toggleClass('is-open').toggle()
      accordionTabs.find('.is-active').removeClass('is-active')
      $(this).addClass('is-active')
    }
  }) 
}


//
// Dropdown
//
const dropdown = function() {

}

//
// Application "Controller"
//
const ROLAIDS = {
  common: {
    init: function() {
      accordionTabs('.accordion-tabs')
    },
  },

  home: {
    init: function() {
    },

    show: function() {
    }
  }
}


//
// Utility functions
//
const UTIL = {
  exec: function( controller, action ) {
    var ns = ROLAIDS,
        action = ( action === undefined ) ? "init" : action

    if ( controller !== "" && ns[controller] && typeof ns[controller][action] == "function" ) {
      ns[controller][action]()
    }
  },

  init: function() {
    var body = document.body,
        controller = body.getAttribute( "data-controller" ),
        action = body.getAttribute( "data-action" )

    UTIL.exec( "common" )
    UTIL.exec( controller )
    UTIL.exec( controller, action )
  }
}


//
// Initialize
//
document.addEventListener('DOMContentLoaded', function() {
  UTIL.init() 
}, false)
