let myLeads = []
// that's myLead Variable (array) to storage the Lead that we found it. 

const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
// the three line in above, these the buttons that we will use it

const ulEl = document.getElementById("ul-el")
// this is the unsorted list that we will print the URL's in it

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
// leadsFromLocalStorage: This variable has the data that sent by the object localStorage, and localStorage is an object
// to storage the data relatively permanently even we refresh the webpage 

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
// This if statement to check the leadsFromLocalStorage has data ot not 
// if yes, render it (print the URL's) 
// if not, if statement will not work, That's it :)

tabBtn.addEventListener("click", function(){   
    // this is a listener with a clousre function to get URL's from chrome tab in Browsing 
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

function render(leads) {
    // This function to print or render the URL's (myleads array) that we need it.
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // in this loop we wipp print URL's by li element
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
    // the previous line to print the URL's in unsorted list
}

deleteBtn.addEventListener("dblclick", function() {
    // This is a listener with a clousre function , it works when we do double click on delete button (DELETE ALL)
    // it delete all data in Myleads array :)
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    // This is a listener with a clousre function, add the url in the input form when we click on SAVE INPUT
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})