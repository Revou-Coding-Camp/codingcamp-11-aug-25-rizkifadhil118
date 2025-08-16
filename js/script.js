document.addEventListener("DOMContentLoaded", () => {
    let userName = prompt("Please enter your name:");
    document.getElementById("welcome-text").textContent = `Hi ${userName || ""}, Welcome To My Portfolio`;

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const birthdate = document.getElementById("birthdate").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const message = document.getElementById("message-text").value.trim();

        if (!name) return alert("Name is required");
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) return alert("Invalid email format");
        if (!phone || !/^\d{10,15}$/.test(phone)) return alert("Phone number must be 10-15 digits");
        if (!birthdate) return alert("Date of birth is required");
        if (!gender) return alert("Please select a gender");
        if (!message) return alert("Message cannot be empty");

        document.getElementById("current-time").textContent = `Current time: ${new Date().toString()}`;
        document.getElementById("output-data").innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Date of Birth:</strong> ${birthdate}</p>
            <p><strong>Gender:</strong> ${gender.value}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;

        form.reset();
    });
});
