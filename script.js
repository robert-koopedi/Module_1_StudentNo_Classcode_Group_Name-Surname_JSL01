function validateSyntax() {
    let input = document.getElementById('petInput').value;// Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        const pattern = /^pet_\d{4}[A-za-z]+$/;   //Regular expression to match pattern

        if(pattern.test(input)) {
            result = 'Valid Syntax';   // If the input matches the pattern, it is considered valid
        }else{
            result = 'Invalid Syntax';   // If the input  does not matches the pattern, it is considered invalid
        }
        
            document.getElementById('result').innerText = result;
}



