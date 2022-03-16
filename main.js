const main = () => {
  Array.from(document.querySelectorAll(".headNavigation .leftBlock a")).forEach(
    (link) => {
      link.onclick = (event) => {
        event.preventDefault();
        const selector = link.getAttribute("href");
        scrollToElement(document.querySelector(selector));
      };
    }
  );

  const form = document.querySelector("form.registrationBlock");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputs = Array.from(form.querySelectorAll("input"));
    const payload = Object.fromEntries(
      inputs.map((input) => [input.name, input.value])
    );

    console.log(payload);

    fetch("https://postman-echo.com/post", {
      method: "POST",
      body: JSON.stringify(payload),
    }).then((res) => {
      console.log(res);
    });
  });
};

document.addEventListener("DOMContentLoaded", main);

const scrollToElement = (el, offset = 80) =>
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.pageYOffset - offset,
    behavior: "smooth",
  });
