var rect = document.querySelector(".rectangle");

rect.addEventListener("mousemove", function(details){

    console.log(details.layerX);

    if(details.layerX < rect.clientWidth/2 ){

        var greenColor = gsap.utils.mapRange(0,rect.clientWidth/2,
                    255, 0, details.layerX);

        gsap.to(".rectangle", {
            backgroundColor: `rgb(0, ${greenColor}, 0)`,
            ease: Power4,
        });

    }else if(details.layerX > rect.clientWidth/2){
        var blueColor = gsap.utils.mapRange(rect.clientWidth/2, rect.clientWidth,
                    0, 255, details.layerX);

        gsap.to(".rectangle", {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        });
    }

});

rect.addEventListener("mouseleave", function(details){

    gsap.to(".rectangle", {
        backgroundColor: "white",
        ease: Power1,
    });
});