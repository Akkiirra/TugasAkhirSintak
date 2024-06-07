// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'
      window.addEventListener('beforeunload', function (e) {
          var confirmationMessage = 'Yakin ingin keluar dari halaman ini?';

          // Standar untuk memunculkan dialog konfirmasi di beberapa browser
          (e || window.event).returnValue = confirmationMessage;
          return confirmationMessage;
      });

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


