const postForm = document.getElementById('postForm') // Post API 연동

postForm.addEventListener('submit', async function(event) {
    event.preventDefault()

    const title = document.getElementById('title').value
    const content = document.getElementById('content').value
    const picture = document.getElementById('picture').value

    try {
        const postResponse = await fetch('http://localhost:3000/post', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({ 
                title_data : title,
                content_data : content,
                picture_data : picture
            })
        })

        if(postResponse.ok) {
            alert('Post')

            document.getElementById('title').value = ''
            document.getElementById('content').value = ''
            document.getElementById('picture').value = ''

            window.location.href = 'index.html'
        }
        else alert('Failed')

    } catch(error) {
        console.error('Error : ', error)
    }

})