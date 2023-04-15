function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ux06eHJwZ/model.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if (error)
    {
        console.log(error);
    }
    else 
    {
        console.log(results)

        rnr = Math.floor(Math.random() * 255) + 1;
        rng = Math.floor(Math.random() * 255) + 1;
        rnb = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear... ' + results[0].label;
        document.getElementById("result_accuracy").innerHTML = 'My accuracy is ' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + rnr + "," + rng + "," + rnb + ")";
        document.getElementById("result_accuracy").style.color = "rgb(" + rnr + "," + rng + "," + rnb + ")";
        
        img = document.getElementById('ear');

        if (results[0].label == "Background Noise")
        {
            img.src = "ear.png"
        }
        else if (results[0].label == "meow")
        {
            img.src = 'cat.gif';
        }
        else if (results[0].label == "moo")
        {
            img.src = 'cow.gif';
        }
        else if (results[0].label == "roar")
        {
            img.src = 'roar.gif';
        }
        else
        {
            img.src = 'dog.gif';
        }
    }
}