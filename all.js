const container = document.querySelector('.container');

for(x=2 ; x<=9 ; x++){
    let str = '';
    for(i=1 ; i<=9 ; i++){        
        let content = '<li>'+x+' × '+i+' = '+x*i+'</li>';
        str += content;             
    }
    let div = 
        '<div class="content">' + 
            '<ul>' + 
                '<span class="number">' + x + '</span>' + str + 
            '</ul>' + 
        '</div>';
    container.innerHTML += div
}