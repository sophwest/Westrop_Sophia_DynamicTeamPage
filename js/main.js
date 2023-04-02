console.log("Javascript is working! Hooray!")

let sophiaPic = document.querySelector("#sophia-pic"),
    astaPic = document.querySelector("#asta-pic");

    let memberInfo = [
        {
            name : "Sophia", 
            nickname : "Nickname: Soph",
            age : "Age: 25",
            bday : "Birthday: April 9",
            hobby : "Hobbies: Figure collecting, art",
            blurb : "One day at a time..."
        },

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

    hideText();
}

function hideText() {
    let targetDiv = document.querySelector("#instructions");
    targetDiv.classList.add('hidden');
}

function changeBGPink() {
    var infoBox = document.querySelector("#member-info");
    infoBox.style.backgroundColor="#ff7e8f";
}

function changeBGTeal() {
    var infoBox = document.querySelector("#member-info");
    infoBox.style.backgroundColor="#75d1b2";
}

sophiaPic.addEventListener("click", getMemberInfo);
astaPic.addEventListener("click", getMemberInfo);
sophiaPic.addEventListener("click", changeBGTeal);
astaPic.addEventListener("click", changeBGPink);
