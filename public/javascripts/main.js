window.onload = () => {
    app.init();
}

let app = {
    init: function(){
        this.addEvents();
        this.loadContent();
    },
    addEvents: function() {
        document.postForm.addEventListener("submit",this.submitPost);
    },
    submitPost: function(event){
        event.preventDefault();
        alert('asdas');
    },
    loadContent: function(){
        fetch('/api/post',{
            method: 'GET'
        }).then(res => {return res.json()})
        .then(data => {
            let tbody = document.getElementsByClassName("posts")[0];
            tbody.innerHTML = data.reduce((acumulado, post) =>{
                return acumulado + `<tr>
                    <td>${post.nombre}</td>
                    <td>${post.autor}</td>
                </tr>`;
            },""); 
        })
    }
}
