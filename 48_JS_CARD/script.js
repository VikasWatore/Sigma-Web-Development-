function createCard(title, cName, views, monthOld, duration, thumbnail) {
    let viewStr;

    if (views < 1000000) {
        viewStr = (views / 1000).toFixed(1) + "K";
    } else {
        viewStr = (views / 1000000).toFixed(1) + "M";
    }

    let html = `
        <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="thumbnail">
                <div class="capsule">${duration}</div>
            </div> 
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} · ${viewStr} views · ${monthOld} month${monthOld > 1 ? "s" : ""} ago</p>
            </div>
        </div>
    `;

    document.querySelector(".container").innerHTML += html;
}

createCard(
    "Introduction to CSS | Sigma Web Dev Video 2",
    "CodeWithVikas",
    780000,
    1,
    "25:25",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA"
);
