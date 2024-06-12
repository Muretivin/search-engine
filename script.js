// Sample data (in a real scenario, this would come from a database or API)
const content = [
    { title: "Home Page", content: "Welcome to our website." },
    { title: "About Us", content: "Learn about our company and mission." },
    { title: "Products", content: "Explore our wide range of products." },
    { title: "Contact", content: "Get in touch with us for inquiries." }
];

function search() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    const results = content.filter(item => 
        item.title.toLowerCase().includes(searchTerm) || 
        item.content.toLowerCase().includes(searchTerm)
    );

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
    } else {
        results.forEach(item => {
            const resultItem = document.createElement("div");
            resultItem.classList.add("result-item");
            resultItem.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.content}</p>
            `;
            resultsContainer.appendChild(resultItem);
        });
    }
}