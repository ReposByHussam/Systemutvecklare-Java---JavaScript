let message = "My JavaScript is loaded";

console.log(message);

document.getElementById("klickButton").addEventListener("click",function()
{
    document.getElementById("title").innerText="Goodbye world...";
});