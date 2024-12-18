const sections = document.querySelectorAll("section.ef4d7c63");

const categories = [
    "backend",
    "front-end",
    "framework",
    "documentation",
    "testing",
    "mobile",
    "cli",
];

for (const section of sections) {
    const tagList = section.querySelector("ul.cf33f2b9");

    const newLi = document.createElement("li");
    const newLink = document.createElement("a");
    const category = categories[Math.floor(Math.random() * 7)];

    newLink.href = `/search?q=keywords:${category}`;
    newLink.className =
        "B9ac8b0 f6 link fl dib O bg-green hover-bg-black-10 br2 hover-black ph2 pv1";
    newLink.textContent = category;

    newLi.append(newLink);

    if (tagList) {
        tagList.appendChild(newLi);
    } else {
        const ul = document.createElement("ul");
        ul.className = "cf33f2b9 w-90 list mh0 mv2 pa0 truncate";
        ul.appendChild(newLi);

        section.querySelector("div._0d2164ff").appendChild(ul);
    }
}

// const newLi = document.createElement("li");
// const newLink = document.createElement("a");

// newLi.appendChild(newLink);

// ulElement.appendChild(newLi);
