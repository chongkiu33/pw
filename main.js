
/*loading*/
$(window).load(function(){
    $(window).click(function(){
        $(".loaderbg").hide();
    })
    
             
    
})




$('.parallax-window').parallax({imageSrc: 'image/sky.jpeg'});



let plane = document.querySelector('.plane1')
let demo = document.querySelector('#maincontent')
let demoHeight = document.querySelector('#maincontent').offsetTop
        demo.addEventListener('scroll', function() {
            var scrollTop = demo.scrollTop
            console.log(scrollTop , '==')
            if(scrollTop>=432 && scrollTop<1213){
                plane.style.top='13.5vmin';
                plane.style.right='13.8vmin';
            }else if(scrollTop>=1213 && scrollTop<2050){
                plane.style.top='16.5vmin';
                plane.style.right='13.8vmin';
            }else if(scrollTop>=2050 && scrollTop<2867){
                plane.style.top='19.8vmin';
                plane.style.right='15.5vmin';
                
            }else if(scrollTop>=2867 && scrollTop<3687){
                plane.style.top='22.3vmin';
                plane.style.right='12.8vmin';
                plane.style.transform = 'rotate(-20deg)';
            }else if(scrollTop>=3687 && scrollTop<4346){
            plane.style.top='21.6vmin';
            plane.style.right='9.3vmin';
            plane.style.transform = 'rotate(-49deg)';
            }else if(scrollTop>=4346 && scrollTop<5066){
                plane.style.top='21.6vmin';
                plane.style.right='6.3vmin';
                plane.style.transform = 'rotate(-49deg)';
            }else if(scrollTop>=5066 && scrollTop<5911){
                plane.style.top='22.3vmin';
                plane.style.right='3vmin';
                plane.style.transform = 'rotate(0deg)';
            }else if(scrollTop>=5911 && scrollTop<6736){
                plane.style.top='25.5vmin';
                plane.style.right='1.5vmin';
                plane.style.transform = 'rotate(38deg)';
            }else if(scrollTop>=6736 && scrollTop<7222){
                plane.style.top='28.6vmin';
                plane.style.right='1.5vmin';
                plane.style.transform = 'rotate(38deg)';
            }else if(scrollTop>=7222 && scrollTop<8075){
                plane.style.top='31.5vmin';
                plane.style.right='1.5vmin';
                plane.style.transform = 'rotate(38deg)';
            }else if(scrollTop>=8075 && scrollTop<8870){
                plane.style.top='34.5vmin';
                plane.style.right='1.5vmin';
                plane.style.transform = 'rotate(38deg)';
            }else if(scrollTop>=8870 && scrollTop<9518){
                plane.style.top='37.7vmin';
                plane.style.right='1.5vmin';
                plane.style.transform = 'rotate(38deg)';
            }else if(scrollTop>9518){
                plane.style.top='40.8vmin';
                plane.style.right='1.5vmin';
                plane.style.transform = 'rotate(38deg)';
            }else{
                plane.style.top='10vmin';
                plane.style.right='15vmin';
                plane.style.transform = 'rotate(20deg)';
            }
        })


        



var body=document.body;

    document.addEventListener('mousemove',(e)=>{
        var elem=document.createElement('div');
        elem.setAttribute('class','trail')
        elem.setAttribute('style',`left:${e.clientX + 75}px; top:${e.clientY + 65}px;`);

        elem.onanimationend=()=>{
            elem.remove();
        }

        body.insertAdjacentElement('beforeend',elem);



        var elem2=document.createElement('div');
        elem2.setAttribute('class','trail')
        elem2.setAttribute('style',`left:${e.clientX + 55}px; top:${e.clientY + 85}px;`);

        elem2.onanimationend=()=>{
            elem2.remove();
        }

        body.insertAdjacentElement('beforeend',elem2);
    })