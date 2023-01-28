document.addEventListener('DOMContentLoaded',() => {
    //let inputArea = document.getElementsByTagName('input').item(0);
    let inputArea = document.getElementsByClassName('inputTable').item(0);
    inputArea.addEventListener('input',(event) => {
        calc();
    });
});

function calc() {
    let totalResult = "";
    let scheduledResult = "";
    let actualHours = 0;
    let svcHours = 0;
    let baseHours = Number(document.getElementById('baseDays').value) * 8;
    let absencesHours = Number(document.getElementById('absences').value) * 8;
    let scheOverTimes = Number(document.getElementById('scheduledOverTimes').value);
    let overTimes = Number(document.getElementById('overTimes').value);
    console.log(typeof(baseHours) + ";" + baseHours);
    console.log(typeof(absencesHours) + ":" + absencesHours);
    console.log(typeof(overTimes) + ":" + overTimes);
    actualHours = baseHours - absencesHours + overTimes;
    svcHours = baseHours + overTimes;
    totalResult = "累計：" + actualHours + "（" + Number(actualHours - baseHours) + "）／" + svcHours + "（" + Number(overTimes) + "）";
    scheduledResult = "予定：" + Number(baseHours + scheOverTimes) + "（" + Number(scheOverTimes) + "）／" + Number(baseHours + scheOverTimes) + "（" + Number(scheOverTimes) + "）";
    document.getElementById('result').textContent=totalResult + "\n" +scheduledResult;
}
