// =======================================
// SecurePayBot - Verification Code Copier
// =======================================

// Verification Codes
const verificationCodes = {
  code1: "1JvjNBXp33izLE5rGTBtmSarxBghHo4UvT",

  code2: "1NLWMr3Bni9t8iwTBQL9PtT5q8iBtMstkL",

  code3: `lno1zrxq8pjw7qjlm68mtp7e3yvxee4y5xrgjhhyf2fxhlphpckrvevh50u0qdh388xy4tl5lgd2nxe3m4dh6wpzwdj9xcvuj38dcv08nzawzc4ywqsz72rxk2h65cwm6xuktxa7rpr93d8mcse9a9k246a59ewc8n4flrvqqvmdsc5hqw2y3qns9ayl5tmneud53grdu2qjsdxs6n9q64gjg8xmrcmz7ep2u5nam7akqq56useuvtyudm6cqg7n9863ruf8xppuhjn36yv6e80fa5tymuxrva6ujqvgnvptcjlawqqsydy24y8c3llz2d52d9y08lq2uq`
};

// Copy function
async function copyCode(codeKey, button) {
  try {
    await navigator.clipboard.writeText(verificationCodes[codeKey]);

    const originalText = button.innerHTML;

    button.innerHTML = "✓ Copied!";
    button.style.backgroundColor = "#16a34a";
    button.disabled = true;

    setTimeout(() => {
      button.innerHTML = originalText;
      button.style.backgroundColor = "";
      button.disabled = false;
    }, 2000);

  } catch (error) {
    alert("Unable to copy. Please try again.");
    console.error(error);
  }
}

// Optional: Display current year automatically
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});