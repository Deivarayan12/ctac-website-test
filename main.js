function sendWhatsAppMessage(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const url = `https://wa.me/+919842182314?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
}

function changeHeading(index) {
    let heading = document.getElementById('dynamic-content');
    if(index === 1) {
        heading.textContent = 'Service Site Visit';
    }
    else if(index === 2) {
        heading.textContent = 'Used Dyeing Machines Trading Consulting';
    }
    else if(index === 3) {
        heading.textContent = 'Used Dyeing Machines Trading Consulting';
    }
    else if(index === 4) {
        heading.textContent = 'Used Dyeing Machines Trading Consulting';
    }else{
        console.log('Invalid index');
    }
}

function sendServiceDetails(event){
    const name = document.getElementById('name1').value;
    const phone = document.getElementById('phone1').value;
    const time = document.getElementById('time').value;
    const whatsappMessage = `Name: ${name}\nPhone: ${phone}\nTime: ${time}`;
    const url = `https://wa.me/+919842182314?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
    document.getElementById('name1').value="";
    document.getElementById('phone1').value="";
    document.getElementById('time').value="";
}