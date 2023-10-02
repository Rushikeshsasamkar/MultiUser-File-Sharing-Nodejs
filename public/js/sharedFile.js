const messageBox = $('#messageBox')
const message = $('#message')
const deleteAll = $('#deleteAll')


window.addEventListener('load', async()=>{
    fetchFiles()
})


deleteAll.click((e)=>{
    e.preventDefault()
    fetch('/deleteAllFiles',{
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(res => {
        message.text(res.message)
        messageBox.addClass('animBoxIn')
        setTimeout(()=>{
            messageBox.removeClass('animBoxIn')
            messageBox.addClass('animBoxOut')
        },3000)
        messageBox.removeClass('animBoxOut')
        fetchFiles()
    })
    .catch(err=>{
        console.error(err)
    })
})

const logout = $('#logout')
logout.click((e)=>{
    e.preventDefault()
    fetch('/logout',{
        method: 'POST'
    })
    .then(res=> res.json())
    .then(res=> {
        if(!res.success){
            message.text(res.message)
            messageBox.addClass('animBoxIn')
            setTimeout(()=>{
                messageBox.removeClass('animBoxIn')
                messageBox.addClass('animBoxOut')
            },3000)
            messageBox.removeClass('animBoxOut')
        } else {
            message.text(res.message)
            messageBox.addClass('animBoxIn')
            setTimeout(()=>{
                messageBox.removeClass('animBoxIn')
                messageBox.addClass('animBoxOut')
                location.href = '/login'
            },3000)
            messageBox.removeClass('animBoxOut')
        }
    })
    .catch(err=>{
        console.error(err)
    })
})

function fetchFiles() {
    fetch('/sharedFiles', {
        method: 'GET'
    })
    .then(res=>res.json())
    .then(res => {
        if(res.success && res.files.length > 0){
            fileTemplate(res.files)
            console.log('123123')
        } else {
            $('#sharedReload').html(`
                <h2> looks a bit empty here </h2>
            `)
        }
    })
    .catch(err=>{
        console.error(err)
    })
}

function fileTemplate (files) {
    const filesR = document.querySelector('#sharedReload')
    let Data = ``
    files.forEach(file => {
        Data += `
        <div data-id="${file._id}" class="file">
            <div class="del">
                <a class="btn btn-download" href="/downloadFile/${file._id}">
                    <svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Cloud Download</title><path d='M472.7 189.5c-13.26-8.43-29.83-14.56-48.08-17.93A16 16 0 01412 159.28c-7.86-34.51-24.6-64.13-49.15-86.58C334.15 46.45 296.21 32 256 32c-35.35 0-68 11.08-94.37 32a150.13 150.13 0 00-41.95 52.83A16.05 16.05 0 01108 125.8c-27.13 4.9-50.53 14.68-68.41 28.7C13.7 174.83 0 203.56 0 237.6 0 305 55.93 352 136 352h104V224.45c0-8.61 6.62-16 15.23-16.43A16 16 0 01272 224v128h124c72.64 0 116-34.24 116-91.6 0-30.05-13.59-54.57-39.3-70.9zM240 425.42l-36.7-36.64a16 16 0 00-22.6 22.65l64 63.89a16 16 0 0022.6 0l64-63.89a16 16 0 00-22.6-22.65L272 425.42V352h-32z'/></svg>
                </a>
                <a class="btn btn-delete" href="/deleteFile/${file._id}">&times</a>
            </div>
            <p class="file__filename">
                <strong>Filename::</strong>
                <a class="link" href="/downloadFile/${file._id}">
                    ${file.filename}
                </a>
            </p>
            <p class="file__date">
                <strong>Added on::</strong> 
                ${file.createdAt}
            </p>
        </div>
        `
    })
    filesR.innerHTML = Data
}