export interface Question {
  id: number;
  text: { en: string; fr: string };
  options: { en: string[]; fr: string[] };
  correctAnswer: number;
}

export interface QuizTheme {
  id: string;
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  icon: string;
  questions: Question[];
}

export const QUIZ_DATA: QuizTheme[] = [
  {
    id: 'html',
    title: { en: 'HTML', fr: 'HTML' },
    description: { 
      en: 'Structure the web with HTML5 tags and accessibility.', 
      fr: 'Structurez le web avec les balises HTML5 et l\'accessibilité.' 
    },
    icon: 'layout',
    questions: [
      {
        id: 1,
        text: { en: 'What does HTML stand for?', fr: 'Que signifie HTML ?' },
        options: {
          en: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyperlink and Text Management Language', 'Home Tool Markup Language'],
          fr: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyperlink and Text Management Language', 'Home Tool Markup Language']
        },
        correctAnswer: 0
      },
      {
        id: 2,
        text: { en: 'Which tag is used for the largest heading?', fr: 'Quelle balise est utilisée pour le plus grand titre ?' },
        options: {
          en: ['<heading>', '<h6>', '<h1>', '<head>'],
          fr: ['<heading>', '<h6>', '<h1>', '<head>']
        },
        correctAnswer: 2
      },
      {
        id: 3,
        text: { en: 'What is the correct HTML element for inserting a line break?', fr: 'Quel est l\'élément HTML correct pour insérer un saut de ligne ?' },
        options: {
          en: ['<break>', '<lb>', '<br>', '<hr>'],
          fr: ['<break>', '<lb>', '<br>', '<hr>']
        },
        correctAnswer: 2
      },
      {
        id: 4,
        text: { en: 'Which character is used to indicate an end tag?', fr: 'Quel caractère est utilisé pour indiquer une balise de fin ?' },
        options: { en: ['<', '*', '/', '^'], fr: ['<', '*', '/', '^'] },
        correctAnswer: 2
      },
      {
        id: 5,
        text: { en: 'How can you make a numbered list?', fr: 'Comment faire une liste numérotée ?' },
        options: { en: ['<list>', '<ul>', '<ol>', '<dl>'], fr: ['<list>', '<ul>', '<ol>', '<dl>'] },
        correctAnswer: 2
      },
      {
        id: 6,
        text: { en: 'Which HTML attribute specifies an alternate text for an image?', fr: 'Quel attribut HTML spécifie un texte alternatif pour une image ?' },
        options: { en: ['alt', 'title', 'src', 'longdesc'], fr: ['alt', 'title', 'src', 'longdesc'] },
        correctAnswer: 0
      },
      {
        id: 7,
        text: { en: 'Which HTML element is used to specify a footer for a document or section?', fr: 'Quel élément HTML est utilisé pour spécifier un pied de page pour un document ou une section ?' },
        options: { en: ['<footer>', '<bottom>', '<section>', '<aside>'], fr: ['<footer>', '<bottom>', '<section>', '<aside>'] },
        correctAnswer: 0
      },
      {
        id: 8,
        text: { en: 'In HTML, which attribute is used to specify that an input field must be filled out?', fr: 'En HTML, quel attribut est utilisé pour spécifier qu\'un champ de saisie doit être rempli ?' },
        options: { en: ['required', 'placeholder', 'validate', 'formvalidate'], fr: ['required', 'placeholder', 'validate', 'formvalidate'] },
        correctAnswer: 0
      },
      {
        id: 9,
        text: { en: 'Which HTML element defines navigation links?', fr: 'Quel élément HTML définit les liens de navigation ?' },
        options: { en: ['<nav>', '<navigation>', '<links>', '<menu>'], fr: ['<nav>', '<navigation>', '<links>', '<menu>'] },
        correctAnswer: 0
      },
      {
        id: 11,
        text: { en: 'Which HTML element is used to define emphasized text?', fr: 'Quel élément HTML est utilisé pour définir un texte accentué ?' },
        options: { en: ['<em>', '<i>', '<italic>', '<strong>'], fr: ['<em>', '<i>', '<italic>', '<strong>'] },
        correctAnswer: 0
      },
      {
        id: 12,
        text: { en: 'Which HTML element is used to define a multi-line input field?', fr: 'Quel élément HTML est utilisé pour définir un champ de saisie multi-ligne ?' },
        options: { en: ['<textarea>', '<input type="text">', '<input type="textbox">', '<text>'], fr: ['<textarea>', '<input type="text">', '<input type="textbox">', '<text>'] },
        correctAnswer: 0
      },
      {
        id: 13,
        text: { en: 'What is the correct HTML for referring to an external style sheet?', fr: 'Quel est le code HTML correct pour faire référence à une feuille de style externe ?' },
        options: { en: ['<link rel="stylesheet" type="text/css" href="mystyle.css">', '<style src="mystyle.css">', '<stylesheet>mystyle.css</stylesheet>', '<link src="mystyle.css">'], fr: ['<link rel="stylesheet" type="text/css" href="mystyle.css">', '<style src="mystyle.css">', '<stylesheet>mystyle.css</stylesheet>', '<link src="mystyle.css">'] },
        correctAnswer: 0
      },
      {
        id: 14,
        text: { en: 'Which HTML element is used to specify a header for a document or section?', fr: 'Quel élément HTML est utilisé pour spécifier un en-tête pour un document ou une section ?' },
        options: { en: ['<header>', '<head>', '<top>', '<section>'], fr: ['<header>', '<head>', '<top>', '<section>'] },
        correctAnswer: 0
      },
      {
        id: 15,
        text: { en: 'Which HTML element defines a title for a document?', fr: 'Quel élément HTML définit un titre pour un document ?' },
        options: { en: ['<title>', '<head>', '<meta>', '<header>'], fr: ['<title>', '<head>', '<meta>', '<header>'] },
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'css',
    title: { en: 'CSS', fr: 'CSS' },
    description: { 
      en: 'Style your pages with Flexbox, Grid, and modern CSS.', 
      fr: 'Stylez vos pages avec Flexbox, Grid et le CSS moderne.' 
    },
    icon: 'palette',
    questions: [
      {
        id: 1,
        text: { en: 'What does CSS stand for?', fr: 'Que signifie CSS ?' },
        options: {
          en: ['Colorful Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets'],
          fr: ['Feuilles de style colorées', 'Feuilles de style en cascade', 'Feuilles de style créatives', 'Feuilles de style informatiques']
        },
        correctAnswer: 1
      },
      {
        id: 2,
        text: { en: 'Which property is used to change the background color?', fr: 'Quelle propriété est utilisée pour changer la couleur de fond ?' },
        options: {
          en: ['color', 'bgcolor', 'background-color', 'fill'],
          fr: ['color', 'bgcolor', 'background-color', 'fill']
        },
        correctAnswer: 2
      },
      {
        id: 3,
        text: { en: 'How do you select an element with id "demo"?', fr: 'Comment sélectionnez-vous un élément avec l\'id "demo" ?' },
        options: {
          en: ['.demo', '#demo', 'demo', '*demo'],
          fr: ['.demo', '#demo', 'demo', '*demo']
        },
        correctAnswer: 1
      },
      {
        id: 4,
        text: { en: 'Which CSS property controls the text size?', fr: 'Quelle propriété CSS contrôle la taille du texte ?' },
        options: { en: ['font-style', 'text-size', 'font-size', 'text-style'], fr: ['font-style', 'text-size', 'font-size', 'text-style'] },
        correctAnswer: 2
      },
      {
        id: 5,
        text: { en: 'How do you make the text bold?', fr: 'Comment mettre le texte en gras ?' },
        options: { en: ['font:bold', 'style:bold', 'font-weight:bold', 'text-decoration:bold'], fr: ['font:bold', 'style:bold', 'font-weight:bold', 'text-decoration:bold'] },
        correctAnswer: 2
      },
      {
        id: 6,
        text: { en: 'Which property is used to change the left margin of an element?', fr: 'Quelle propriété est utilisée pour changer la marge gauche d\'un élément ?' },
        options: { en: ['margin-left', 'padding-left', 'indent', 'left-margin'], fr: ['margin-left', 'padding-left', 'indent', 'left-margin'] },
        correctAnswer: 0
      },
      {
        id: 7,
        text: { en: 'How do you make a list that lists its items with squares?', fr: 'Comment faire une liste dont les éléments sont des carrés ?' },
        options: { en: ['list-style-type: square', 'list-type: square', 'list: square', 'type: square'], fr: ['list-style-type: square', 'list-type: square', 'list: square', 'type: square'] },
        correctAnswer: 0
      },
      {
        id: 8,
        text: { en: 'Which property is used to change the font of an element?', fr: 'Quelle propriété est utilisée pour changer la police d\'un élément ?' },
        options: { en: ['font-family', 'font-style', 'font-weight', 'font-variant'], fr: ['font-family', 'font-style', 'font-weight', 'font-variant'] },
        correctAnswer: 0
      },
      {
        id: 9,
        text: { en: 'How do you display a border like this: Top=10px, Bottom=5px, Left=20px, Right=1px?', fr: 'Comment afficher une bordure comme ceci : Haut=10px, Bas=5px, Gauche=20px, Droite=1px ?' },
        options: { en: ['border-width: 10px 1px 5px 20px', 'border-width: 10px 20px 5px 1px', 'border-width: 10px 5px 20px 1px', 'border-width: 5px 20px 10px 1px'], fr: ['border-width: 10px 1px 5px 20px', 'border-width: 10px 20px 5px 1px', 'border-width: 10px 5px 20px 1px', 'border-width: 5px 20px 10px 1px'] },
        correctAnswer: 0
      },
      {
        id: 11,
        text: { en: 'How do you make each word in a text start with a capital letter?', fr: 'Comment faire en sorte que chaque mot d\'un texte commence par une majuscule ?' },
        options: { en: ['text-transform: capitalize', 'text-transform: uppercase', 'text-style: capitalize', 'transform: capitalize'], fr: ['text-transform: capitalize', 'text-transform: uppercase', 'text-style: capitalize', 'transform: capitalize'] },
        correctAnswer: 0
      },
      {
        id: 12,
        text: { en: 'Which property is used to change the shadow of a text?', fr: 'Quelle propriété est utilisée pour changer l\'ombre d\'un texte ?' },
        options: { en: ['text-shadow', 'shadow', 'font-shadow', 'text-outline'], fr: ['text-shadow', 'shadow', 'font-shadow', 'text-outline'] },
        correctAnswer: 0
      },
      {
        id: 13,
        text: { en: 'How do you center a block element horizontally using margin?', fr: 'Comment centrer horizontalement un élément de bloc en utilisant la marge ?' },
        options: { en: ['margin: 0 auto;', 'margin: center;', 'text-align: center;', 'align: center;'], fr: ['margin: 0 auto;', 'margin: center;', 'text-align: center;', 'align: center;'] },
        correctAnswer: 0
      },
      {
        id: 14,
        text: { en: 'Which property is used to specify the transparency of an element?', fr: 'Quelle propriété est utilisée pour spécifier la transparence d\'un élément ?' },
        options: { en: ['opacity', 'filter: alpha', 'visibility', 'clear'], fr: ['opacity', 'filter: alpha', 'visibility', 'clear'] },
        correctAnswer: 0
      },
      {
        id: 15,
        text: { en: 'How do you add a transition effect with a duration of 2 seconds?', fr: 'Comment ajouter un effet de transition d\'une durée de 2 secondes ?' },
        options: { en: ['transition: duration 2s;', 'transition: 2s;', 'effect: 2s;', 'duration: 2s;'], fr: ['transition: duration 2s;', 'transition: 2s;', 'effect: 2s;', 'duration: 2s;'] },
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'javascript',
    title: { en: 'JavaScript', fr: 'JavaScript' },
    description: { 
      en: 'Bring interactivity to life with JS logic and DOM manipulation.', 
      fr: 'Donnez vie à l\'interactivité avec la logique JS et la manipulation du DOM.' 
    },
    icon: 'code',
    questions: [
      {
        id: 1,
        text: { en: 'Which company developed JavaScript?', fr: 'Quelle entreprise a développé JavaScript ?' },
        options: {
          en: ['Microsoft', 'Netscape', 'Google', 'Apple'],
          fr: ['Microsoft', 'Netscape', 'Google', 'Apple']
        },
        correctAnswer: 1
      },
      {
        id: 2,
        text: { en: 'How do you create a function in JavaScript?', fr: 'Comment créez-vous une fonction en JavaScript ?' },
        options: {
          en: ['function:myFunction()', 'function myFunction()', 'function = myFunction()', 'def myFunction()'],
          fr: ['function:myFunction()', 'function myFunction()', 'function = myFunction()', 'def myFunction()']
        },
        correctAnswer: 1
      },
      {
        id: 3,
        text: { en: 'How do you write an IF statement in JavaScript?', fr: 'Comment écrivez-vous une instruction IF en JavaScript ?' },
        options: {
          en: ['if i = 5', 'if i == 5 then', 'if (i == 5)', 'if i = 5 then'],
          fr: ['if i = 5', 'if i == 5 then', 'if (i == 5)', 'if i = 5 then']
        },
        correctAnswer: 2
      },
      {
        id: 4,
        text: { en: 'How does a WHILE loop start?', fr: 'Comment commence une boucle WHILE ?' },
        options: { en: ['while i = 1 to 10', 'while (i <= 10)', 'while (i <= 10; i++)', 'do while i = 10'], fr: ['while i = 1 to 10', 'while (i <= 10)', 'while (i <= 10; i++)', 'do while i = 10'] },
        correctAnswer: 1
      },
      {
        id: 5,
        text: { en: 'How can you add a comment in JavaScript?', fr: 'Comment ajouter un commentaire en JavaScript ?' },
        options: { en: ['\'This is a comment', '<!--This is a comment-->', '//This is a comment', '*This is a comment*'], fr: ['\'This is a comment', '<!--This is a comment-->', '//This is a comment', '*This is a comment*'] },
        correctAnswer: 2
      },
      {
        id: 6,
        text: { en: 'How do you round the number 7.25 to the nearest integer?', fr: 'Comment arrondir le nombre 7.25 à l\'entier le plus proche ?' },
        options: { en: ['Math.round(7.25)', 'round(7.25)', 'Math.rnd(7.25)', 'rnd(7.25)'], fr: ['Math.round(7.25)', 'round(7.25)', 'Math.rnd(7.25)', 'rnd(7.25)'] },
        correctAnswer: 0
      },
      {
        id: 7,
        text: { en: 'How do you find the number with the highest value of x and y?', fr: 'Comment trouver le nombre avec la valeur la plus élevée de x et y ?' },
        options: { en: ['Math.max(x, y)', 'ceil(x, y)', 'Math.ceil(x, y)', 'top(x, y)'], fr: ['Math.max(x, y)', 'ceil(x, y)', 'Math.ceil(x, y)', 'top(x, y)'] },
        correctAnswer: 0
      },
      {
        id: 8,
        text: { en: 'JavaScript is the same as Java.', fr: 'JavaScript est la même chose que Java.' },
        options: { en: ['False', 'True'], fr: ['Faux', 'Vrai'] },
        correctAnswer: 0
      },
      {
        id: 9,
        text: { en: 'Which event occurs when the user clicks on an HTML element?', fr: 'Quel événement se produit lorsque l\'utilisateur clique sur un élément HTML ?' },
        options: { en: ['onclick', 'onmouseclick', 'onchange', 'onmouseover'], fr: ['onclick', 'onmouseclick', 'onchange', 'onmouseover'] },
        correctAnswer: 0
      },
      {
        id: 11,
        text: { en: 'Which operator is used to assign a value to a variable?', fr: 'Quel opérateur est utilisé pour assigner une valeur à une variable ?' },
        options: { en: ['=', '*', 'x', '-'], fr: ['=', '*', 'x', '-'] },
        correctAnswer: 0
      },
      {
        id: 12,
        text: { en: 'What will the following code return: Boolean(10 > 9)?', fr: 'Que retournera le code suivant : Boolean(10 > 9) ?' },
        options: { en: ['true', 'false', 'NaN', 'undefined'], fr: ['vrai', 'faux', 'NaN', 'undefined'] },
        correctAnswer: 0
      },
      {
        id: 13,
        text: { en: 'Which keyword is used to declare a constant variable in JavaScript?', fr: 'Quel mot-clé est utilisé pour déclarer une variable constante en JavaScript ?' },
        options: { en: ['const', 'let', 'var', 'constant'], fr: ['const', 'let', 'var', 'constant'] },
        correctAnswer: 0
      },
      {
        id: 14,
        text: { en: 'How do you find the minimum of x and y in JavaScript?', fr: 'Comment trouver le minimum de x et y en JavaScript ?' },
        options: { en: ['Math.min(x, y)', 'min(x, y)', 'Math.low(x, y)', 'low(x, y)'], fr: ['Math.min(x, y)', 'min(x, y)', 'Math.low(x, y)', 'low(x, y)'] },
        correctAnswer: 0
      },
      {
        id: 15,
        text: { en: 'Which function is used to parse a string to an integer?', fr: 'Quelle fonction est utilisée pour analyser une chaîne en un entier ?' },
        options: { en: ['parseInt()', 'Number()', 'Integer()', 'toInteger()'], fr: ['parseInt()', 'Number()', 'Integer()', 'toInteger()'] },
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'python',
    title: { en: 'Python', fr: 'Python' },
    description: { 
      en: 'Master the most versatile programming language.', 
      fr: 'Maîtrisez le langage de programmation le plus polyvalent.' 
    },
    icon: 'terminal',
    questions: [
      {
        id: 1,
        text: { en: 'What is the correct file extension for Python files?', fr: 'Quelle est l\'extension de fichier correcte pour les fichiers Python ?' },
        options: { en: ['.py', '.pyt', '.pt', '.pyth'], fr: ['.py', '.pyt', '.pt', '.pyth'] },
        correctAnswer: 0
      },
      {
        id: 2,
        text: { en: 'How do you create a variable with the numeric value 5?', fr: 'Comment créer une variable avec la valeur numérique 5 ?' },
        options: { en: ['x = int(5)', 'x = 5', 'Both are correct', 'None of the above'], fr: ['x = int(5)', 'x = 5', 'Les deux sont corrects', 'Aucun des deux'] },
        correctAnswer: 2
      },
      {
        id: 3,
        text: { en: 'What is the correct way to create a function in Python?', fr: 'Quelle est la manière correcte de créer une fonction en Python ?' },
        options: { en: ['def myFunction():', 'create myFunction():', 'function myFunction():', 'def:myFunction()'], fr: ['def myFunction():', 'create myFunction():', 'function myFunction():', 'def:myFunction()'] },
        correctAnswer: 0
      },
      {
        id: 4,
        text: { en: 'Which method can be used to remove any whitespace from both the beginning and the end of a string?', fr: 'Quelle méthode peut être utilisée pour supprimer les espaces au début et à la fin d\'une chaîne ?' },
        options: { en: ['strip()', 'trim()', 'len()', 'ptrim()'], fr: ['strip()', 'trim()', 'len()', 'ptrim()'] },
        correctAnswer: 0
      },
      {
        id: 5,
        text: { en: 'How do you start a FOR loop in Python?', fr: 'Comment commence une boucle FOR en Python ?' },
        options: { en: ['for x in y:', 'for each x in y:', 'for x > y:', 'for (x in y)'], fr: ['for x in y:', 'for each x in y:', 'for x > y:', 'for (x in y)'] },
        correctAnswer: 0
      },
      {
        id: 6,
        text: { en: 'Which of the following is a Python tuple?', fr: 'Lequel des éléments suivants est un tuple Python ?' },
        options: { en: ['(1, 2)', '[1, 2]', '{1, 2}', '<1, 2>'], fr: ['(1, 2)', '[1, 2]', '{1, 2}', '<1, 2>'] },
        correctAnswer: 0
      },
      {
        id: 7,
        text: { en: 'How do you insert comments in Python code?', fr: 'Comment insérer des commentaires dans le code Python ?' },
        options: { en: ['//', '#', '/* */', '--'], fr: ['//', '#', '/* */', '--'] },
        correctAnswer: 1
      },
      {
        id: 8,
        text: { en: 'Which operator is used for exponentiation?', fr: 'Quel opérateur est utilisé pour l\'exponentiation ?' },
        options: { en: ['^', '**', '*', 'exp'], fr: ['^', '**', '*', 'exp'] },
        correctAnswer: 1
      },
      {
        id: 9,
        text: { en: 'What is the output of print(2 ** 3)?', fr: 'Quel est le résultat de print(2 ** 3) ?' },
        options: { en: ['6', '8', '9', '5'], fr: ['6', '8', '9', '5'] },
        correctAnswer: 1
      },
      {
        id: 10,
        text: { en: 'Which function is used to get the length of a list?', fr: 'Quelle fonction est utilisée pour obtenir la longueur d\'une liste ?' },
        options: { en: ['size()', 'length()', 'len()', 'count()'], fr: ['size()', 'length()', 'len()', 'count()'] },
        correctAnswer: 2
      },
      {
        id: 11,
        text: { en: 'How do you create a dictionary in Python?', fr: 'Comment créer un dictionnaire en Python ?' },
        options: { en: ['{}', '[]', '()', '<>'], fr: ['{}', '[]', '()', '<>'] },
        correctAnswer: 0
      },
      {
        id: 12,
        text: { en: 'Which keyword is used to handle exceptions in Python?', fr: 'Quel mot-clé est utilisé pour gérer les exceptions en Python ?' },
        options: { en: ['try', 'catch', 'except', 'finally'], fr: ['try', 'catch', 'except', 'finally'] },
        correctAnswer: 2
      },
      {
        id: 13,
        text: { en: 'What is the correct way to import a module?', fr: 'Quelle est la manière correcte d\'importer un module ?' },
        options: { en: ['import module', 'include module', 'require module', 'use module'], fr: ['import module', 'include module', 'require module', 'use module'] },
        correctAnswer: 0
      },
      {
        id: 14,
        text: { en: 'Which of these is NOT a valid variable name?', fr: 'Lequel de ces noms de variable n\'est PAS valide ?' },
        options: { en: ['my_var', '_myvar', '2myvar', 'myVar'], fr: ['my_var', '_myvar', '2myvar', 'myVar'] },
        correctAnswer: 2
      },
      {
        id: 16,
        text: { en: 'What is the outcome of "hello" + " world"?', fr: 'Quel est le résultat de "hello" + " world" ?' },
        options: { en: ['"hello world"', '"helloworld"', '"hello + world"', 'Error'], fr: ['"hello world"', '"helloworld"', '"hello + world"', 'Erreur'] },
        correctAnswer: 0
      },
      {
        id: 17,
        text: { en: 'Which data type is used to store multiple items in a single variable?', fr: 'Quel type de données est utilisé pour stocker plusieurs éléments dans une seule variable ?' },
        options: { en: ['List', 'Array', 'Tuple', 'Set'], fr: ['Liste', 'Tableau', 'Tuple', 'Ensemble'] },
        correctAnswer: 0
      },
      {
        id: 18,
        text: { en: 'How do you access the first element of a list named "fruits"?', fr: 'Comment accéder au premier élément d\'une liste nommée "fruits" ?' },
        options: { en: ['fruits[0]', 'fruits[1]', 'fruits.first()', 'fruits{0}'], fr: ['fruits[0]', 'fruits[1]', 'fruits.first()', 'fruits{0}'] },
        correctAnswer: 0
      },
      {
        id: 19,
        text: { en: 'What is the correct way to check if 5 is greater than 2?', fr: 'Quelle est la manière correcte de vérifier si 5 est supérieur à 2 ?' },
        options: { en: ['if 5 > 2:', 'if 5 > 2 then:', 'if (5 > 2)', '5 > 2'], fr: ['if 5 > 2:', 'if 5 > 2 then:', 'if (5 > 2)', '5 > 2'] },
        correctAnswer: 0
      },
      {
        id: 20,
        text: { en: 'Which method is used to add an item to the end of a list?', fr: 'Quelle méthode est utilisée pour ajouter un élément à la fin d\'une liste ?' },
        options: { en: ['append()', 'add()', 'insert()', 'push()'], fr: ['append()', 'add()', 'insert()', 'push()'] },
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'java',
    title: { en: 'Java', fr: 'Java' },
    description: { 
      en: 'Learn the foundation of enterprise-level applications.', 
      fr: 'Apprenez les bases des applications de niveau entreprise.' 
    },
    icon: 'coffee',
    questions: [
      {
        id: 1,
        text: { en: 'What is the correct syntax to output "Hello World" in Java?', fr: 'Quelle est la syntaxe correcte pour afficher "Hello World" en Java ?' },
        options: { en: ['System.out.println("Hello World");', 'Console.WriteLine("Hello World");', 'print("Hello World");', 'echo("Hello World");'], fr: ['System.out.println("Hello World");', 'Console.WriteLine("Hello World");', 'print("Hello World");', 'echo("Hello World");'] },
        correctAnswer: 0
      },
      {
        id: 2,
        text: { en: 'Java is short for "JavaScript".', fr: 'Java est l\'abréviation de "JavaScript".' },
        options: { en: ['True', 'False'], fr: ['Vrai', 'Faux'] },
        correctAnswer: 1
      },
      {
        id: 3,
        text: { en: 'How do you insert COMMENTS in Java code?', fr: 'Comment insérer des COMMENTAIRES dans le code Java ?' },
        options: { en: ['// This is a comment', '# This is a comment', '/* This is a comment', '-- This is a comment'], fr: ['// Ceci est un commentaire', '# Ceci est un commentaire', '/* Ceci est un commentaire', '-- Ceci est un commentaire'] },
        correctAnswer: 0
      },
      {
        id: 4,
        text: { en: 'Which data type is used to create a variable that should store text?', fr: 'Quel type de données est utilisé pour créer une variable qui doit stocker du texte ?' },
        options: { en: ['String', 'txt', 'myString', 'string'], fr: ['String', 'txt', 'myString', 'string'] },
        correctAnswer: 0
      },
      {
        id: 5,
        text: { en: 'How do you create a variable with the floating point number 2.8?', fr: 'Comment créer une variable avec le nombre à virgule flottante 2.8 ?' },
        options: { en: ['float x = 2.8f;', 'int x = 2.8;', 'byte x = 2.8', 'x = 2.8'], fr: ['float x = 2.8f;', 'int x = 2.8;', 'byte x = 2.8', 'x = 2.8'] },
        correctAnswer: 0
      },
      {
        id: 6,
        text: { en: 'Which method is the entry point for a Java program?', fr: 'Quelle méthode est le point d\'entrée d\'un programme Java ?' },
        options: { en: ['start()', 'main()', 'init()', 'run()'], fr: ['start()', 'main()', 'init()', 'run()'] },
        correctAnswer: 1
      },
      {
        id: 7,
        text: { en: 'Which keyword is used to create a class in Java?', fr: 'Quel mot-clé est utilisé pour créer une classe en Java ?' },
        options: { en: ['class', 'struct', 'new', 'object'], fr: ['class', 'struct', 'new', 'object'] },
        correctAnswer: 0
      },
      {
        id: 8,
        text: { en: 'How do you create an object in Java?', fr: 'Comment créer un objet en Java ?' },
        options: { en: ['ClassName obj = new ClassName();', 'ClassName obj = ClassName();', 'obj = new ClassName();', 'new obj = ClassName();'], fr: ['ClassName obj = new ClassName();', 'ClassName obj = ClassName();', 'obj = new ClassName();', 'new obj = ClassName();'] },
        correctAnswer: 0
      },
      {
        id: 9,
        text: { en: 'Which operator can be used to compare two values?', fr: 'Quel opérateur peut être utilisé pour comparer deux valeurs ?' },
        options: { en: ['=', '==', '<>', '!='], fr: ['=', '==', '<>', '!='] },
        correctAnswer: 1
      },
      {
        id: 10,
        text: { en: 'To declare an array in Java, define the variable type with:', fr: 'Pour déclarer un tableau en Java, définissez le type de variable avec :' },
        options: { en: ['()', '[]', '{}', '<>'], fr: ['()', '[]', '{}', '<>'] },
        correctAnswer: 1
      },
      {
        id: 11,
        text: { en: 'Which keyword is used to inherit a class?', fr: 'Quel mot-clé est utilisé pour hériter d\'une classe ?' },
        options: { en: ['implements', 'extends', 'inherits', 'using'], fr: ['implements', 'extends', 'inherits', 'using'] },
        correctAnswer: 1
      },
      {
        id: 12,
        text: { en: 'Which access modifier makes a member accessible only within its own class?', fr: 'Quel modificateur d\'accès rend un membre accessible uniquement au sein de sa propre classe ?' },
        options: { en: ['public', 'private', 'protected', 'default'], fr: ['public', 'private', 'protected', 'default'] },
        correctAnswer: 1
      },
      {
        id: 13,
        text: { en: 'What is the default value of a boolean variable?', fr: 'Quelle est la valeur par défaut d\'une variable booléenne ?' },
        options: { en: ['true', 'false', 'null', '0'], fr: ['true', 'false', 'null', '0'] },
        correctAnswer: 1
      },
      {
        id: 14,
        text: { en: 'Which package is imported by default in every Java program?', fr: 'Quel package est importé par défaut dans chaque programme Java ?' },
        options: { en: ['java.util', 'java.io', 'java.lang', 'java.net'], fr: ['java.util', 'java.io', 'java.lang', 'java.net'] },
        correctAnswer: 2
      },
      {
        id: 16,
        text: { en: 'Which keyword is used to stop a loop?', fr: 'Quel mot-clé est utilisé pour arrêter une boucle ?' },
        options: { en: ['break', 'stop', 'exit', 'return'], fr: ['break', 'stop', 'exit', 'return'] },
        correctAnswer: 0
      },
      {
        id: 17,
        text: { en: 'What is the purpose of the "final" keyword in Java?', fr: 'Quel est le but du mot-clé "final" en Java ?' },
        options: { en: ['To make a variable immutable', 'To end the program', 'To declare a method private', 'To optimize code'], fr: ['Pour rendre une variable immuable', 'Pour terminer le programme', 'Pour déclarer une méthode privée', 'Pour optimiser le code'] },
        correctAnswer: 0
      },
      {
        id: 18,
        text: { en: 'Which collection class allows you to store unique elements in Java?', fr: 'Quelle classe de collection vous permet de stocker des éléments uniques en Java ?' },
        options: { en: ['HashSet', 'ArrayList', 'HashMap', 'LinkedList'], fr: ['HashSet', 'ArrayList', 'HashMap', 'LinkedList'] },
        correctAnswer: 0
      },
      {
        id: 19,
        text: { en: 'How do you start a thread in Java?', fr: 'Comment démarrer un thread en Java ?' },
        options: { en: ['thread.start()', 'thread.run()', 'thread.init()', 'thread.execute()'], fr: ['thread.start()', 'thread.run()', 'thread.init()', 'thread.execute()'] },
        correctAnswer: 0
      },
      {
        id: 20,
        text: { en: 'Which of these is NOT a Java primitive type?', fr: 'Lequel de ceux-ci n\'est PAS un type primitif Java ?' },
        options: { en: ['String', 'int', 'boolean', 'char'], fr: ['String', 'int', 'boolean', 'char'] },
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'mysql',
    title: { en: 'MySQL', fr: 'MySQL' },
    description: { 
      en: 'Manage data with the world\'s most popular open-source database.', 
      fr: 'Gérez les données avec la base de données open-source la plus populaire.' 
    },
    icon: 'database',
    questions: [
      {
        id: 1,
        text: { en: 'What does SQL stand for?', fr: 'Que signifie SQL ?' },
        options: { en: ['Structured Query Language', 'Strong Question Language', 'Structured Question Language', 'Simple Query Language'], fr: ['Structured Query Language', 'Strong Question Language', 'Structured Question Language', 'Simple Query Language'] },
        correctAnswer: 0
      },
      {
        id: 2,
        text: { en: 'Which SQL statement is used to extract data from a database?', fr: 'Quelle instruction SQL est utilisée pour extraire des données d\'une base de données ?' },
        options: { en: ['SELECT', 'EXTRACT', 'GET', 'OPEN'], fr: ['SELECT', 'EXTRACT', 'GET', 'OPEN'] },
        correctAnswer: 0
      },
      {
        id: 3,
        text: { en: 'Which SQL statement is used to update data in a database?', fr: 'Quelle instruction SQL est utilisée pour mettre à jour des données dans une base de données ?' },
        options: { en: ['UPDATE', 'SAVE', 'MODIFY', 'CHANGE'], fr: ['UPDATE', 'SAVE', 'MODIFY', 'CHANGE'] },
        correctAnswer: 0
      },
      {
        id: 4,
        text: { en: 'Which SQL statement is used to delete data from a database?', fr: 'Quelle instruction SQL est utilisée pour supprimer des données d\'une base de données ?' },
        options: { en: ['DELETE', 'REMOVE', 'COLLAPSE', 'DROP'], fr: ['DELETE', 'REMOVE', 'COLLAPSE', 'DROP'] },
        correctAnswer: 0
      },
      {
        id: 5,
        text: { en: 'Which SQL statement is used to insert new data in a database?', fr: 'Quelle instruction SQL est utilisée pour insérer de nouvelles données dans une base de données ?' },
        options: { en: ['INSERT INTO', 'ADD NEW', 'INSERT NEW', 'ADD RECORD'], fr: ['INSERT INTO', 'ADD NEW', 'INSERT NEW', 'ADD RECORD'] },
        correctAnswer: 0
      },
      {
        id: 6,
        text: { en: 'Which SQL keyword is used to sort the result-set?', fr: 'Quel mot-clé SQL est utilisé pour trier le jeu de résultats ?' },
        options: { en: ['SORT BY', 'ORDER BY', 'GROUP BY', 'ARRANGE BY'], fr: ['SORT BY', 'ORDER BY', 'GROUP BY', 'ARRANGE BY'] },
        correctAnswer: 1
      },
      {
        id: 7,
        text: { en: 'How can you return all records from "Persons" sorted descending by "FirstName"?', fr: 'Comment retourner tous les enregistrements de "Persons" triés par ordre décroissant sur "FirstName" ?' },
        options: { en: ['SELECT * FROM Persons ORDER BY FirstName DESC', 'SELECT * FROM Persons SORT BY FirstName DESC', 'SELECT * FROM Persons ORDER FirstName DESC', 'SELECT * FROM Persons SORT FirstName DESC'], fr: ['SELECT * FROM Persons ORDER BY FirstName DESC', 'SELECT * FROM Persons SORT BY FirstName DESC', 'SELECT * FROM Persons ORDER FirstName DESC', 'SELECT * FROM Persons SORT FirstName DESC'] },
        correctAnswer: 0
      },
      {
        id: 8,
        text: { en: 'Which SQL statement is used to create a table in a database?', fr: 'Quelle instruction SQL est utilisée pour créer une table dans une base de données ?' },
        options: { en: ['CREATE TABLE', 'NEW TABLE', 'BUILD TABLE', 'MAKE TABLE'], fr: ['CREATE TABLE', 'NEW TABLE', 'BUILD TABLE', 'MAKE TABLE'] },
        correctAnswer: 0
      },
      {
        id: 9,
        text: { en: 'How do you select all columns from a table named "Persons"?', fr: 'Comment sélectionner toutes les colonnes d\'une table nommée "Persons" ?' },
        options: { en: ['SELECT * FROM Persons', 'SELECT Persons', 'SELECT [all] FROM Persons', 'SELECT *.Persons'], fr: ['SELECT * FROM Persons', 'SELECT Persons', 'SELECT [all] FROM Persons', 'SELECT *.Persons'] },
        correctAnswer: 0
      },
      {
        id: 10,
        text: { en: 'Which SQL keyword is used to return only different values?', fr: 'Quel mot-clé SQL est utilisé pour ne retourner que des valeurs différentes ?' },
        options: { en: ['DIFFERENT', 'UNIQUE', 'DISTINCT', 'ONLY'], fr: ['DIFFERENT', 'UNIQUE', 'DISTINCT', 'ONLY'] },
        correctAnswer: 2
      },
      {
        id: 11,
        text: { en: 'Which operator is used to select values within a range?', fr: 'Quel opérateur est utilisé pour sélectionner des valeurs dans une plage ?' },
        options: { en: ['BETWEEN', 'RANGE', 'WITHIN', 'FROM'], fr: ['BETWEEN', 'RANGE', 'WITHIN', 'FROM'] },
        correctAnswer: 0
      },
      {
        id: 12,
        text: { en: 'The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.', fr: 'L\'opérateur LIKE est utilisé dans une clause WHERE pour rechercher un modèle spécifié dans une colonne.' },
        options: { en: ['True', 'False'], fr: ['Vrai', 'Faux'] },
        correctAnswer: 0
      },
      {
        id: 13,
        text: { en: 'Which SQL statement is used to delete a table?', fr: 'Quelle instruction SQL est utilisée pour supprimer une table ?' },
        options: { en: ['DELETE TABLE', 'DROP TABLE', 'REMOVE TABLE', 'TRUNCATE TABLE'], fr: ['DELETE TABLE', 'DROP TABLE', 'REMOVE TABLE', 'TRUNCATE TABLE'] },
        correctAnswer: 1
      },
      {
        id: 14,
        text: { en: 'What is the most common type of join?', fr: 'Quel est le type de jointure le plus courant ?' },
        options: { en: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN'], fr: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN'] },
        correctAnswer: 0
      },
      {
        id: 16,
        text: { en: 'Which SQL keyword is used to change the structure of a table?', fr: 'Quel mot-clé SQL est utilisé pour changer la structure d\'une table ?' },
        options: { en: ['ALTER', 'CHANGE', 'MODIFY', 'UPDATE'], fr: ['ALTER', 'CHANGE', 'MODIFY', 'UPDATE'] },
        correctAnswer: 0
      },
      {
        id: 17,
        text: { en: 'How do you select all records from a table where "FirstName" is "Peter"?', fr: 'Comment sélectionner tous les enregistrements d\'une table où "FirstName" est "Peter" ?' },
        options: { en: ['SELECT * FROM Persons WHERE FirstName=\'Peter\'', 'SELECT * FROM Persons WHERE FirstName<>\'Peter\'', 'SELECT [all] FROM Persons WHERE FirstName LIKE \'Peter\'', 'SELECT * FROM Persons WHERE FirstName LIKE \'%Peter%\''], fr: ['SELECT * FROM Persons WHERE FirstName=\'Peter\'', 'SELECT * FROM Persons WHERE FirstName<>\'Peter\'', 'SELECT [all] FROM Persons WHERE FirstName LIKE \'Peter\'', 'SELECT * FROM Persons WHERE FirstName LIKE \'%Peter%\''] },
        correctAnswer: 0
      },
      {
        id: 18,
        text: { en: 'Which join returns all rows from the left table, even if there are no matches in the right table?', fr: 'Quelle jointure retourne toutes les lignes de la table de gauche, même s\'il n\'y a pas de correspondance dans la table de droite ?' },
        options: { en: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL JOIN'], fr: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL JOIN'] },
        correctAnswer: 0
      },
      {
        id: 19,
        text: { en: 'How do you add a new column named "Salary" of type INT to a table named "Employees"?', fr: 'Comment ajouter une nouvelle colonne nommée "Salary" de type INT à une table nommée "Employees" ?' },
        options: { en: ['ALTER TABLE Employees ADD Salary INT', 'UPDATE TABLE Employees ADD Salary INT', 'MODIFY TABLE Employees ADD Salary INT', 'ALTER TABLE Employees INSERT Salary INT'], fr: ['ALTER TABLE Employees ADD Salary INT', 'UPDATE TABLE Employees ADD Salary INT', 'MODIFY TABLE Employees ADD Salary INT', 'ALTER TABLE Employees INSERT Salary INT'] },
        correctAnswer: 0
      },
      {
        id: 20,
        text: { en: 'What is a Primary Key in MySQL?', fr: 'Qu\'est-ce qu\'une clé primaire en MySQL ?' },
        options: { en: ['A unique identifier for each record', 'A secondary index', 'A foreign reference', 'A column with null values'], fr: ['Un identifiant unique pour chaque enregistrement', 'Un index secondaire', 'Une référence étrangère', 'Une colonne avec des valeurs nulles'] },
        correctAnswer: 0
      }
    ]
  }
];
