 // Function to display array contents
        function displayArrayContents() {
            const arrayContents = myArray.join(', ');
            document.getElementById("arrayContents").innerHTML = `Array Contents: [${arrayContents}]`;
        }

        // Function to display array length
        function showArrayLength() {
            const length = myArray.length;
            document.getElementById("arrayLength").innerHTML = `Array Length: ${length}`;
            displayArrayContents();
        }

        // Function to display array as a string
        function showArrayToString() {
            const arrayString = myArray.toString();
            document.getElementById("arrayToString").innerHTML = `Array as String: ${arrayString}`;
            displayArrayContents();
        }

        // Function to pop the last element from the array
        function showArrayPop() {
            const poppedElement = myArray.pop();
            document.getElementById("arrayPop").innerHTML = `Popped Element: ${poppedElement}`;
            displayArrayContents();
        }

        // Initially display array contents
        displayArrayContents();