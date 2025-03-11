document.addEventListener('DOMContentLoaded', function() {
  $('#yw-topnav .navbar-collapse').attr('id', 'navbarSupportedContent')
  $('#navbarSupportedContent .navbar-nav > li').addClass('nav-item')
  $('#navbarSupportedContent .navbar-nav > li > a').addClass('nav-link')
  // manage dropdown
  $('.dropdown-toggle').attr('data-bs-toggle', 'dropdown')
    .attr('role', 'button').attr('aria-expanded', 'false')
  $('.dropdown-menu > li > a').addClass('dropdown-item')
  /* label devient badge */
  $('.label-default').removeClass('label').removeClass('label-default').addClass('badge text-bg-dark')
  $('.label-primary').removeClass('label').removeClass('label-primary')
    .addClass('badge text-bg-primary')
  $('.label-secondary-1').removeClass('label').removeClass('label-secondary-1')
    .addClass('badge text-bg-secondary-1')
  $('.label-secondary-2').removeClass('label').removeClass('label-secondary-2')
    .addClass('badge text-bg-secondary-2')
  $('.label-success').removeClass('label').removeClass('label-success')
    .addClass('badge text-bg-success')
  $('.label-info').removeClass('label').removeClass('label-info').addClass('badge text-bg-info')
  $('.label-warning').removeClass('label').removeClass('label-warning')
    .addClass('badge text-bg-warning')
  $('.label-danger').removeClass('label').removeClass('label-danger').addClass('badge text-bg-danger')

  /* panel devient card */
  $('.panel').removeClass('panel').addClass('card mb-4')
  $('.panel-heading').removeClass('panel-heading').addClass('card-header')
  $('.panel-collapse').removeClass('panel-collapse').addClass('card-body')
  $('.card-header').next().addClass('card-body')

  $('.well').addClass('card').first().addClass('card-body')
  $('select.form-control').addClass('form-select')
  $('.yw-topnav-fast-access').addClass('text-end')
  $('.dropdown-menu-right').addClass('dropdown-menu-end')
  $('[data-toggle]').each(function() {
    $(this).attr('data-bs-toggle', $(this).attr('data-toggle'))
  })
  $('[data-target]').each(function() {
    $(this).attr('data-bs-target', $(this).attr('data-target'))
  })
  $('[data-parent]').each(function() {
    $(this).attr('data-bs-parent', $(this).attr('data-parent'))
  })

  $('.modal-content > .modal-header h3').addClass('modal-title')
  $('.modal-content > .modal-header .close').addClass('btn-close').html('')
    .prependTo($(this).parents('.modal-header'))
  $('[data-dismiss]').each(function() {
    $(this).attr('data-bs-dismiss', $(this).attr('data-dismiss'))
  })
  document.getElementsByTagName('body')[0].addEventListener('show.bs.modal', () => {
    $('.modal-content > .modal-header h3').addClass('modal-title')
    $('.modal-content > .modal-header .close').addClass('btn-close').html('')
      .appendTo($(this).parents('.modal-header'))
    $('[data-dismiss]').each(function() {
      $(this).attr('data-bs-dismiss', $(this).attr('data-dismiss'))
    })
  })
  $('.nav > li').addClass('nav-item').find('> a').addClass('nav-link')
  $('.nav-item.active').find('> a').addClass('active')
})
