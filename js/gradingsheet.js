// Function to get Grade Average, Scale(1-5) and Remarks and display it uisng result box

function getAverage()
{
    var batch = document.getElementById('batch-no').value;

    var fn = document.getElementById('first-name').value;
    var mn = document.getElementById('middle-name').value;
    var sn = document.getElementById('surname-name').value;

    var course = document.getElementById('course').value;
    var section = document.getElementById('section').value;

    var sub = document.getElementById('subject').value;

    var prelim = parseInt(document.getElementById('prelim').value);
    var midterm = parseInt(document.getElementById('midterm').value);
    var final = parseInt(document.getElementById('final').value);

    if(batch > 0 && !fn == "" && !sn == "" && course > 0 && section > 0 && sub > 0 && prelim > 0 && midterm > 0 && final > 0)
    {
        if(prelim < 101 && midterm < 101 && final < 101)
        {
            var course_meaning = "";
            var section_meaning = "";

            var sub_code = "";
            var sub_name = "";

            var ave_scale = "";
            var ave_remarks = ""; 
        
            switch(course)
            {
                case '1':
                    course_meaning = "DICT";
                break;

                case '2':
                    course_meaning = "IT";
            }

            switch(section)
            {
                case '1':
                    section_meaning = "21M1";
                break;

                case '2':
                    section_meaning = "21M2";
                break;

                case '3':
                    section_meaning = "21M3";
                break;

                case '4':
                    section_meaning = "22M1";
                break;

                case '5':
                    section_meaning = "22M2";
                break;

                case '6':
                    section_meaning = "22M3";
            }

            switch(sub)
            {
                case '1':
                    sub_code = "NET";
                    sub_name = "Networking";
                break;

                case '2':
                    sub_code = "WTS";
                    sub_name = "Web Technologies & Systems";
                break;

                case '3':
                    sub_code = "RDBMS";
                    sub_name = "Relational Database Management System";
            }

            var fullname = sn + ", " + fn + " " + mn;
            var scInfo = "Batch " + batch + " " + course_meaning + "-" + section_meaning;
            var average = (prelim + midterm + final) / 3;

            if(average >= 98 && average <= 100)
            {
                ave_scale = "1.00";
                ave_remarks = "Passed (Highest Honor)";
                document.getElementById("ave-percentage").style.backgroundColor = "rgba(0, 128, 0, 0.45)";
                document.getElementById("ave-scale").style.backgroundColor = "rgba(0, 128, 0, 0.45)";
                document.getElementById("remarks-dis").style.backgroundColor = "rgba(0, 128, 0, 0.45)";
                document.getElementById('bar-ave').style.backgroundColor = "rgba(0, 128, 0, 0.45)";
            }

            if(average >= 95 && average < 98)
            {
                ave_scale = "1.25";
                ave_remarks = "Passed (Honor)";
                document.getElementById("ave-percentage").style.backgroundColor = "rgba(153, 205, 50, 0.45)";
                document.getElementById("ave-scale").style.backgroundColor = "rgba(153, 205, 50, 0.45)";
                document.getElementById("remarks-dis").style.backgroundColor = "rgba(153, 205, 50, 0.45)";
                document.getElementById('bar-ave').style.backgroundColor = "rgba(153, 205, 50, 0.45)";
            }

            if(average >= 92 && average < 95)
            {
                ave_scale = "1.50";
                ave_remarks = "Passed (Honor)";
                document.getElementById("ave-percentage").style.backgroundColor = "rgba(153, 205, 50, 0.45)";
                document.getElementById("ave-scale").style.backgroundColor = "rgba(153, 205, 50, 0.45)";
                document.getElementById("remarks-dis").style.backgroundColor = "rgba(153, 205, 50, 0.45)";
                document.getElementById('bar-ave').style.backgroundColor = "rgba(153, 205, 50, 0.45)";
            }

            if(average >= 89 && average < 92)
            {
                ave_scale = "1.75";
                ave_remarks = "Passed";
                document.getElementById("ave-percentage").style.backgroundColor = "rgba(255, 255, 0, 0.45)";
                document.getElementById("ave-scale").style.backgroundColor = "rgba(255, 255, 0, 0.45)";
                document.getElementById("remarks-dis").style.backgroundColor = "rgba(255, 255, 0, 0.45)";
                document.getElementById('bar-ave').style.backgroundColor = "rgba(255, 255, 0, 0.45)";
            }

            if(average >= 86 && average < 89)
            {
                ave_scale = "2.00";
                ave_remarks = "Passed";
                document.getElementById("ave-percentage").style.backgroundColor = "rgba(255, 255, 0, 0.45)";
                document.getElementById("ave-scale").style.backgroundColor = "rgba(255, 255, 0, 0.45)";
                document.getElementById("remarks-dis").style.backgroundColor = "rgba(255, 255, 0, 0.45)";
                document.getElementById('bar-ave').style.backgroundColor = "rgba(255, 255, 0, 0.45)";
            }

            if(average >= 83 && average < 86)
            {
                ave_scale = "2.25";
                ave_remarks = "Passed";
                document.getElementById("ave-percentage").style.backgroundColor = "rgba(255, 255, 0, 0.45)";
                document.getElementById("ave-scale").style.backgroundColor = "rgba(255, 255, 0, 0.45)";
                document.getElementById("remarks-dis").style.backgroundColor = "rgba(255, 255, 0, 0.45)";
                document.getElementById('bar-ave').style.backgroundColor = "rgba(255, 255, 0, 0.45)";
            }

            if(average >= 80 && average < 83)
            {
                ave_scale = "2.50";
                ave_remarks = "Passed";
                document.getElementById("ave-percentage").style.backgroundColor = "rgba(255, 255, 0, 0.45)";
                document.getElementById("ave-scale").style.backgroundColor = "rgba(255, 255, 0, 0.45)";
                document.getElementById("remarks-dis").style.backgroundColor = "rgba(255, 255, 0, 0.45)";
                document.getElementById('bar-ave').style.backgroundColor = "rgba(255, 255, 0, 0.45)";
            }

            if(average >= 77 && average < 80)
            {
                ave_scale = "2.75";
                ave_remarks = "Passed";
                document.getElementById("ave-percentage").style.backgroundColor = "rgba(255, 255, 0, 0.45)";
                document.getElementById("ave-scale").style.backgroundColor = "rgba(255, 255, 0, 0.45)";
                document.getElementById("remarks-dis").style.backgroundColor = "rgba(255, 255, 0, 0.45)";
                document.getElementById('bar-ave').style.backgroundColor = "rgba(255, 255, 0, 0.45)";
            }

            if(average >= 75 && average < 77)
            {
                ave_scale = "3.00";
                ave_remarks = "Passed";
                document.getElementById("ave-percentage").style.backgroundColor = "rgba(255, 255, 0, 0.45)";
                document.getElementById("ave-scale").style.backgroundColor = "rgba(255, 255, 0, 0.45)";
                document.getElementById("remarks-dis").style.backgroundColor = "rgba(255, 255, 0, 0.45)";
                document.getElementById('bar-ave').style.backgroundColor = "rgba(255, 255, 0, 0.45)";
            }

            if(average < 75)
            {
                ave_scale = "5.00";
                ave_remarks = "Failed";
                document.getElementById("ave-percentage").style.backgroundColor = "rgba(255, 0, 0, 0.45)";
                document.getElementById("ave-scale").style.backgroundColor = "rgba(255, 0, 0, 0.45)";
                document.getElementById("remarks-dis").style.backgroundColor = "rgba(255, 0, 0, 0.45)";
                document.getElementById('bar-ave').style.backgroundColor = "rgba(255, 0, 0, 0.45)";
            }

            document.getElementById("subject-code-dis").innerHTML = sub_code;
            document.getElementById("subject-dis").innerHTML = "'" +sub_name+ "'";

            document.getElementById("prelim-dis").innerHTML = prelim;
            document.getElementById("midterm-dis").innerHTML = midterm;
            document.getElementById("final-dis").innerHTML = final;
        
            document.getElementById("name-dis").value = fullname;
            document.getElementById("slvl-dis").value = scInfo;

            document.getElementById("ave-percentage").value = average;
            document.getElementById("ave-scale").value = ave_scale;
            document.getElementById("remarks-dis").value = ave_remarks;

            var graphSubName = document.getElementById("subject-dis").innerHTML;
        
            document.getElementById('graph-subject-name').innerHTML = "'" +graphSubName+ "'";
            
            document.getElementById("rBox").style.transform = "scale(1)";
            document.getElementById("form").style.transform = "scale(0)";

            setTimeout(graphLoadingEffectOn, 1);
            setTimeout(graphLoadingEffectOff, 3000);
            setTimeout(displayGraph, 3100);
            setTimeout(clickAnywhereMessage, 6500);
        }

        else
        {
            alert("Term Grades must be Lower or Equal to 100!");    
        }
    }

    else
    {
        alert("All Input Fields with '*' Must Have Values!");
    }
}

