function sidebarToggle(event){
    console.log(event)
    let sidebar = document.querySelector('.portfolio-sidebar');
    let barOne = document.querySelector('.bar-1');
    let barTwo = document.querySelector('.bar-2');
    let barThree = document.querySelector('.bar-3');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active')
        barOne.classList.remove('active')
        barTwo.classList.remove('active')
        barThree.classList.remove('active')
    } else {
        sidebar.classList.add('active')
        barOne.classList.add('active')
        barTwo.classList.add('active')
        barThree.classList.add('active')
    }

    if(event){
        tab(event)
    }
}

function tab(event){
    let links = document.querySelectorAll('.sidebar-body-link');
    links.forEach(link => {
        if(link !== event.target){
            link.classList.remove('active')
        }else{
            link.classList.add('active')
        }
    })

}

setTimeout(() =>{
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        document.getElementById('portal').removeChild(preloader)
    },1000)
},3000);
