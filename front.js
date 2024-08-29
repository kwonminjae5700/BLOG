const postForm = document.getElementById('postForm')

postForm.addEventListener('submit', async function(event) { // Form 태그 내용들 백엔드로 전송
    event.preventDefault()

    const title = document.getElementById('title').value
    const content = document.getElementById('content').value

    try {
        const response = await fetch('http://localhost:3000/post', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                title_data : title,
                content_data : content
            })
        })

        if(response.ok) {
            alert('Post')
            
            document.getElementById('title').value = ''
            document.getElementById('content').value = ''
        }
        else alert('Failed')

    } catch(error) {
        console.error('Error : ', error)
    }

})


