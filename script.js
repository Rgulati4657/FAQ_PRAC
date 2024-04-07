const faqItems = document.querySelectorAll('.occordian');

faqItems.forEach(faqItem => {
  const question = faqItem.querySelector('.question');
  const answer = faqItem.querySelector('.answer');
  const toggleIcon = question.querySelector('.image'); // Add icon reference

  // Hide answers initially
  answer.classList.remove('show');

  question.addEventListener('click', () => {
    answer.classList.toggle('show');

    // Toggle icon
    if (answer.classList.contains('show')) {
      toggleIcon.src = 'assets/images/icon-minus.svg'; // Change to minus icon
    } else {
      toggleIcon.src = 'assets/images/icon-plus.svg'; // Change back to plus icon
    }
  });
});
/*
let items = document.querySelectorAll(".occoridan");
items.forEach(itr =>{
    const ques = document.querySelector(".question");
    const ans = document.querySelector(".answer");
    const toggleicon = document.querySelector(".image");
});
if(ans.classList.contains("appear")){
    toggleicon.src="./assets/images/minus.svg";
};

*/