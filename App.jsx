<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <title>Wedding Invitation</title>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel" data-type="module">
        import WeddingInvitation from './App.jsx';
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<WeddingInvitation />);
    </script>
</body>
</html>