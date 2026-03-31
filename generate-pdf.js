const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/resume.html', { waitUntil: 'networkidle0' });
    await page.pdf({
        path: 'C:/Users/Serhat/Desktop/project/portfolio/Serhat_Sahin_CV.pdf',
        format: 'A4',
        margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' },
        printBackground: true,
        displayHeaderFooter: false
    });
    await browser.close();
    console.log('PDF saved to Desktop: Serhat_Sahin_CV.pdf');
})();
