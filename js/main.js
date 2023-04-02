console.log("Javascript is working! Hooray!")

let sophiaPic = document.querySelector("#sophia-pic"),
    astaPic = document.querySelector("#asta-pic");

    let memberInfo = [
        {
            name : "Asta", 
            nickname : "Nickname: Armpit girl",
            age : "Age: ??",
            bday : "Birthday: August 24",
            hobby : "Hobbies: Being cute :)",
            blurb : "*speaks in tongues*"
        }
    ]

function getMemberInfo() {
    let teamMember = this.dataset.member;

    document.querySelector(".name").textContent = memberInfo [teamMember].name;
    document.querySelector(".nickname").textContent = memberInfo [teamMember].nickname;
    document.querySelector(".age").textContent = memberInfo [teamMember].age;
    document.querySelector(".birthday").textContent = memberInfo [teamMember].bday;
    document.querySelector(".hobby").textContent = memberInfo [teamMember].hobby;
    document.querySelector(".blurb").textContent = memberInfo [teamMember].blurb;
}

sophiaPic.addEventListener("click", getMemberInfo);
astaPic.addEventListener("click", getMemberInfo);
    
