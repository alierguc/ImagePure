function imagepure(_imageOptions){
    
    /// alierguc1 2021 

    //#region Image Or Element Shadow Palette
    let defaultImage = document.querySelectorAll('.imagepure');
    if(_imageOptions.shadow_type === 'hard')_imageOptions.shadow_type = '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);'
    else if(_imageOptions.shadow_type === 'medium') _imageOptions.shadow_type = ' 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);';
    else if(_imageOptions.shadow_type ==='soft') _imageOptions.shadow_type = '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);';
    else if(_imageOptions.shadow_type === 'carnival') _imageOptions.shadow_type = '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)';
    else _imageOptions.shadow_type = '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);';
    //#endregion

    defaultImage.forEach(image =>{
        image.style.boxShadow = `${_imageOptions.shadow_type}`

        if(_imageOptions.padding){
            image.style.padding = `1em`;
        }
    })
}

module.export.imagepure = imagepure;