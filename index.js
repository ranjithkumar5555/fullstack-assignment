fetch("http://localhost:5000/")
    .then((respone) => respone.json())
    .then((data) => {
        data=data.data
        let body = document.getElementById("body")
        body.setAttribute("style", `background:${data.background};width:${data.width}`)
        let headerData = data.header
        let Img = `<img src="${headerData.logoUrl}" style="width:50px;height:50px">`
        let CompanyName = `<p style="font-size:20px;font-weight:bolder">${headerData.brandName}</p>`
        let headerNav = ""
        headerData.navMenu.forEach((nav) => {
            headerNav += `<div style="width:70px;"><a href="#${nav.link}">${nav.name}</a></div>`
        })
        let header = document.createElement("div")

        header.setAttribute("style", `background:${headerData.background};width:${headerData.width};height:${headerData.height};display:flex;flex-direction:row;align-items:center;justify-content:space-between;`)
        header.innerHTML = `<div class="company">${Img + CompanyName}</div>` + `<div style="display:flex;flex-direction:row;align-items:center;justify-contents:center;">${headerNav}</div>`
        body.appendChild(header)
        let sections = "" 
        data.sections.forEach((section) => {
            // console.log(section.action.text)
            sections +=
                `<div style="background:${section.background};
            width:${section.width};height:${section.height};
            text-align:center;"
            id="${section.id}"><br>
            <h1>${section.title}</h1>
             <p>${section.content}</p>
              ${section.action ? ` <p>${section.action.text}</p>
              <a href="${section.action.link}"><br><br><button>${section.action.label}</button></a>` : ""}
         </div>`
        })
        let sectionDiv = document.createElement("section")
        sectionDiv.innerHTML = sections
        body.appendChild(sectionDiv)
        let footer = document.createElement("footer")
        let socialMediaDiv = document.createElement("div")
        let social = ""
        Object.entries(data.footer.socialMedia).forEach(([key, value]) => {
            social+=`<a href="${value}"><i class="fab fa-${key}"></i></a>`
        })
        socialMediaDiv.innerHTML = social
        socialMediaDiv.classList.add("socialMedia")
        let footerUl = document.createElement("ul")
        footerUl.innerHTML = `
        <li> <a href="${data.footer.privacy}">privacy</a></li> 
        <li> <a href="${data.footer.term}">term</a></li> 
        `
        footer.appendChild(socialMediaDiv)
        footer.appendChild(footerUl)
        body.appendChild(footer)
    })



