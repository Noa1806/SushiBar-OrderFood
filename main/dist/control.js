function goToCstmrPage() {
    try {
        if (!customerLink)
            throw new Error("We can't show the customer page");
        customerLink.click();
    }
    catch (error) {
        console.error("The system failed");
    }
}
