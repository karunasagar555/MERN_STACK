<<<<<<< HEAD
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const fs = require("fs");
const path = require("path");
const request = require("request");
const cheerio = require("cheerio");

request(url,cb);

function cb(err,res,body)
{
    if(err)
    {
        console.log("error", err);
    }
    else
    {
        handleHTML(body);
    }
}

function handleHTML(html)
{
    let selecTool = cheerio.load(html);
    
=======
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const fs = require("fs");
const path = require("path");
const request = require("request");
const cheerio = require("cheerio");

request(url,cb);

function cb(err,res,body)
{
    if(err)
    {
        console.log("error", err);
    }
    else
    {
        handleHTML(body);
    }
}

function handleHTML(html)
{
    let selecTool = cheerio.load(html);
    
>>>>>>> 3be21ec477184d7e6f742900df745e7b48d8a3cb
}