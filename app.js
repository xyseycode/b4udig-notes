const plans = document.getElementById("plans");
const format = document.getElementById("format");


format.addEventListener('click', formatPlans);

function formatPlans() {
  const messy_plans = plans.value.split('\n');
  // console.log(messy_plans);
  const messy_plans_length = messy_plans.length
  let var_8 = messy_plans_length / 8
  let index_sequence = 0;
  let index_name_plan = 1;
  let step_index = 8;
  let formatted_plans = "Cover sheet\n";
  const checkbox = document.getElementById("switch");

  if (checkbox.checked) {
    console.log("dsfasdf");
    var_8 = messy_plans_length / 10;
    step_index = 10;
  }
  for (let step = 1; step <= var_8; step++) {
    formatted_plans += messy_plans[index_sequence].trim() + ' ' + messy_plans[index_name_plan] + '\n';
    index_sequence += step_index;
    index_name_plan += step_index;
  }
  const ta = document.createElement('textarea');
  ta.value = formatted_plans;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);

  Toastify({
    text: "Na-mekus-mekus na insan!\nPaste mo na sa tracker mo!",
    duration: 4000,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();
  checkbox.checked = false;
}
