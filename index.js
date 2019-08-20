let file = document.getElementById('myfiles');
let columns = document.querySelectorAll('.column');


let arrImg = [];

file.onchange = () => {
    for(const key in file.files)  {
            const element = file.files[key];

            if(element.type == 'image/jpeg' || element.type == 'image/png'){
                let parent_column = minParent(columns);

                let img = createImg(element.webkitRelativePath);
                arrImg[key] = img;
                parent_column.appendChild(img);
            }
            let i = 0;
            let clearTime = setInterval( () => {
                arrImg[i].setAttribute('style','display:initial');
                arrImg[i].classList.add('animated','bounce');
                i++;
                i == arrImg.length ? clearInterval(clearTime) : undefined;
            },200)
        }
    }


function minParent(parentNode) {
    let arry = [];

    parentNode.forEach((element, i) => {
        arry[i] = element.children.length;
    });
    let min = Math.min.apply(null, arry);

    for(let i = 0; i < parentNode.length; i++) {
        if(parentNode[i].children.length == min){
            return parentNode[i];
        }
    }
}

function createImg(imgsrc) {
    let img = document.createElement('img');
    img.setAttribute('src', imgsrc);
    img.className = 'img';
    return img;
}