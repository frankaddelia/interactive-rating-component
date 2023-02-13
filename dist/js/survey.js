let surveyButtons;
let submitButton;
let survey;
let rating;
let currentRating = 0;

window.addEventListener('load', (e) => {
    surveyButtons = document.querySelectorAll('li > .circle');
    submitButton = document.getElementById('submit');
    survey = document.getElementById("survey");
    rating = document.getElementById("rating");
    
    surveyButtons.forEach(button => {
        button.addEventListener('click', () => {
            addSelected(button);
            selected();
        });
    });

    submitButton.addEventListener('click', () => {
        submit();
    });
});

const addSelected = (currentButton) => {
    surveyButtons.forEach(button => button.classList.remove('active'));
    currentButton.classList.add('active');
}

const selected = () => {
    const selected = document.querySelector('li > .circle.active');
    currentRating = parseInt(selected.innerHTML);
}

const showSurvey = () => {
    survey.classList.remove('hidden');
    rating.classList.add('hidden');
}

const showRating = () => {
    survey.classList.add('hidden');
    rating.classList.remove('hidden');
}

const submit = () => {

    console.log('currentRating', currentRating);
    if (currentRating > 0) {
        showRating();
        
        const ratingValue = document.getElementById("ratingValue");
        ratingValue.innerHTML = currentRating;

        setTimeout(() => {
            showSurvey();
        }, 5000);

        return;
    }

    showSurvey();
}
