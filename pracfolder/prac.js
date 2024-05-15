async function surya() {
    try {
        let res = await fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple");
        let resjs = await res.json();
        let result = resjs.results;

        for (let i = 0; i < result.length; i++) {
            setTimeout(() => {
                let quest = result[i].question;
                let optionsHTML = "";

                result[i].incorrect_answers.forEach(option => {
                    optionsHTML += `<div class="int">
                                        <input type="radio"  name="options">
                                        <label for="${option}">${option}</label>
                                    </div>`;
                });

                optionsHTML += `<div class="int">
                                    <input type="radio"  name="options">
                                    <label for="${result[i].correct_answer}">${result[i].correct_answer}</label>
                                </div>`;

                document.querySelector('.ext1').innerHTML = `<h3>${quest}</h3>`;
                document.querySelector('.ext2').innerHTML = optionsHTML;
            }, i * 3000);
        }
    } catch {
        setTimeout(surya, 500);
    }
}

surya();

