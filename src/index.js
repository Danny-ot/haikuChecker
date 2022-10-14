import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {haikuChecker} from "./haiku";
import './css/styles.css';

$("document").ready(()=>{
    $("#haiku-form").submit((event) => {
        event.preventDefault();
        const poem = $("#poem-input").val();
        console.log(poem)
        const [line1 , line2 , line3] = poem.split("\n");
        const resultDiv = $("#result");
        const result = haikuChecker(poem);
        $("#poem-input").val("");
        if(result === true) {
            resultDiv.html(`<p class = "h3">Your Poem Is An Haiku Poem<p>
                            <p class = "h5">${line1}<br><br>${line2}<br><br>${line3}</p>`);
        }
        else
        {
            resultDiv.html(`<p class = "h3 text-danger">Your Poem Is not an Haiku Poem<p>`);
        }
    })
});