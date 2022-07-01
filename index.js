function pdf() {
    const x = document.getElementById('page');

    html2pdf()
        .from(x)
        .save();

}