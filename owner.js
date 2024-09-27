document.getElementById('menu').addEventListener('click', function(){
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open')
});
function hide(){
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');
}