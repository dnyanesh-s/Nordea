# Nordea
Test automation assignment

This folder contains one suite: AmazonSuite
which has one test case: Nikon search test case

Test Steps: 
1. Go to amazon.in
2. Search with text Nikon
3. Sort result from price high to low
4. Select second folder from the search list
5. Verify "Nikon D3X" text in product description list

The test case uses...
variables from fixture/variables.json
keywords from support/command.js

Command line to execute the test case from the project directory:

node_modules\.bin\cypress run --browser chrome --headed

This command will execute the test case with Chrome headed browser

Or the test case can be executed using test runner usinf following command: 

node_modules\.bin\cypress open