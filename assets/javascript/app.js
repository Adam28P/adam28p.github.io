$(document).ready(function () {

    $("#sidebar").mCustomScrollbar({
         theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#red').on('click', function(){
        $('#red').removeClass('inactive');
        $('#red').addClass('active');
        $('#orange').addClass('inactive');
        $('#orange').removeClass('active');
        $('#yellow').addClass('inactive');
        $('#yellow').removeClass('active');
        $('#green').addClass('inactive');
        $('#green').removeClass('active');
        $('#blue').addClass('inactive');
        $('#blue').removeClass('active');
        $('#indigo').addClass('inactive');
        $('#indigo').removeClass('active');
        $('#violet').addClass('inactive');
        $('#violet').removeClass('active');
    });

    $('#orange').on('click', function(){
        $('#orange').removeClass('inactive');
        $('#orange').addClass('active');
        $('#red').addClass('inactive');
        $('#red').removeClass('active');
        $('#yellow').addClass('inactive');
        $('#yellow').removeClass('active');
        $('#green').addClass('inactive');
        $('#green').removeClass('active');
        $('#blue').addClass('inactive');
        $('#blue').removeClass('active');
        $('#indigo').addClass('inactive');
        $('#indigo').removeClass('active');
        $('#violet').addClass('inactive');
        $('#violet').removeClass('active');
    });

    $('#yellow').on('click', function(){
        $('#yellow').removeClass('inactive');
        $('#yellow').addClass('active');
        $('#orange').addClass('inactive');
        $('#orange').removeClass('active');
        $('#red').addClass('inactive');
        $('#red').removeClass('active');
        $('#green').addClass('inactive');
        $('#green').removeClass('active');
        $('#blue').addClass('inactive');
        $('#blue').removeClass('active');
        $('#indigo').addClass('inactive');
        $('#indigo').removeClass('active');
        $('#violet').addClass('inactive');
        $('#violet').removeClass('active');
    });

    $('#green').on('click', function(){
        $('#green').removeClass('inactive');
        $('#green').addClass('active');
        $('#orange').addClass('inactive');
        $('#orange').removeClass('active');
        $('#yellow').addClass('inactive');
        $('#yellow').removeClass('active');
        $('#red').addClass('inactive');
        $('#red').removeClass('active');
        $('#blue').addClass('inactive');
        $('#blue').removeClass('active');
        $('#indigo').addClass('inactive');
        $('#indigo').removeClass('active');
        $('#violet').addClass('inactive');
        $('#violet').removeClass('active');
    });

    $('#blue').on('click', function(){
        $('#blue').removeClass('inactive');
        $('#blue').addClass('active');
        $('#orange').addClass('inactive');
        $('#orange').removeClass('active');
        $('#yellow').addClass('inactive');
        $('#yellow').removeClass('active');
        $('#green').addClass('inactive');
        $('#green').removeClass('active');
        $('#red').addClass('inactive');
        $('#red').removeClass('active');
        $('#indigo').addClass('inactive');
        $('#indigo').removeClass('active');
        $('#violet').addClass('inactive');
        $('#violet').removeClass('active');
    });

    $('#indigo').on('click', function(){
        $('#indigo').removeClass('inactive');
        $('#indigo').addClass('active');
        $('#orange').addClass('inactive');
        $('#orange').removeClass('active');
        $('#yellow').addClass('inactive');
        $('#yellow').removeClass('active');
        $('#green').addClass('inactive');
        $('#green').removeClass('active');
        $('#blue').addClass('inactive');
        $('#blue').removeClass('active');
        $('#red').addClass('inactive');
        $('#red').removeClass('active');
        $('#violet').addClass('inactive');
        $('#violet').removeClass('active');
    });

    $('#violet').on('click', function(){
        $('#violet').removeClass('inactive');
        $('#violet').addClass('active');
        $('#orange').addClass('inactive');
        $('#orange').removeClass('active');
        $('#yellow').addClass('inactive');
        $('#yellow').removeClass('active');
        $('#green').addClass('inactive');
        $('#green').removeClass('active');
        $('#blue').addClass('inactive');
        $('#blue').removeClass('active');
        $('#indigo').addClass('inactive');
        $('#indigo').removeClass('active');
        $('#red').addClass('inactive');
        $('#red').removeClass('active');
    });

   
});