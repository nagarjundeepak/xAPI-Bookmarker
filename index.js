console.log('works!');

const generateBtn = document.querySelector('.generate'); // Generate

// we have to fetch xAPI

generateBtn.addEventListener('click', function () {
    var a = document.createElement('a');
    var linkText = document.createTextNode("xAPI Bookmark");
    a.appendChild(linkText);
    a.title = "xAPI Bookmark";
    a.href = `javascript: function rbm(){window.rbmAuth="Basic ZmU3YTdiYTAyZDU4NmM6Yjc5ZGVmMmZkMWY5ZWQ=",window.rbmEndpoint="https://watershedlrs.com/api/organizations/8501/lrs/",window.rbmEmail="deepaknagarjun@gmail.com",window.rbmName="Nagarjun";var a=document,b=a.createElement("sc"+"ript"),c=a.body,d=a.location;b.setAttribute("src","https://cdn.jsdelivr.net/gh/nagarjundeepak/xAPI/learnedReporter.js");c.appendChild(b)}rbm();void 0`;
    document.body.append(a);
});

// kindly note: i have used Watershed LRS and my auth token which deprecated please change it before proceeding
