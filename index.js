document.addEventListener('DOMContentLoaded', async () => { // Get API 연동
    const posterBox = document.getElementById('poster-box')
    console.log('확인')

    if(!posterBox) return

    const getResponse = await fetch('http://localhost:3000/getAll')
    if(!getResponse.ok) throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.')

    try {
        const posts = await getResponse.json()

        if(posts.length > 0) {
            posterBox.innerHTML = posts.map(post => `
                <div class="poster">
                    <h1>${post.title}</h1>
                    <p>${post.content}</p>
                </div>
            `).join('')
        }
    } catch(error) {
        console.error('Error : ', error)
    }
})


