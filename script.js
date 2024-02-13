function toggleForm() {
    const form = document.getElementById('reportForm');
    const toggleButton = document.getElementById('toggleButton');

    if (form.style.display === 'none') {
        form.style.display = 'block';
        toggleButton.textContent = 'Скрыть поля';
    } else {
        form.style.display = 'none';
        toggleButton.textContent = 'Показать поля';
    }
}

class Report {
    constructor() {
        this.content = '';
    }

    addContent(content) {
        this.content += content;
    }

    getResult() {
        return this.content;
    }
}

class ReportBuilder {
    constructor() {
        this.report = new Report();
    }

    buildTitle() { }
    buildTz() { }
    buildAnnotation() { }
    buildTableOfContents() { }
    buildContent() { }
    buildReferences() { }
    buildAppendix() { }

    getReport() {
        return this.report;
    }
}

class LabReportBuilder extends ReportBuilder {
    buildTitle() {
        const template = document.getElementById('template1').innerHTML;
        this.report.addContent(template);
    }

    buildTz() {
        const tz = document.getElementById('tzInput').value;
        const tzHTML = `<div class="width-for-block"><p><strong class="style-for-all">Задание кафедры:</strong></p><p class="style-for-all">${tz}</p></div>`;
        this.report.addContent(tzHTML);
    }

    buildAnnotation() {
        const annotation = document.getElementById('annotationInput').value;
        const annotationHTML = `<div class="width-for-block"><p><strong class="style-for-all">Аннотация:</strong></p><p class="style-for-all">${annotation}</p></div>`;
        this.report.addContent(annotationHTML);
    }

    buildTableOfContents() {
        const tableOfContents = document.getElementById('tableOfContentsInput').value.split('\n').map(ref => ref.trim()).filter(ref => ref !== '');
        const tocHTML = `<div class="width-for-block"><p><strong class="style-for-all">Оглавление:</strong></p><ol class="style-for-all style-for-ol">${tableOfContents.map(ref => `<li>${ref}</li>`).join('')}</ol></div>`;
        this.report.addContent(tocHTML);
    }

    buildContent() {
        const content = document.getElementById('contentInput').value;
        const contentHTML = `<div class="width-for-block"><strong class="style-for-all">Основная часть:</strong><div class="style-for-all">${content}</div></div>`;
        this.report.addContent(contentHTML);
    }

    buildReferences() {
        const references = document.getElementById('referencesInput').value.split('\n').map(ref => ref.trim()).filter(ref => ref !== '');
        const referencesHTML = `<div class="width-for-block"><p><strong class="style-for-all">Список источников:</strong></p><ol class="style-for-all style-for-ol">${references.map(ref => `<li>${ref}</li>`).join('')}</ol></div>`;
        this.report.addContent(referencesHTML);
    }

    buildAppendix() {
        const app = document.getElementById('appInput').value;
        const appContainer = document.createElement('div');
        appContainer.innerHTML = app;
        const appHTML = `<div class="width-for-block"><strong class="style-for-all">Приложение:</strong><div class="style-for-all">${appContainer.innerHTML}</div></div>`;
        this.report.addContent(appHTML);
    }
}

class CourseReportBuilder extends ReportBuilder {
    buildTitle() {
        const template = document.getElementById('template2').innerHTML;
        this.report.addContent(template);
    }

    buildTz() {
        const tz = document.getElementById('tzInput').value;
        const tzHTML = `<div class="width-for-block"><p><strong class="style-for-all">Задание кафедры:</strong></p><p class="style-for-all">${tz}</p></div>`;
        this.report.addContent(tzHTML);
    }

    buildAnnotation() {
        const annotation = document.getElementById('annotationInput').value;
        const annotationHTML = `<div class="width-for-block"><p><strong class="style-for-all">Аннотация:</strong></p><p class="style-for-all">${annotation}</p></div>`;
        this.report.addContent(annotationHTML);
    }

    buildTableOfContents() {
        const tableOfContents = document.getElementById('tableOfContentsInput').value.split('\n').map(ref => ref.trim()).filter(ref => ref !== '');
        const tocHTML = `<div class="width-for-block"><p><strong class="style-for-all">Оглавление:</strong></p><ol class="style-for-all style-for-ol">${tableOfContents.map(ref => `<li>${ref}</li>`).join('')}</ol></div>`;
        this.report.addContent(tocHTML);
    }

    buildContent() {
        const content = document.getElementById('contentInput').value;
        const contentHTML = `<div class="width-for-block"><strong class="style-for-all">Основная часть:</strong><div class="style-for-all">${content}</div></div>`;
        this.report.addContent(contentHTML);
    }

    buildReferences() {
        const references = document.getElementById('referencesInput').value.split('\n').map(ref => ref.trim()).filter(ref => ref !== '');
        const referencesHTML = `<div class="width-for-block"><p><strong class="style-for-all">Список источников:</strong></p><ol class="style-for-all style-for-ol">${references.map(ref => `<li>${ref}</li>`).join('')}</ol></div>`;
        this.report.addContent(referencesHTML);
    }