// Function to display Graphical Report

function displayGraph()
{
    var preWidth = document.getElementById('prelim').value + "%";
    var midWidth = document.getElementById('midterm').value + "%";
    var fiWidth = document.getElementById('final').value + "%";
    var aveWidth = document.getElementById("ave-percentage").value + "%";

    document.getElementById('bar-pre').style.width = preWidth;
    document.getElementById('bar-mid').style.width = midWidth;
    document.getElementById('bar-fi').style.width = fiWidth;
    document.getElementById('bar-ave').style.width = aveWidth;
}

// Function to display Alert Box Message for Click Anywhere

function clickAnywhereMessage() 
{
    alert("Click Anywhere To Close Result Box");
}

// Function to display loading icon

function loadingEffectOn()
{
    document.getElementById("loading-icon").style.display = "block";
}

function graphLoadingEffectOn()
{
    document.getElementById("graph-loading-icon").style.display = "block";
}

// Function to hide loading icon

function loadingEffectOff()
{
    document.getElementById("loading-icon").style.display = "none";
}

function graphLoadingEffectOff()
{
    document.getElementById("graph-loading-icon").style.display = "none";
}

// Function sequence settings

function getResult()
{
    const divRes = document.getElementById("loading-icon");
    const divResCSS = window.getComputedStyle(divRes, null);
    
    let currentDisplay = divResCSS.getPropertyValue("display");

    if(currentDisplay == 'none')
    {
        setTimeout(loadingEffectOn, 1);
        setTimeout(loadingEffectOff, 5000);
        setTimeout(getAverage, 5020);
    }
}

