async function fetchapi() {
    try{
        let res = await fetch(
            "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple"
          );
          let resjs = await res.json();
          let result = resjs.results;
          if (result) {
            for (let i = 0; i < result.length; i++) {
              setTimeout(() => {
                let ques = `${result[i].question}`;
                let opt = "";
                result[i].incorrect_answers.forEach((op) => {
                  opt += `<div class="int">
                            <input type="radio"  name="options">
                            <label for="${op}">${op}</label>
                        </div>`;
                });
                opt += `<div class="int">
                        <input type="radio"  name="options">
                        <label for="${result[i].correct_answer}">${result[i].correct_answer}</label>
                        </div>`;
                document.querySelector(".ext1").innerHTML = ques;
                document.querySelector(".ext2").innerHTML = opt;
                if(i==result.length-1)
                    {
                        setTimeout(()=> window.location.href = 'ques.html',1000);
                    }
              }, i*1000);
            }
          }

    }
    catch(error){
        console.error(error);
        setTimeout(fetchapi,500);
    }
}
fetchapi();