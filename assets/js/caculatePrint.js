const prices = {
    A0: 10000,
    A1: 8000,
    A2: 6000,
    A3: 4000,
    A4: 2000,
    A5: 1000,
    A6: 500,
  };
  
  const handleChange = (e) => {
    const form = e.target.form;
    const paperSize = form.elements["lg"].value;
    const quantity = parseInt(form.elements["slt"].value, 10) || 0;
    const sides = parseInt(form.elements["smi"].value, 10) || 1;
    const pricePerUnit = prices[paperSize] || 0;
    const totalPrice = quantity * pricePerUnit * sides;
  
    form.elements["tttt"].value = totalPrice.toLocaleString("vi-VN");
  };
  
  const contactForm = document.getElementById("print-form");
  contactForm.addEventListener("change", handleChange);


  const gotoMinhBeo = ()=>{
    window.location.href = 'https://nminh.id.vn/';
  }