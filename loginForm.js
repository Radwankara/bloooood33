document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const messageBox = document.getElementById("loginMessage");
  
    if (email !== "" && password !== "") {
      messageBox.style.display = "block";
      messageBox.textContent = "✅ تم تسجيل الدخول بنجاح!";
    } else {
      messageBox.style.display = "block";
      messageBox.textContent = "❌ الرجاء إدخال البريد وكلمة المرور.";
    }
  });
  












  
  function toggleMenuBlood() {
    const navLinks = document.querySelector('.nav-links-blood');
    navLinks.classList.toggle('active');
  }

