const postForm = document.getElementById('postForm') // Post API 연동

postForm.addEventListener('submit', async function(event) {
    event.preventDefault()

    const title = document.getElementById('title').value
    const content = document.getElementById('content').value

    try {
        const postResponse = await fetch('http://localhost:3000/post', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                title_data : title,
                content_data : content
            })
        })

        if(postResponse.ok) {
            alert('Post')

            document.getElementById('title').value = ''
            document.getElementById('content').value = ''
        }
        else alert('Failed')

    } catch(error) {
        console.error('Error : ', error)
    }

})



document.addEventListener('DOMContentLoaded', async () => { // Get API 연동
    const posterBox = document.getElementById('poster-box')

    const getResponse = await fetch('http://localhost:3000/getAll')
    if(!getResponse.ok) throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.');

    try {
        const posts = await getResponse.json()

        posterBox.innerHTML = posts.map(post => `
            <div class="poster">
                <h1>${post.title}</h1>
                <p>${post.content}</p>
            </div>
        `).join('')
    } catch(error) {
        console.error('Error : ', error)
    }
})


