document.addEventListener("DOMContentLoaded", function () {
  const bot = document.getElementById("chatbot");
  const icon = document.getElementById("chatbot-icon");
  const closeBtn = document.getElementById("chatbot-close");
  const input = document.getElementById("chatbot-input");
  const sendBtn = document.getElementById("chatbot-send");
  const msgBox = document.getElementById("chatbot-messages");

  let userClickedBot = false;
  let timeout;

  // Helper to add bot message
  function addBotMessage(text) {
    const botMsg = document.createElement("div");
    botMsg.classList.add("message", "bot");
    botMsg.textContent = text;
    msgBox.appendChild(botMsg);
    msgBox.scrollTop = msgBox.scrollHeight;
  }

  // Greet user when page loads
  bot.style.display = "flex";
  setTimeout(() => {
    addBotMessage("Hi, I'm Rollie 🤖 – your Pangolin assistant! Ask me anything about Pangolin!");
  }, 300); // delay slightly to ensure chatbot is rendered

  // Hide after 6s if no interaction
  timeout = setTimeout(() => {
    if (!userClickedBot) bot.style.display = "none";
  }, 6000);

  // Keep open if clicked
  bot.addEventListener("click", () => {
    userClickedBot = true;
    clearTimeout(timeout);
  });

  // Open bot on icon click
  icon.addEventListener("click", () => {
    bot.style.display = "flex";
    input.focus();
  });

  // Close bot
  closeBtn.addEventListener("click", () => {
    bot.style.display = "none";
    userClickedBot = false;
  });

  // Minimize if clicked outside or scrolled
  document.addEventListener("scroll", () => {
    if (!userClickedBot) bot.style.display = "none";
  });

  document.addEventListener("click", function (e) {
    if (!bot.contains(e.target) && !icon.contains(e.target)) {
      if (!userClickedBot) bot.style.display = "none";
    }
  });

  // Handle sending messages
  function handleSend() {
    const val = input.value.trim();
    if (!val) return;

    const userMsg = document.createElement("div");
    userMsg.classList.add("message", "user");
    userMsg.textContent = val;
    msgBox.appendChild(userMsg);

    getBotReply(val);
    msgBox.scrollTop = msgBox.scrollHeight;
    input.value = "";
  }

  sendBtn.addEventListener("click", handleSend);

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      handleSend();
    }
  });

  // Rollie's training — simple rules for now
  function getBotReply(input) {
    const lower = input.toLowerCase();
    let response = "Hmm... I'm not sure about that. Try rephrasing or ask something else!";

    if (/\b(hi|hello|hey|yo)\b/.test(lower)) {
      response = "Hello! I'm Rollie 🐾 — your assistant here at Pangolin. How can I help today?";
    }
    else if (lower.includes("what is pangolin") || lower.includes("about pangolin")) {
      response = "Pangolin is Bangladesh’s trusted digital payment platform — your solution for hassle-free, on-demand, real-time salary disbursements and financial empowerment.";
    }
    else if (lower.includes("features")) {
      response = "Pangolin offers:\n- Instant salary disbursement\n- On-demand pay\n- Salary advance & loans\n- Company dashboard\n- Smart insights for HR";
    }
    else if (lower.includes("services") || lower.includes("solutions")) {
      response = "We offer salary automation, real-time payment systems, and employee-focused financial tools to help businesses thrive.";
    }
    else if (lower.includes("vision")) {
      response = "Our vision is to build a smart and intelligent financial ecosystem for employers and employees alike.";
    }
    else if (lower.includes("mission")) {
      response = "Our mission is to empower the workforce of Bangladesh through financial inclusion and real-time access to earned wages.";
    }
    else if (lower.includes("ceo") || lower.includes("sukkhokon")) {
      response = "Sukkhokon Ahmed is the CEO of Pangolin — a mechanical engineer and a rising entrepreneur driving digital salary innovation in Bangladesh.";
    }
    else if (lower.includes("founders") || lower.includes("team")) {
      response = "Pangolin is led by 5 dynamic founders, including a Chairman and CEO. More details coming soon!";
    }
    else if (lower.includes("loan") || lower.includes("advance")) {
      response = "Yes! We support salary advances and emergency loans with real-time approval for employees.";
    }
    else if (lower.includes("dashboard")) {
      response = "Our employer dashboard offers real-time payroll insights, employee analytics, and seamless disbursement tools.";
    }
    else if (lower.includes("contact") || lower.includes("support")) {
      response = "You can reach us through our contact form or social media links on the website.";
    }
    else if (lower.includes("rollie")) {
      response = "That’s me! 🤖 I’m Rollie — your chatbot assistant here to answer questions about Pangolin. Ask away!";
    }
    else if (lower.includes("who are you")) {
      response = "I'm Rollie, your friendly bot from Pangolin! Built to help you understand what we do and how we help businesses.";
    }
    else if (lower.includes("club") || lower.includes("scpsc")) {
      response = "Pangolin was created by passionate members of the SCPSC IT Club — a student-led innovation hub.";
    }
    else if (lower.includes("payment") || lower.includes("salary")) {
      response = "Pangolin specializes in on-demand salary disbursement — get paid instantly and manage payroll seamlessly.";
    }

    addBotMessage(response);
  }
});
