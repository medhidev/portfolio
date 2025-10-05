const FORM = document.getElementById('contact-form');
const SERVICE_ID  = 'service_mcj6dyu';
const TEMPLATE_ID = "template_n7s3wvc";


function loadPublicKey() {
    emailjs.init({
        publicKey: "Hj8BY-DYK8Bn5l2o0",
    });
}

function sendForm() {
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, FORM)
        .then(() => {
            console.log('Envoie formulaire !');
        }, (error) => {
            console.log('Erreur lors de l\'envoie /!\\', error);
        });
}

FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    loadPublicKey();
    sendForm();
});

