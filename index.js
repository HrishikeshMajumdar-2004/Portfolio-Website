console.log("Script running");
document.querySelector('.cross').style.display='none';
document.querySelector('.ham-menu').addEventListener("click",()=>{
    // document.querySelector('.sidebar').classList.toggle('.sidebarGo');
    document.getElementsByClassName('sidebar')[0].classList.toggle('sidebarGo');
    if(document.getElementsByClassName('sidebar')[0].classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }else{
        document.querySelector('.ham').style.display='none';
        setTimeout(() => {
            document.querySelector('.cross').style.display='inline';
        }, 100);
        
        
    }
});