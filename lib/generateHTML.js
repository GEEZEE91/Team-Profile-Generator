const generateHTML = (EmployeeArray) => {
    let newCard = '';
    let employeeCard = [];
    for (let i = 1; i < EmployeeArray.length; i++) {
      switch (EmployeeArray[i].getRole()) {

        case 'Manager':
            newCard += `
    <!-- Manager card -->
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h3 class="card-title text-center" id="name">${EmployeeArray[i].name}</h3>
        <h5 id="role" class="text-center"><i class="fas fa-user-ninja"></i> ${EmployeeArray[i].getRole()}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" id="id">ID: ${EmployeeArray[i].id}</li>
        <li class="list-group-item" id="email"><a href="mailto:${EmployeeArray[i].email}">Email: ${EmployeeArray[i].email}</a></li>
        <li class="list-group-item" id="officeNumber">Office Number: ${EmployeeArray[i].officeNumber}</li>
      </ul>
    </div>`;
    
            employeeCard.push(newCard)
            break;

        case 'Engineer':
          newCard += `
  <!-- Engineer card -->
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h3 class="card-title text-center" id="name">${EmployeeArray[i].name}</h3>
      <h5 id="role" class="text-center"><i class="fas fa-user-ninja"></i> ${EmployeeArray[i].getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" id="id">ID: ${EmployeeArray[i].id}</li>
      <li class="list-group-item" id="email"><a href="mailto:${EmployeeArray[i].email}">Email: ${EmployeeArray[i].email}</a></li>
      <li class="list-group-item" id="officeNumber"><a href="https://github.com/${EmployeeArray[i].github}" target="_blank">Github: ${EmployeeArray[i].github}</a></li>
    </ul>
  </div>`;
  
          employeeCard.push(newCard)
          break;
  
        case 'Intern':
          newCard += `   
  <!-- Intern card -->
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h3 class="card-title text-center" id="name">${EmployeeArray[i].name}</h3>
      <h5 id="role" class="text-center"><i class="fas fa-user-graduate"></i> ${EmployeeArray[i].getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" id="id">ID: ${EmployeeArray[i].id}</li>
      <li class="list-group-item" id="email"><a href="mailto:${EmployeeArray[i].email}">Email: ${EmployeeArray[i].email}</a></li>
      <li class="list-group-item" id="school">School: ${EmployeeArray[i].school}</li>
    </ul>
  </div>`;
  
          employeeCard.push(newCard)
          break;
      }
    };
  
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Project Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>


    <body>
      <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                <h1 class="text-center text-white">Project Team</h1>
            </div>
        </div>
    </div>
  

<!-- card container -->
      <div class="container" id="card-container">
        <div class="row">
          <div class="card-area col-12 d-flex justify-content-center mt-5">
 
 
  ${newCard}
          </div>
        </div>
      </div>
    
    
      </body>
    </html>`;
  }
  
  
  module.exports = generateHTML;