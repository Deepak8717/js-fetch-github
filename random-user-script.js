const ul = document.getElementById("runners"),
  url = "https://randomuser.me/api/?gender=female&results=10";

const createNode = (element) => {
  return document.createElement(element);
};
const append = (parent, el) => {
  return parent.appendChild(el);
};

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let runners = data.results;
    console.log(runners);
    return runners.map((runner) => {
      let li = createNode("li"),
        img = createNode("img"),
        span = createNode("span");
      img.src = runner.picture.large;
      span.innerHTML = `${runner.name.first} ${runner.name.last} Age: ${runner.dob.age}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    });
  });
