const element1 = document.querySelector("#principal");
const element2 = document.querySelector("#rate");
const element3 = document.querySelector("#time");
const element4 = document.querySelector("#rate_val");
const result = document.querySelector("#result");
const button = document.querySelector("button");

element2.addEventListener("change", () => {
  element4.innerHTML = `${element2.value}%`;
});

const compute = () => {
  const principal = element1.value;
  const rate = element2.value;
  const years = element3.value;

  const interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);
  var amount = principal + interest;

  result.innerHTML = `<p>If you deposit <span>${principal}</span>,
at an interest rate of <span>${rate}%</span>.
You will receive an amount of <span>${interest}</span>,
in the year <span>${year}</span></p>`;
};
