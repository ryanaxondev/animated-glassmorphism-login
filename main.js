function toggleForm(formId) {
  
    document.querySelectorAll(".form-box")
      .forEach((f) => f.classList.remove("is-active"));

    const targetForm = document.getElementById(formId);
    if (targetForm) {
      targetForm.classList.add("is-active");
    }
  }