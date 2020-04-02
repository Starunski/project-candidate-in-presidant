(async function(userService, cellComponent) {
  const loaderElem = document.getElementsByClassName("lds-ring")[0];
  const usersPromise = new Promise((resolve, reject) => {
    loaderElem.style.display = "inline-block";
    setTimeout(function() {
      userService.getAll().then(users => {
        resolve(users);
      });
    }, 2000);
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
      console.log("click");
      tableCandidats.style.display = "none";
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
