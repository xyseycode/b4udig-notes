const plans = document.getElementById("plans");
const format = document.getElementById("format");


format.addEventListener('click', formatPlans);

function formatPlans() {
    const messy_plans = plans.value.split('\n');
    // console.log(messy_plans);
    const messy_plans_length = messy_plans.length
    const var_8 = messy_plans_length / 8
    let index_sequence = 0;
    let index_name_plan = 1;
    let formatted_plans = "Cover sheet\n";
    for (let step = 1; step <= var_8; step++) {
        formatted_plans += messy_plans[index_sequence].trim() + ' ' + messy_plans[index_name_plan] + '\n';
        index_sequence += 8;
        index_name_plan += 8;
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
}