// Function to hide result box

function closeWindow()
{
    document.getElementById('batch-no').value = 0;

    document.getElementById('first-name').value = "";
    document.getElementById('middle-name').value = "";
    document.getElementById('surname-name').value = "";

    document.getElementById('course').value = 0;
    document.getElementById('section').value = 0;

    document.getElementById('subject').value = 0;

    document.getElementById('prelim').value = "";
    document.getElementById('midterm').value = "";
    document.getElementById('final').value = "";

    document.getElementById('bar-pre').style.width = "1%";
    document.getElementById('bar-mid').style.width = "1%";
    document.getElementById('bar-fi').style.width = "1%";
    document.getElementById('bar-ave').style.width = "1%";
    
    document.getElementById("rBox").style.transform = "scale(0)";
    document.getElementById("form").style.transform = "scale(1)";
}

// Function for Onload Message Box

function openMessageBox()
{
    document.getElementById('wMes-box').style.display = "block";
}

function onloadEffect() 
{
    setTimeout(openMessageBox, 500);
}

function closeMessageBox()
{
    document.getElementById('wMes-box').style.display = "none";
}

// Function for Focus and Blur change bg-color

function focusMe(myself)
{
    myself.style.backgroundColor = "lavenderblush";
    myself.style.boxShadow = "0px 1px 5px black";
}

function blurMe(myself)
{
    myself.style.backgroundColor = "rgba(230, 230, 250, 0.85)";
    myself.style.boxShadow = "none";
}

// Design Checking for Result Box

function popUp()
{
    document.getElementById('rBox').style.transform = "scale(1)";
    document.getElementById("form").style.transform = "scale(0)";
}
