<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Age Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background: white;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            text-align: center;
        }
        button {
            padding: 10px 20px;
            background: #007BFF;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            font-size: 16px;
        }
        button:hover {
            background: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Age Verification</h2>
        <button onclick="enterAge()">Enter Age</button>
    </div>
    <script>
        function enterAge() {
            let age = prompt("Please enter your age:");
            if (age !== null && age !== "" && !isNaN(age)) {
                age = parseInt(age);
                if (age >= 25) {
                    alert("You are 25 years old or older.");
                } else {
                    alert("You are younger than 25.");
                }
            } else {
                alert("Invalid input. Please enter a valid number.");
            }
        }
    </script>
</body>
</html>
