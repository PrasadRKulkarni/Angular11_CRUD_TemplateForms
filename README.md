Angular 11 commands
----------------------------------------------------------------------
Create new project with no spec files
ng new myProject --skip-tests

Generate  component without test files and no seperate folder for component
ng g c employees/createEmployee --skipt-tests --flat true

Dry run
ng g c employees/createEmployee --skipt-tests --flat true -d

Install bootstrap with save to save it in dependencies. We can install dev dep using -d command.
npm install bootstrap@3 --save

In Index.html use the css links:
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

In angular.json file use the below code:
"styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            
"scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.min.js",
              "node_modules/popper/index.js",
              "node_modules/jquery/dist/jquery.min.js"
            ]
          },