const x = document.getElementsByClassName("title");
for (let i = 0; i < x.length; i++)
{ 
    const y = x[i].innerText;
    if(y.length > 123)
    {
        x[i].innerText = y.substring(0,120) + "...";
    }
}

function play() 
{
    var x = document.getElementById("play");
    if (x.innerHTML.trim() === '<span class="material-symbols-rounded" style="font-size: 30px;">play_arrow</span>') 
    {
        x.innerHTML = '<span class="material-symbols-rounded" style="font-size: 30px;">pause</span>';
    } 
    else 
    {
        x.innerHTML = '<span class="material-symbols-rounded" style="font-size: 30px;">play_arrow</span>';
    }
}

document.getElementById("playerX").addEventListener("click", () => {
    window.location.href = "#playerX1"; 
    document.getElementById("playerX").classList.add("active");
    document.getElementById("lyricsX").classList.remove("active");
    document.getElementById("queueX").classList.remove("active");
});

document.getElementById("queueX").addEventListener("click", () => {
    window.location.href = "#queueX1"; 
    document.getElementById("playerX").classList.remove("active");
    document.getElementById("lyricsX").classList.remove("active");
    document.getElementById("queueX").classList.add("active");
});

document.getElementById("lyricsX").addEventListener("click", () => {
    window.location.href = "#lyricsX1"; 
    document.getElementById("playerX").classList.remove("active");
    document.getElementById("lyricsX").classList.add("active");
    document.getElementById("queueX").classList.remove("active");
});
