var typed = new Typed(".text",{
    strings:["Frontend Developer", "Python Developer", "Django Framework","Web Developer"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});

function emailSend(){

    Email.send({
    Host : "s1.maildns.net",
    Username : "nazirkhan@gmail.com",
    Password : "B354E2AA6F2C36ED9ECE7A38433B8F916E2C",
    To : 'nazirk161@gmail.com',
    From : "nazirkhan@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
})
}