    buildAppendix() {
        const app = document.getElementById('appInput').value;
        const appContainer = document.createElement('div');
        appContainer.innerHTML = app;
        const appHTML = `<div class="width-for-block"><strong class="style-for-all">Приложение:</strong><div class="style-for-all">${appContainer.innerHTML}</div></div>`;
        this.report.addContent(appHTML);
    }
}

class PracticeReportBuilder extends ReportBuilder {
    buildTitle() {
        const template = document.getElementById('template3').innerHTML;
        this.report.addContent(template);
    }

    buildTz() {
        const tz = document.getElementById('tzInput').value;
        const tzHTML = `<div class="width-for-block"><p><strong class="style-for-all">Задание кафедры:</strong></p><p class="style-for-all">${tz}</p></div>`;
        this.report.addContent(tzHTML);
    }

    buildAnnotation() {
        const annotation = document.getElementById('annotationInput').value;
        const annotationHTML = `<div class="width-for-block"><p><strong class="style-for-all">Аннотация:</strong></p><p class="style-for-all">${annotation}</p></div>`;
        this.report.addContent(annotationHTML);
    }

    buildTableOfContents() {
        const tableOfContents = document.getElementById('tableOfContentsInput').value.split('\n').map(ref => ref.trim()).filter(ref => ref !== '');
        const tocHTML = `<div class="width-for-block"><p><strong class="style-for-all">Оглавление:</strong></p><ol class="style-for-all style-for-ol">${tableOfContents.map(ref => `<li>${ref}</li>`).join('')}</ol></div>`;
        this.report.addContent(tocHTML);
    }

    buildContent() {
        const content = document.getElementById('contentInput').value;
        const contentHTML = `<div class="width-for-block"><strong class="style-for-all">Основная часть:</strong><div class="style-for-all">${content}</div></div>`;
        this.report.addContent(contentHTML);
    }

    buildReferences() {
        const references = document.getElementById('referencesInput').value.split('\n').map(ref => ref.trim()).filter(ref => ref !== '');
        const referencesHTML = `<div class="width-for-block"><p><strong class="style-for-all">Список источников:</strong></p><ol class="style-for-all style-for-ol">${references.map(ref => `<li>${ref}</li>`).join('')}</ol></div>`;
        this.report.addContent(referencesHTML);
    }

    buildAppendix() {
        const app = document.getElementById('appInput').value;
        const appContainer = document.createElement('div');
        appContainer.innerHTML = app;
        const appHTML = `<div class="width-for-block"><strong class="style-for-all">Приложение:</strong><div class="style-for-all">${appContainer.innerHTML}</div></div>`;
        this.report.addContent(appHTML);
    }
}

class ReportDirector {
    constructor(builder) {
        this.builder = builder;
    }

    constructReport() {
        this.builder.buildTitle();
        this.builder.buildTz();
        this.builder.buildAnnotation();
        this.builder.buildTableOfContents();
        this.builder.buildContent();
        this.builder.buildReferences();
        this.builder.buildAppendix();
    }
}

async function generateReport() {
    const titleTemplate = document.getElementById('titleTemplate').value;
    let reportBuilder;

    switch (titleTemplate) {
        case 'template1':
            reportBuilder = new LabReportBuilder();
            break;
        case 'template2':
            reportBuilder = new CourseReportBuilder();
            break;
        case 'template3':
            reportBuilder = new PracticeReportBuilder();
            break;
        default:
            return;
    }

    const director = new ReportDirector(reportBuilder);
    director.constructReport();

    const reportContent = reportBuilder.getReport().getResult();
    const reportBlock = document.getElementById('report');
    reportBlock.innerHTML = reportContent;

    try {
        // Загрузка стилей CSS
        const cssResponse = await fetch('style.css');
        const cssContent = await cssResponse.text();

        // Вставка стилей CSS в HTML-код отчета
        const styledHtmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${titleTemplate}_report</title>
                <style>${cssContent}</style>
            </head>
            <body>
                ${reportContent}
            </body>
            </html>
        `;

        // Преобразование HTML-кода в data URI
        const dataUri = 'data:text/html;charset=utf-8,' + encodeURIComponent(styledHtmlContent);

        // Создание ссылки для скачивания
        const downloadLink = document.createElement('a');
        downloadLink.href = dataUri;
        if (titleTemplate === "template1") {
            downloadLink.download = `Лабораторная_отчет.html`;
        } else if (titleTemplate === "template2") {
            downloadLink.download = `Курсовая_отчет.html`;
        } else if (titleTemplate === "template3") {
            downloadLink.download = `Практическая_отчет.html`;
        }

        // Вставляем ссылку на страницу, чтобы пользователь мог скачать отчет
        document.body.appendChild(downloadLink);

        // Симуляция клика по ссылке для запуска скачивания
        downloadLink.click();

        // Удаляем ссылку из DOM после скачивания
        document.body.removeChild(downloadLink);
    } catch (error) {
        console.error('Ошибка при загрузке или обработке CSS файла:', error);
        alert('Произошла ошибка при загрузке или обработке CSS файла. Пожалуйста, попробуйте еще раз.');
    }
}