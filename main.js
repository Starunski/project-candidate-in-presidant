(function () {


    var opts = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer _WprxQEHuNUhg9ymuxGvP9ZLvHv434Dtqokp'
        }
    };
    //запрос на всех пользователей с сервера 
    fetch('https://gorest.co.in/public-api/users', opts).then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            console.log(response.result.length);

            let tableCandidats = document.getElementsByClassName('table')[0]


            // const activeCandidates = []
            // for (let i = 0; i < response.result.length; i++) {
            //     if (response.result[i].status === "active") {
            //         activeCandidates.push(response.result[i])
            //     }
            // }

            // const notActiveCandidates = response.result.filter(x => {
            //     return x.status === 'inactive'
            // });



            for (i = 0; i < response.result.length; i++) {
                const candidate = response.result[i];
                if (candidate.status == "inactive") {
                    continue;
                }

                const candidateRowElement = document.createElement('div');
                candidateRowElement.classList.add('row');
                tableCandidats.append(candidateRowElement)

                // const texts = [
                //     candidate.id,
                //     candidate.first_name,
                //     candidate.last_name,
                //     candidate.gender,
                //     candidate.dob,
                //     candidate.status,
                //     candidate.email
                // ];



                // texts.forEach(x => createCell(candidateRowElement, x));

                createCell(candidateRowElement, candidate.id, 'candidate-id');
                createCell(candidateRowElement, candidate.first_name);
                createCell(candidateRowElement, candidate.last_name);
                createCell(candidateRowElement, candidate.gender);
                createCell(candidateRowElement, candidate.dob);
                createCell(candidateRowElement, candidate.phone);
                createCell(candidateRowElement, candidate.status, 'candidate-status');
                createCell(candidateRowElement, candidate.email);

                // const candidatElementId = document.createElement('div');
                // candidatElementId.classList.add('candidate-id')
                // candidatElementId.innerHTML = response.result[i].id
                // candidateRowElement.append(candidatElementId)



                // const candidatElementFirstName = document.createElement('div');
                // candidatElementFirstName.innerHTML = response.result[i].first_name
                // candidateRowElement.append(candidatElementFirstName)

                // const candidatElementLastName = document.createElement('div');
                // candidatElementLastName.innerHTML = response.result[i].last_name
                // candidateRowElement.append(candidatElementLastName)

                // const candidateElementGender = document.createElement('div');
                // candidateElementGender.innerHTML = response.result[i].gender
                // candidateRowElement.append(candidateElementGender)

                // const candidateElementDob = document.createElement('div');
                // candidateElementDob.innerHTML = response.result[i].dob
                // candidateRowElement.append(candidateElementDob)

                // const candidateElementPhone = document.createElement('div');
                // candidateElementPhone.innerHTML = response.result[i].phone
                // candidateRowElement.append(candidateElementPhone)

                // const candidateElementStatus = document.createElement('div');
                // candidateElementStatus.classList.add('candidate-status')
                // candidateElementStatus.innerHTML = response.result[i].status
                // candidateRowElement.append(candidateElementStatus)

                // const candidateElementEmail = document.createElement('div');
                // candidateElementEmail.innerHTML = response.result[i].email
                // candidateRowElement.append(candidateElementEmail)



            }

            function createCell(rowElem, text, clas) {
                const element = document.createElement('div');
                if (clas) {
                    element.classList.add(clas)
                }
                element.innerHTML = text
                rowElem.append(element)
            }

        });
})()