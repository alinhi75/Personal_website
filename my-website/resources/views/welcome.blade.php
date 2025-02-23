<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Portfolio</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])  <!-- Ensure Tailwind is loaded -->
</head>
<body class="bg-gray-900 text-white">

    <div id="app">
        <home></home>
        <navbar id="navbar"></navbar>
        <about id="about"></about>
        <education id="education"></education>
        <skills id="skills"></skills>
        <projects id="projects"></projects>
        <research id="research"></research>
        <contact id="contact"></contact>
        <footer-section></footer-section>
    </div>

</body>
</html>
