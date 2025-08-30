const quotes = [
      { text: "The best way to get started is to quit talking and begin doing.", author: "~Walt Disney" },
      { text: "Don't let yesterday take up too much of today.", author: "~Will Rogers" },
      { text: "It's not whether you get knocked down, it's whether you get up.", author: "~Vince Lombardi" },
      { text: "If you are working on something exciting, it will keep you motivated.", author: "~Unknown" },
      { text: "Success is not in what you have, but who you are.", author: "~Bo Bennett" },
      { text:"The best way to get started is to quit talking and begin doing.", author:"~Walt Disney" },
      { text:"Don’t let yesterday take up too much of today.", author:"~Will Rogers" },
      { text:"It’s not whether you get knocked down, it’s whether you get up.", author:"~Vince Lombardi" },
      { text:"If you are working on something exciting, it will keep you motivated.", author:"~Steve Jobs" },
      { text:"Success is not final, failure is not fatal.", author:"~Winston Churchill" },
      { text:"The only way to do great work is to love what you do.", author:"~Steve Jobs" },
      { text:"In the middle of every difficulty lies opportunity.", author:"~Albert Einstein" },
      { text:"Happiness is not something ready-made. It comes from your own actions.", author:"~Dalai Lama " },
      { text:"It does not matter how slowly you go as long as you do not stop.", author:"~Confucius" }
                                          
    ];
    const quoteText = document.getElementById('quote');
    const authorText = document.getElementById('author');
    const newQuoteBtn = document.getElementById('new-quote');

    newQuoteBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex].text;
    authorText.textContent = "- " + quotes[randomIndex].author;})