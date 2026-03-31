(function(){
    'use strict';
    const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);

    const PROJECTS=[
        {name:'texit-access',cat:'Access Control · 14.7K lines',company:'TEXIT'},
        {name:'M2CRM',cat:'Multi-Tenant CRM · 6.8K lines',company:'TEXIT'},
        {name:'Dormimy Management',cat:'Dormitory System · In Progress',company:'TEXIT'},
        {name:'Real-time Hubs',cat:'4 SignalR Hubs',company:'TEXIT'},
        {name:'Caching & Infra',cat:'Redis · Docker Swarm · CI/CD',company:'TEXIT'},
        {name:'Security & Observability',cat:'Encryption · Grafana · OTLP',company:'TEXIT'},
    ];
    let cur=0,animating=false;
    const total=PROJECTS.length;

    /* ═══ LOADER ═══ */
    function runLoader(){
        const tl=gsap.timeline({onComplete:revealSite});
        tl.to('.loader__text',{y:'0%',duration:.8,stagger:.25,ease:'power3.out'},.4);
        tl.to('.loader__name',{clipPath:'inset(0 0% 0 0)',duration:1.2,ease:'power2.inOut'},.5);
        tl.to({},{duration:1});
        tl.to('.loader__text',{y:'-110%',duration:.6,ease:'power3.in'});
        tl.to('.loader__name',{clipPath:'inset(0 0 0 100%)',duration:.8,ease:'power2.inOut'},'-=.4');
        tl.to('#loader',{opacity:0,duration:.4});
        tl.set('#loader',{display:'none'});
    }

    function revealSite(){
        gsap.to('.nav',{opacity:1,duration:.8,ease:'power2.out'});
        gsap.to('.voile',{opacity:1,duration:1,ease:'power2.out'});
        gsap.to('.slider__info',{opacity:1,duration:.8,delay:.2,ease:'power2.out'});
        gsap.to('.slider__nav',{opacity:1,duration:.8,delay:.3,ease:'power2.out'});
    }

    /* ═══ SLIDER ═══ */
    function initSlider(){
        const L=$$('#sliderLeft .slider__item'),R=$$('#sliderRight .slider__item');
        if(L[0])L[0].classList.add('is-active');
        if(R[0])R[0].classList.add('is-active');
        updateInfo();updateCounter();
        $('#nextBtn').addEventListener('click',()=>goTo(cur+1));
        $('#prevBtn').addEventListener('click',()=>goTo(cur-1));
        document.addEventListener('keydown',e=>{
            if(e.key==='ArrowRight'||e.key==='ArrowDown')goTo(cur+1);
            if(e.key==='ArrowLeft'||e.key==='ArrowUp')goTo(cur-1);
        });
        let tx=0;
        document.addEventListener('touchstart',e=>{tx=e.touches[0].clientX},{passive:true});
        document.addEventListener('touchend',e=>{const d=tx-e.changedTouches[0].clientX;if(Math.abs(d)>50){d>0?goTo(cur+1):goTo(cur-1)}});
        setInterval(()=>goTo(cur+1),6000);
    }

    function goTo(idx){
        if(animating)return;
        animating=true;
        const L=$$('#sliderLeft .slider__item'),R=$$('#sliderRight .slider__item');
        const prev=cur;
        cur=((idx%total)+total)%total;
        const dir=idx>prev?1:-1;
        const pL=L[prev],nL=L[cur],pR=R[prev],nR=R[cur];
        const tl=gsap.timeline({onComplete:()=>{pL.classList.remove('is-active');pR.classList.remove('is-active');animating=false}});
        gsap.set(nL,{opacity:0,y:dir*40+'%'});
        gsap.set(nR,{opacity:0,y:-dir*40+'%'});
        nL.classList.add('is-active');
        nR.classList.add('is-active');
        tl.to(pL,{opacity:0,y:-dir*25+'%',duration:.7,ease:'power2.inOut'},0);
        tl.to(pR,{opacity:0,y:dir*25+'%',duration:.7,ease:'power2.inOut'},0);
        tl.to(nL,{opacity:1,y:'0%',duration:.7,ease:'power2.inOut'},.1);
        tl.to(nR,{opacity:1,y:'0%',duration:.7,ease:'power2.inOut'},.1);
        tl.to('#projectName',{opacity:0,y:-10,duration:.25,ease:'power2.in'},0);
        tl.to('.slider__project-meta',{opacity:0,duration:.2},0);
        tl.call(updateInfo,null,.4);
        tl.fromTo('#projectName',{opacity:0,y:10},{opacity:1,y:0,duration:.3,ease:'power2.out'},.4);
        tl.to('.slider__project-meta',{opacity:.5,duration:.3},.45);
        updateCounter();
    }

    function updateInfo(){
        const p=PROJECTS[cur];
        $('#projectName').textContent=p.name;
        $('#projectCat').textContent=p.cat;
        $('#projectCompany').textContent=p.company;
    }
    function updateCounter(){
        $('#curSlide').textContent=String(cur+1).padStart(2,'0');
        $('#totSlides').textContent=String(total).padStart(2,'0');
    }

    /* ═══ SCROLL ANIMS ═══ */
    function initScrollAnims(){
        gsap.registerPlugin(ScrollTrigger);
        const anim=(sel,opts={})=>$$(sel).forEach(el=>gsap.to(el,{scrollTrigger:{trigger:el,start:'top 88%',toggleActions:'play none none reverse'},opacity:1,y:0,duration:1,ease:'power3.out',...opts}));
        anim('.number-item',{stagger:.1,duration:.8});
        anim('.section__label');
        anim('.section__title',{duration:1.2});
        anim('.section__subtitle',{delay:.1});
        anim('.section__body',{delay:.15});
        anim('.meta-grid',{delay:.2});
        anim('.skills-grid',{delay:.1});
        anim('.timeline__item',{stagger:.1});
        anim('.contact-link',{stagger:.1});
        anim('.contact__title',{duration:1.4});
    }

    /* ═══ NAV SCROLL ═══ */
    function initNavScroll(){
        $$('a[href^="#"]').forEach(a=>{
            if(a.classList.contains('nav__menu-btn')||a.classList.contains('menu__close'))return;
            a.addEventListener('click',e=>{
                e.preventDefault();
                $('#menu').classList.remove('is-open');
                const href=a.getAttribute('href');

                // "work" -> scroll to top (slider is there)
                if(href==='#work'){
                    window.scrollTo({top:0,behavior:'smooth'});
                    // Flash the slider nav to draw attention
                    gsap.fromTo('.slider__nav',{scale:1.1},{scale:1,duration:.6,ease:'elastic.out(1,0.5)'});
                    return;
                }

                const target=$(href);
                if(!target)return;
                const y=target.getBoundingClientRect().top+window.scrollY-60;
                window.scrollTo({top:y,behavior:'smooth'});
            });
        });
    }

    /* ═══ MENU ═══ */
    function initMenu(){
        $$('.nav__menu-btn').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();$('#menu').classList.toggle('is-open')}));
        $('.menu__close').addEventListener('click',e=>{e.preventDefault();$('#menu').classList.remove('is-open')});
    }

    /* ═══ LANG TOGGLE SYNC ═══ */
    function initLangSync(){
        const desktop=$('#langToggle'),mobile=$('#langToggleMobile');
        if(!desktop||!mobile)return;
        // Sync both buttons
        function syncToggle(){
            const lang=localStorage.getItem('lang')==='tr'?'en':'tr';
            window._i18n.apply(lang);
            desktop.textContent=lang==='en'?'TR':'EN';
            mobile.textContent=lang==='en'?'TR':'EN';
        }
        desktop.addEventListener('click',e=>{e.preventDefault();syncToggle()});
        mobile.addEventListener('click',e=>{e.preventDefault();syncToggle()});
    }

    /* ═══ INIT ═══ */
    function init(){
        initSlider();
        initMenu();
        initNavScroll();
        if(window._i18n){window._i18n.init();initLangSync();}
        runLoader();
        setTimeout(initScrollAnims,500);
    }

    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
    else init();
})();
