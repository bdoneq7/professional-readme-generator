// Arrow Function with Template Literals and Carriage Returns
module.exports = templateData => {
    // destructure projects and about data from templateData based on their property key names
    // this will create three variables based on data in templateData
    const {title, description, installation, usage, license, contribution, test, questions, github, email} = templateData;
    
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Professional Readme Generator</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">Professional Readme Generator</h1>
                <nav class="flex-row">
                    
                </nav> 
            </div>
        </header>
        <main class="container my-5">
           ${title}
           ${description}
           ${installation}
           ${usage}
           ${license}
           ${contribution}
           ${test}
           ${questions}
           ${github}
           ${email}
        </main>

        <footer class="container text-center py-3">
            
        </footer>
    </body>
    </html>
    `;
};

