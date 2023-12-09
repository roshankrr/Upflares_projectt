var crsr = document.querySelector("#cursor")
var crs = document.querySelector("#curso")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x - 10 + "px"
    crsr.style.top = dets.y - 10 + "px"
    crs.style.left = dets.x - 150 + "px"
    crs.style.top = dets.y - 150 + "px"
});

var n = document.querySelectorAll("#nav h4")
n.forEach(function (valu) {
    valu.addEventListener("mouseenter", function () {
        crsr.style.scale="3"
        crsr.style.border="1px solid #fff"
        crsr.style.transition=".3s"
        crsr.style.backgroundColor="transparent"
        

    })
    valu.addEventListener("mouseleave", function () {
        crsr.style.scale="1"
        crsr.style.border="0px solid #a2d517"
        crsr.style.transition="0s"
        crsr.style.backgroundColor="#a2d517"

    })
})