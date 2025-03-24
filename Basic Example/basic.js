document.addEventListener("DOMContentLoaded", () => {
    const fee = document.getElementById("fee");
    const count = document.getElementById("count");
    const discount = document.getElementById("discount");
    const result = document.getElementById("result");

    const valid = (number) => {
        return /^[0-9]*\.?[0-9]+$/.test(number);
    }

    const evaluate = () => {
        const feeValue = parseFloat(fee.value);
        const countValue = parseFloat(count.value);
        const discountValue = parseFloat(discount.value);

        if(!valid(fee.value) || !valid(count.value) || !valid(discount.value) || feeValue < 0 || countValue < 0 || discountValue < 0){
            result.textContent = `Invalid Formula`;
            return;
        }

        const resultValue = feeValue * countValue - discountValue;
        result.textContent = resultValue.toFixed(2);
    }

    fee.addEventListener("input", evaluate);
    count.addEventListener("input", evaluate);
    discount.addEventListener("input", evaluate);
});