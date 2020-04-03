(async function(userService, cellComponent) {
  const loaderElem = document.getElementsByClassName("lds-ring")[0];
  const usersPromise = new Promise((resolve, reject) => {
    loaderElem.style.display = "inline-block";
    setTimeout(function() {
      userService.getAll().then(users => {
        resolve(users);
      });
    }, 1000);
  });

  const users = await usersPromise;
  loaderElem.style.display = "none";
  console.log(users);

  let tableCandidats = document.getElementsByClassName("table")[0];

  for (i = 0; i < users.length; i++) {
    const candidate = users[i];
    if (candidate.status == "inactive") {
      continue;
    }

    const candidateRowElement = document.createElement("div");
    candidateRowElement.addEventListener("click", function() {
      const candidateId = candidate.id;
      console.log("click");
      tableCandidats.style.display = "none";

      var changeCandidateFormElem = document.createElement("FORM");
      changeCandidateFormElem.setAttribute("id", "myForm");
      document.body.appendChild(changeCandidateFormElem);

      var firstNameInputElem = document.createElement("INPUT");
      firstNameInputElem.setAttribute("type", "text");
      firstNameInputElem.setAttribute("value", candidate.first_name);
      changeCandidateFormElem.appendChild(firstNameInputElem);

      var lastNameInputElem = document.createElement("INPUT");
      lastNameInputElem.setAttribute("type", "text");
      lastNameInputElem.setAttribute("value", candidate.last_name);
      changeCandidateFormElem.appendChild(lastNameInputElem);

      var emailInputElem = document.createElement("INPUT");
      emailInputElem.setAttribute("type", "text");
      emailInputElem.setAttribute("value", candidate.email);
      changeCandidateFormElem.appendChild(emailInputElem);

      var dobInputElem = document.createElement("INPUT");
      dobInputElem.setAttribute("type", "text");
      dobInputElem.setAttribute("value", candidate.dob);
      changeCandidateFormElem.appendChild(dobInputElem);

      var changeCandidateButton = document.createElement("INPUT");
      changeCandidateButton.setAttribute("type", "submit");
      changeCandidateButton.setAttribute("value", "CHANGE");
      changeCandidateFormElem.appendChild(changeCandidateButton);

      changeCandidateButton.addEventListener("click", function(event) {
        event.preventDefault();

        const data = {
          first_name: firstNameInputElem.value,
          last_name: lastNameInputElem.value,
          email: emailInputElem.value,
          dob: dobInputElem.value
        };

        function hideErrors() {
          debugger;
          if (errorMessages.length) {
            for (var i = 0; i < errorMessages.length; i++) {
              const elem = errorMessages[i];
              console.log(elem);
              elem.style.display = "none";
            }
          }
        }

        const errorMessages = document.getElementsByClassName("error-message");
        userService.updateUser(candidateId, data).then(AAAA => {
          if (Array.isArray(AAAA) && AAAA[0].message) {
            debugger;
            console.log("HAVE ERRORS");
            hideErrors();

            AAAA.forEach(item => {
              debugger;
              const errorMessageElem = document.createElement("span");
              errorMessageElem.style.color = "red";
              errorMessageElem.classList.add("error-message");
              errorMessageElem.innerHTML = item.message;
              changeCandidateFormElem.appendChild(errorMessageElem);
            });
            /// ploho
          } else {
            debugger;
            console.log("DONT HAVE ERRORS");
            hideErrors();
            // horosho
          }
        });
      });
    });

    candidateRowElement.classList.add("row");
    tableCandidats.append(candidateRowElement);

    cellComponent.create(candidateRowElement, candidate.id, "candidate-id");
    cellComponent.create(candidateRowElement, candidate.first_name);
    cellComponent.create(candidateRowElement, candidate.last_name);
    cellComponent.create(candidateRowElement, candidate.gender);
    cellComponent.create(candidateRowElement, candidate.dob);
    cellComponent.create(candidateRowElement, candidate.phone);
    cellComponent.create(
      candidateRowElement,
      candidate.status,
      "candidate-status"
    );
    cellComponent.create(candidateRowElement, candidate.email);
  }

  let helloCandidats = document.getElementsByClassName("row");
})(userService, cellComponent);
